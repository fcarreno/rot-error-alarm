# rot-error-alarm-server

### SIMPLE EXPRESS TEST API SERVER, including a single GET endpoint.
### Appends errors to a log file, whenever an odd number is received as parameter.

#### Sample API route is as follows `http://localhost:8000/api/test?number=[numberValue]`

*** Works in conjunction with error log file watcher process, under:
https://github.com/fcarreno/rot-error-alarm-watcher

*** Errors are logged using specific JSON format --> [bunyan err](https://github.com/trentm/node-bunyan#recommendedbest-practice-fields)

### SETUP & RUN
1. Clone the repo
2. `npm install` (install dependencies)
3. `npm start` (start API server)





