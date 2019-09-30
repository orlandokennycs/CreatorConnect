from api_main import app, mongo
from response import Response

# Index
@app.route('/')
def index():
    return Response(200, {}).serialize()

# /users
@app.route('/users')
def listUsers():
    # Search for first 10 users and typecast to list
    users = list(mongo.db.users.find({}).limit(10))

    # Return new response object formatted with users
    return Response(200, users).serialize()

# /users/<count>
@app.route('/users/<int:count>')
def listUserCount(count):
    users = list(mongo.db.users.find({}).limit(count))
    return Response(200, users).serialize()

# /randUsers
@app.route('/randUsers')
def listRandomUsers():
    # Search for random 5 users and typecast to list
    users = list(mongo.db.users.aggregate([ { "$sample": { "size": 5 } } ]))

    # Return new response object formatted with users
    return Response(200, users).serialize()

# /getUser/<username>
@app.route('/getUser/<string:username>')
def searchByUsername(username):
    # Returns user specified object
    users = list(mongo.db.users.find({"fsu_id" : username}))

    return Response(200, users).serialize()

# /getbyGradDate/<year>
@app.route('/getbyGradDate/<int:year>')
def listByGradDate(year):
    # Returns array of 3 users with specified grad date
    users = list(mongo.db.users.find({"grad_date" : year}).limit(3))
    return Response(200, users).serialize()

# /getByGradDate/<year>/<count>
@app.route('/getByGradDate/<int:year>/<int:count>')
def chooseCountGradDate(year, count):
    # Returns array of specified amount of users with specified grad date
    users = list(mongo.db.users.find({"grad_date" : year}).limit(count))
    return Response(200, users).serialize()

# ideas
# /getByGradRange
# /getBySkills
