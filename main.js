var prediction1="";
var prediction2="";

console.log("ml5 version="+ml5.version);
var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/797nNedup/model.json',model_loaded);
function model_loaded(){
    console.log("model is loaded");
}

Webcam.set({
    width:350,
    heigth:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(
        function (data_uri){
            document.getElementById("result").innerHTML='<img id="captureimage" src="'+data_uri+'">';
        }
    );
}

function speak(){
    var synth=window.speechSynthesis;
    speakdata1="the first preidition is "+prediction1;
    speakdata2="and the second preidition is "+prediction2;
    var utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterThis)
}
