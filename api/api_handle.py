from flask import request, redirect, flash, session, url_for, make_response
from api_main import app, mongo
from response import Response
import bcrypt
import json
from flask.sessions import SecureCookieSessionInterface
import time

app.secret_key = 'mysecret' 

wrongPassword = False 
nonexistentUser = False
existentUser = False
alreadyLoggedIn = False

@app.route('/register', methods=['POST'])
def createNewUser():
    global wrongPassword 
    global nonexistentUser
    global existentUser
    document = request.form.to_dict()
    name = document['firstName'] + ' ' + document['lastName']
    emailEntered = document['fsuEmail']
    # TODO: Add verification for fsu.edu email // also email existence module 

    user = mongo.db.users.find_one({'email': emailEntered})

    rawPassword = document['password']
    rawPassword.encode('utf-8')
    hashedPassword = bcrypt.hashpw(rawPassword.encode('utf8'), bcrypt.gensalt())
    skillsArray = [document['firstSkill'], document['secondSkill'], document['thirdSkill'], document['fourthSkill'], document['fifthSkill']]

    if user is None:
        wrongPassword = False
        nonexistentUser = False
        existentUser = False
        mongo.db.users.insert_one({'name': name, 'email': document['fsuEmail'], 'hashedPassword': hashedPassword, 'gradYear': document['gradYear'], 'skills': skillsArray})
        user = mongo.db.users.find_one({'email': emailEntered})
        session['username'] = user['name']
        return redirect("http://localhost:3000/cards")
    else:
        wrongPassword = False
        nonexistentUser = False
        existentUser = True
        return redirect("http://localhost:3000/cards")

@app.route('/login', methods=['POST', 'GET'])
def login(): 
  global wrongPassword 
  global nonexistentUser
  global existentUser
  if request.method == 'POST': 
    document = request.form.to_dict()
    emailEntered = document['fsuEmail']
    passwordEntered = document['password']
    
    user = mongo.db.users.find_one({'email': emailEntered})
  
    if user is None:
        wrongPassword = False
        nonexistentUser = True
        existentUser = False
        return redirect("http://localhost:3000/cards")
    else:
        if (bcrypt.checkpw(passwordEntered.encode('utf8'), user['hashedPassword'])):
            wrongPassword = False
            nonexistentUser = False
            existentUser = False
            session['username'] = user['name']
            return redirect("http://localhost:3000/cards")
        else:
            wrongPassword = True
            nonexistentUser = False
            existentUser = False
            return redirect("http://localhost:3000/cards")
  elif request.method == 'GET':
    if 'username' in session:
      return "0"

    else:
      if wrongPassword is True:
        wrongPassword = False
        nonexistentUser = False
        existentUser = False
        return "2"
      elif nonexistentUser is True:
        wrongPassword = False
        nonexistentUser = False
        existentUser = False
        return "3"
      elif existentUser is True:
        wrongPassword = False
        nonexistentUser = False
        existentUser = False
        return "1"

      else:
        wrongPassword = False
        nonexistentUser = False
        existentUser = False
        return "5"

@app.route('/logout', methods=['POST'])
def logout():
  session.pop('username')
  return redirect("http://localhost:3000/")

@app.route('/isLoggedIn', methods=['GET'])
def isLoggedIn():
  if 'username' in session:
    return "0"
  return "1"


      
