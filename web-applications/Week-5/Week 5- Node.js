/* An error first callback is a callback that when initiated checks for an error object. If one is encoutnered than a predetermined error message is displayed, otherwise the error parameter is null and the function(s) are called. This helps define what should happen ahead of time when errors, allowing for predetermined responses to specific errors and allows for the system to keep running if possible. */

function(err, data) {
    if(err) {
        return console.log("Error found: " + err);
    }
    console.log(data);
};

/*Promises are exactly what they sound like, where a "promise" is made to provide a value in the future. A promise object is a proxy until either a value is returned or not, in which case the promise is broken. This is a part of the asynchronous aspect of Node wherein once a callback is started a promise is made which then allows for other callbacks to occur. The application is not left waiting for a value but rather manages the "promise" until such a time it is kept or broken.*/

let done= true

const doneYet= new Promise((resolve, reject) {
    if (done) {
        resolve({msg: "It is done."});
    } else {
        reject(new Error({msg: "The task is still in progress."}));
    }
});

/*A test pyramid is a breakdown of the different stages in testing code for Node. The three levels are small unit tests, medium integration tests, and larger end to end tests. This is used for testing and documentation prurposes to ensure */

/*In the case of an application the first stage would be testing individual functions (units). This will help ensure that the overall application functions properly. The second stage is testing the integration of the previous functions and overall application with other parts such as a database or file systems. The last stage would be testing the deployed application and accessing it through the UI users would. This can test the end to end efficiency of both the UI and REST API.
In the case of a company app the functions and code would all be tested, then those would be tested in integration with the comapnies database and then the deployed application would be utilized as an eployee would (from a phone or other device) to test it works as intended.*/ 