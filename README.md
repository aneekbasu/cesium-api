# Cesium API
This is the backend code for FIS Ethos.

### Tech

The current stack used in the backend is:

* [Node.js](https://nodejs.org/en/) - It is an open source server environment.
* [Express](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework.
* [PostgreSQL](https://www.postgresql.org/)- PostgreSQL is a open source object-relational database system.

### Installation

The application requires node v14.0 or greater.

To run the backend server, follow the next steps:- 

- Navigate to the project directory
```sh
$ cd cesium-project-api
```
- Install the dependencies
```sh
$ npm i
```
- Change the database credentails in the .env file
```sh
$ nano .env
```
- Create the database tables
```sh
$ npm run db-create
```
- Populate the construction_site table
```sh
$ npm run db-seed
```
- Start the application
```sh
$ npm start
```
- Test the application
```sh
$ npm test
```

### Assumptions
- Anyone can access the materials data of any site without any authentication.

### Time Taken
- Planning and Study - 40 minutes.
- Creating the platform - 30 minutes.
- Creating the APIs - 60 hour
- Creating the  database scripts - 30 minutes
- Creating the tests - 30 minutes
- Total: 190 minutes (3 hours 10 minutes)

### Future Scope Improvement
- Validate inputs in a more robust way.
- Add more database scripts to handle most of the database operations form within the application.
- Add test cases to validate other cases as well. Also the make the test cases more robust.
- Add documentation.

### Things to Remember
- Please use a valid site from the database while creating the material in postman.

### API's

Please find the Postman Collection for the APIs here:- [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/a3478c96c7f2117613b6?action=collection%2Fimport)
