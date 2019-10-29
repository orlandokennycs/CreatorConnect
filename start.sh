#!/bin/bash

# server start script
# at least for backend lol
# TODO: Add proper SSL support

# disclaimer
echo "THIS SCRIPT WILL ONLY WORK ON OUR DEVELOPMENT SERVER"
echo "IF YOU'RE GETTING ERRORS RUNNING THIS ON YOUR RIG, YOU HAVE BEEN WARNED"

# key locations
CERT_FILE=/etc/letsencrypt/live/canipleasegetsome.space/cert.pem
KEY_FILE=/etc/letsencrypt/live/canipleasegetsome.space/privkey.pem

# other variables we'll want
LOGFILE=../logs/$(date +"%H-%M.%m-%d-%Y").server.log
SESSIONNAME=flaskServer
HOST=0.0.0.0
PORT=80 #443

# cd into api and prepare
cd api
export FLASK_ENV=development
export FLASK_APP=api_main.py

# Set up virtualization
tmux has-session -t $SESSIONNAME 2>/dev/null
if [ $? != 0 ]; then
  tmux kill-session -t $SESSIONNAME
fi

# run server
tmux new-session -d -s $SESSIONNAME flask run --host $HOST --port $PORT > $LOGFILE