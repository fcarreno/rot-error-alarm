const express = require('express');
const app = express();
const logger = require('./utils/logging/logger');


// For this exercise, normally I would just use an error tracking service.
// Using the library/SDK/API provided by the service, to send the errors,
// and let the service take care of the dashboard/reporting/insights, alerts, etc.
app.get('/api/test', (req, res) => {

    let testNumber = parseInt(req.query.number);

    if(testNumber){
        let errorScenario = (testNumber % 2) != 0; // odd numbers will end up in error

        if(errorScenario){
            res.send('USER FRIENDLY ERROR MESSAGE HERE...');
            logger.logError(new Error(`CANNOT HANDLE ODD NUMBERS - INPUT: ${testNumber}`));
        }
        else{
            // Request processing here....
            res.send('GREAT! THANKS FOR YOUR EVEN NUMBER :-)');
        }
    }
    else{
        res.send('PLEASE PROVIDE A TEST NUMBER FOR THE API TO PROCESS (/api/test?number=[NUMBER])...');
    }

});

app.listen(8000, () => {
    console.log('SIMPLE EXPRESS TEST API SERVER LISTENING ON PORT 8000...');
});






