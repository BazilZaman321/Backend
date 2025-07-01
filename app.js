/////////////////                      NODE BASIC




// 1️⃣ Import the built-in 'http' module which helps us create a web server
const http = require('http');

// 2️⃣ Set a port number where the server will listen (4000 in this case)
const port = 4000;

// 3️⃣ Create the server using http.createServer()
// This function runs whenever a user makes a request to the server
const server = http.createServer((req, res) => {
  
  // 4️⃣ res.write() is used to send data back to the browser
  res.write('Welcome to my simple Node.js server!');

  // 5️⃣ res.end() is used to tell Node.js that the response is complete
  res.end();
});

// 6️⃣ server.listen() starts the server and tells it to listen on the given port
// It also has a callback function that runs when the server starts successfully
server.listen(port, (error) => {

  // 7️⃣ If there’s an error while starting the server, log it
  if (error) {
    console.log('Something went wrong:', error);
  } 
  // 8️⃣ Otherwise, log that the server is running successfully
  else {
    console.log(`Server is running at http://localhost:${port}`);
  }
});







///////////////////////////////////////////////////////////////////////////////////////////////

// Step 1: Import the 'http' module which helps us create a web server
const http = require('http');

// Step 2: Set the port number where our server will run
const port = 4000;

// Step 3: Create the server using http.createServer
// This function runs every time someone makes a request to our server
const server = http.createServer((req, res) => {
  // req.url gives us the path the user is trying to access (like / or /contact)

  if (req.url === '/') {
    res.write('man'); // If user is at home page (/), send "man"
  } else if (req.url === '/contact') {
    res.write('contact'); // If user visits /contact, send "contact"
  } 

  res.end(); // End the response (you must call this to send the final response)
});

// Step 4: Start the server and listen on the defined port
server.listen(port, (error) => {
  // If something goes wrong while starting the server
  if (error) {
    console.log('Something went wrong:', error); // Print error
  } else {
    // If everything is okay, show that server is running
    console.log('Server is running on http://localhost:' + port);
  }
});
