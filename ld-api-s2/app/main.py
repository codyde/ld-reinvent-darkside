from psycopg2.extras import RealDictCursor
import psycopg2
from flask_cors import CORS
import datetime
import json
import os
import requests
from flask import Flask, jsonify, request
import eventlet
import jwt
from cryptography.fernet import Fernet
eventlet.monkey_patch()


pghost = os.environ.get('POSTGRES_HOST')
pguser = os.environ.get('POSTGRES_USER')
pgpass = os.environ.get('POSTGRES_PASSWORD')
pgport = os.environ.get('POSTGRES_PORT')
pgdb = os.environ.get('POSTGRES_DATABASE')
SECRET_KEY = os.environ.get('secret_key')
connstring = f"host=db port=5432 dbname=posts user=postgres password=postgres_password sslmode=disable"

app = Flask(__name__)
app.secret_key = SECRET_KEY
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True

CORS(app)

# @app.route("/api", methods=["GET"])
# def manage_post():
#     conn = psycopg2.connect(connstring)
#     cur = conn.cursor(cursor_factory=RealDictCursor)
#     data = cur.execute('SELECT * FROM textData ORDER BY id DESC')
#     test = cur.fetchall()
#     return jsonify(test)

@app.route("/api/health", methods=["GET"])
def get_health():
    stats = {
        'version': '2',
        'status': 'healthy',
        'location': 'tatooine'
    }
    return jsonify(stats)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers',
                         'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods',
                         'GET,PUT,POST,DELETE,OPTIONS')
    return response
