async function quickstart() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
  
    // Performs label detection on the image file
    const [result] = await client.labelDetection('./resources/worlds-largest-selfie.jpg');
    const labels = result.labelAnnotations;

    let outString = "\nLabesl:";

    console.log('\nLabels:');

    labels.forEach(label => {
        console.log(label.description)
    });
}


//server.js
const http = require('http');
const server = http.createServer();

server.on('request',(request,response)=>{
   response.writeHead(200,{'Content-Type':'text/plain'});
   response.write('<h1>hello world!</h1>?');
   response.end();
});

server.listen(3000,()=>{
  console.log('Node server created at port 3000');
});

quickstart();


// node/flask? server that accepts incoming requests -> responds with html page. 
// The page allows users to start camera, take snap, etc. 
// when user takes snap, send back to server, along with location information, 
    // server will pass along to vision api and covid api
// when server receives back from these apis, it will process the info to build webpage
// it will send updated webpage back to user. 
