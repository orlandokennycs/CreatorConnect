import sys
import json
import configparser
from os import environ
from flask import Flask
from bson import json_util
from flask_pymongo import PyMongo
from flask_cors import CORS as cors
from pymongo.errors import ConfigurationError, OperationFailure

# Get config
config = configparser.ConfigParser()
if environ.get('GITHUB_WORKFLOW') is not None:
    # Make config.ini if on github
    config['MongoDB'] = {}
    config['MongoDB']['URI'] = environ['MONGO_URI']
    with open('config.ini', 'w') as configfile:
        config.write(configfile)
else:
    # else, read form config.ini
    config.read('config.ini')

# Init Flask App
app = Flask(__name__)
cors(app)

# Init MongoDB Connection and run sample query to test authentication
app.config["MONGO_URI"] = config['MongoDB']['URI']
try:
    mongo = PyMongo(app)
    list(mongo.db.users.find({}).limit(1))
except ConfigurationError as err:
    if (err.args[0] == "A DNS label is empty."):
        print("[ERROR]: MongoDB URI returning SRV error. If you're on the FSUSecure")
        print("         network, we recommend using the expanded URI to circumvent")
        print("         this error.")
    sys.exit(1)
except OperationFailure as err:
    if (err.args[0] == "bad auth Authentication failed."):
        print("[ERROR]: MongoDB URI returning authentication error. Make sure you")
        print("         are using a URI with a valid username/password combo.")
    sys.exit(1)


# Now that app is initialized, import other paths
# Import all get requests
import api_gets

if __name__ == '__main__':
    app.run()