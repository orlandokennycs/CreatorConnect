from flask import request, redirect, flash, session, url_for, make_response
from api_main import app, mongo
from response import Response
from flask_login import LoginManager, login_required, login_user, logout_user
import bcrypt
import json
import pprint
from flask.sessions import SecureCookieSessionInterface
from response import Response
from django.http import HttpResponse



app.secret_key = 'mysecret'

@app.route('/cards', methods=['POST', 'GET'])
def userSession():
  #path('setcookie', setcookie)
  if 'username' in session:
    print('You are logged in as ' + session['username'])
    username = request.cookies.get('session')
    print(username)
    resp = make_response(Response(200, {}).serialize())
    resp.set_cookie('somecookiename', 'I am cookie')
    return resp
  return Response(400, {}).serialize()
  
  

@app.route('/register', methods=['POST'])
def createNewUser():
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
        mongo.db.users.insert_one({'name': name, 'email': document['fsuEmail'], 'hashedPassword': hashedPassword, 'gradYear': document['gradYear'], 'skills': skillsArray})
        user = mongo.db.users.find_one({'email': emailEntered})
        session['username'] = user['name']
        return redirect("http://localhost:3000/cards")
    else:
        return redirect("http://localhost:3000/existentUser")

@app.route('/login', methods=['POST', 'GET'])
def login():
  if request.method == 'POST': 
    document = request.form.to_dict()
    emailEntered = document['fsuEmail']
    passwordEntered = document['password']
    
    user = mongo.db.users.find_one({'email': emailEntered})

    if user is None:
        return redirect("http://localhost:3000/nonexistentUser")
    else:
        if (bcrypt.checkpw(passwordEntered.encode('utf8'), user['hashedPassword'])):
            pprint.pprint(user)
            session['username'] = user['name']
            return redirect("http://localhost:3000/cards")
        else:
            return redirect("http://localhost:3000/wrongPassword")
  elif request.method == 'GET':
    if 'username' in session:
      print('You are logged in as ' + session['username'])
      return Response(200, {}).serialize()
    print("You are not logged in." + session['username'])
  return Response(400, {}).serialize()


@app.route('/logout', methods=['POST'])
def logout():
  session.pop('username')
  return redirect("http://localhost:3000/")


def setcookie(request):
    html = HttpResponse("<h1>Dataflair Django Tutorial</h1>")
    html.set_cookie('dataflair', 'Hello this is your Cookies', max_age = None)
    return html
