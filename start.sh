#!/bin/bash

# server start script
# at least for backend lol

echo "THIS SCRIPT WILL ONLY WORK ON OUR DEVELOPMENT SERVER"
echo "IF YOU'RE GETTING ERRORS RUNNING THIS ON YOUR RIG, YOU HAVE BEEN WARNED"

# key locations
CERT_FILE=/etc/letsencrypt/live/canipleasegetsome.space/cert.pem
KEY_FILE=/etc/letsencrypt/live/canipleasegetsome.space/privkey.pem

# other variables we'll want
HOST=0.0.0.0
PORT=80

# run it
cd api
export FLASK_ENV=development
export FLASK_APP=api_main.py
flask run --host $HOST --port $PORT --certfile $CERT_FILE --keyfile $KEY_FILE