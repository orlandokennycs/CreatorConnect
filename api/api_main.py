import configparser
from flask import Flask
from flask_pymongo import PyMongo
from response import Response

# Read Config
config = configparser.ConfigParser()
config.read('config.ini')

app = Flask(__name__)
app.config["MONGO_URI"] = config['MongoDB']['URI']
mongo = PyMongo(app)

@app.route('/')
def index():
    return Response(200, {}).__dict__