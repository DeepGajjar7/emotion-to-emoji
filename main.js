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

function check(){
    img=document.getElementById("captureimage");
    classifier.classify(img,gotresults)
}

function gotresults(error,results){
    if (error){
        console.error(error)
    }
    else {
        console.log(results);
        prediction1=results[0].label;
        prediction2=results[1].label;
        document.getElementById("result_emotion_name").innerHTML=prediction1;
        document.getElementById("result_emotion_name1").innerHTML=prediction2;
        speak();
        if (prediction1=="Happy"){
            document.getElementById("update_emoji").innerHTML="&#128522;";
        }
        if (prediction1=="Sad"){
            document.getElementById("update_emoji").innerHTML="&#128532;";
        }
        if (prediction1=="Angry"){
            document.getElementById("update_emoji").innerHTML="&#128545;";
        }
        if (prediction2=="Happy"){
            document.getElementById("update_emoji1").innerHTML="&#128522;";
        }
        if (prediction2=="Sad"){
            document.getElementById("update_emoji1").innerHTML="&#128532;";
        }
        if (prediction2=="Angry"){
            document.getElementById("update_emoji1").innerHTML="&#128545;";
        }
    }
}