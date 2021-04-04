

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



