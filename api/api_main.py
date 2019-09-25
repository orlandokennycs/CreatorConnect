import json
import configparser
from bson import json_util
from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS as cors

# Read Config
config = configparser.ConfigParser()
config.read('config.ini')

# Init Flask App
app = Flask(__name__)
cors(app)

# Init MongoDB Connection
app.config["MONGO_URI"] = config['MongoDB']['URI']
mongo = PyMongo(app)

# Now that app is initialized, import other paths
# Import all get requests
import api_gets
