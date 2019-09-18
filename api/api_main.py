import json
import configparser
from bson import json_util
from flask import Flask
from flask_pymongo import PyMongo
from response import Response

# Read Config
config = configparser.ConfigParser()
config.read('config.ini')

# Init Flask App
app = Flask(__name__)

# Init MongoDB Connection
app.config["MONGO_URI"] = config['MongoDB']['URI']
mongo = PyMongo(app)

# Start Routes
@app.route('/')
def index():
    return Response(200, {}).serialize()

@app.route('/users')
def listUsers():
    # Search for first 10 users
    cursor = list(mongo.db.users.find({}).limit(10))

    # Because find() returns a cursor, we need to serialize it.
    # Cursor contains docs. Iterate thru and compile into one dict.
    users = json_util.dumps(cursor)

    # Return users
    return app.response_class(
        response=Response(200, cursor).serialize(),
        status=200,
        mimetype='application/json'
    )