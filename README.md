## A Simple Rest API for algorithm

Installation:

- Run `npm install` to install dependencies

- Run `npm start` to start the api

### 1. API for random number

Endpoint: /random-number

Example request: `http://localhost:3000/random-number?start=1&end=23`

Response: `{ "randomNumber": 4 }`

### 2. API for Person Profile

Endpoint: /generate-profile

Example request : `http://localhost:3000/generate-profile?properties=firstName,lastName,email,age,address,avatar`

Response: `{ "profile": { "firstName": "Emily", "lastName": "Jones", "email": "emily.jones@outlook.com", "age": 33, "address": "789 Oak Ave.", "avatar": "https://randomuser.me/api/portraits/women/6.jpg" } }`

### 3. API for Charcter Count

Endpoint: /count-character-in-string

Example request : `http://localhost:3000/count-character-in-string?string=masudf d@ks#han .2023%''`

Response: `{ "counts": { "letters": 9, "symbols": 2, "numeric": 0 } }`
