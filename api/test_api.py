import json
import pytest
import configparser
from os import environ
from api_main import app

@pytest.fixture
def client():
    # Set testing mode
    app.config['TESTING'] = True

    # Make config.ini if on github
    if environ.get('GITHUB_WORKFLOW') is not None:
        config = configparser.ConfigParser()
        config['MongoDB']['URI'] = environ['MONGO_URI']
        with open('config.ini', 'w') as configfile:
            config.write(configfile)

    # Start testing
    with app.test_client() as client:
        yield client

def test_site_root(client):
    """Test if the app runs."""

    rv = client.get('/')
    assert b'Success' in rv.data

def test_user_data(client):
    """Test if the returns user data."""

    rv = client.get('/users')
    res = json.loads(rv.data)
    assert len(res['data']) == 10