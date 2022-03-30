//https://teachablemachine.withgoogle.com/models/THE0KuYGb/
function startdancing(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/GN8Mc70Ztw/model.json',modelloaded);
}

function modelloaded(){
    classifier.classify(gotresult);
}

function gotresult(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("soundname").innerHTML="I can hear- "+results[0].label;
        if(results[0].label=="Dog"){
            document.getElementById("image").src="dog.jfif";
        }
        if(results[0].label=="Cat"){
            document.getElementById("image").src="cat.jfif";
        }
    }
}
