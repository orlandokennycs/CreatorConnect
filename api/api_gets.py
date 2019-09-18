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
