
console.log('hello');

const api_key = "";

const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
const snapButton = document.getElementById('snap-button');

const vision_url = 'https://vision.googleapis.com/v1/images:annotate';

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

    // const requestBody = "";
    const requestBody = {
        "requests": [
          {
            "image": {
              "source": {
                "imageUri": "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2014/11/worlds-largest-selfie.jpg?itok=0mmbRWFo"
              }
             },
             "features": [
               {
                 "maxResults": 10,
                 "type": "FACE_DETECTION"
               }
             ]
          }
        ]
      };

    fetch(vision_url, {
        method: "POST", 
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json',
            'key': api_key,
            'Access-Control-Allow-Origin':  'http://127.0.0.1:8088',
            // 'Access-Control-Allow-Methods': 'POST',
            // 'Access-Control-Allow-Headers': 'Content-Type'
        }
      }).then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error(error));
    
    
};

let flipCamera = () => {
    webcam.flip(); 
    webcam.start();
};



