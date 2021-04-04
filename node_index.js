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
   response.writeHead(200,{'Content-Type':'text/html'});
   response.write(`
   <!DOCTYPE HTML>
   <html>
   <head>
     <title>COVID Counter</title>
     <script type="text/javascript" src="https://unpkg.com/webcam-easy/dist/webcam-easy.min.js"></script>
     
     
     <link rel="stylesheet" href="stylesheet.css">
   </head>
   <body>
       <h1>Hello world!</h1>
       <button id="snap-button" onclick="takePhoto()">take photo</button>
       <button id="flip-camera" onclick="flipCamera()">flip camera</button>
       <!--ask user for location-->
       <!--button to access camera and upload photo-->
       <video id="webcam" autoplay playsinline width="640" height="480"></video>
       <canvas id="canvas" class="d-none"></canvas>
       <audio id="snapSound" src="audio/snap.mp3" preload = "auto"></audio>
   
       <!--<script src="index.js"></script>-->
       <script>
           const webcamElement = document.getElementById('webcam');
           const canvasElement = document.getElementById('canvas');
           const snapSoundElement = document.getElementById('snapSound');
           const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
           const snapButton = document.getElementById('snap-button');
   
   
           webcam.start()
           .then(result =>{
               console.log("webcam started");
           })
           .catch(err => {
               console.log(err);
           });
   
           let takePhoto = async() => {
               let picture = webcam.snap();
               console.log('photo taken');
               console.log(picture);
               document.getElementById('p');
               // document.querySelector('#download-photo').href = picture;
           };
   
           let flipCamera = () => {
               webcam.flip(); 
               webcam.start();
           };
       </script>
   </body>
   </html>
`);
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
