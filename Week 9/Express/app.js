// Import the express module. This module is a framework that provides a set of 
// features for web and mobile applications.
import express from "express";

// Initialize an instance of express and store it in the app variable.
const app = express();

// Define a variable to store the port number that your server will listen on.
const port = 3000;

// Define a route handler for GET requests made to the root path ("/").
// When a client makes a GET request to the root path, this function is called.
app.get("/", (req, res) => {
  // The function takes two arguments: req and res.
  // req (short for "request") is an object containing information about the 
  // client's request, such as the request path, the HTTP method, and the headers.
  // res (short for "response") is an object used to send a response back to the client.

  // Use the res.send() function to send a string as a response. This string will be 
  // displayed in the client's browser or returned to the client's HTTP client.
  res.send("Hello Bootcampers!");
});

// Tell your express app to start listening for incoming HTTP requests on the given port.
// The second argument is a callback function that's called when the server successfully 
// starts listening.
app.listen(port, () => {
  // Use console.log() to print a message to the console. This is useful for letting 
  // you know that the server has successfully started and is ready to accept requests.
  console.log(`Server is up and running on port: ${port}`);
});