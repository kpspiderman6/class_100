var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function Start(){
    document.getElementById("input1").innerHTML="";
    recognition.start();
    
}
recognition.onresult=function(event){
    console.log(event);
    var result_1 = event.results[0][0].transcript;
    console.log(result_1);
    document.getElementById("input1").innerHTML=result_1;
    if(result_1=="take my selfie"){
        console.log("taking selfie");
        speakup();
    }
}
function speakup(){
    var speech_data = window.speechSynthesis;
    speech_data2 = "please wait takin you selfie";
    var speech_data3 = new SpeechSynthesisUtterance(speech_data2);
    speech_data.speak(speech_data3);
    Webcam.attach(camera);
    setTimeout(
        function (){
            take_selfie();
            save();
        },2000
    );
}
Webcam.set({
    width : 300,
    height : 300,
    image_format: 'png',
    png_quality : 90
});
camera = document.getElementById("webcam-div");
function save(){
    link = document.getElementById("link");
    img = document.getElementById("selfie").src ;
    link.href=img;
    link.click();
}
function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie-display").innerHTML='<img id="selfie"src="'+data_uri+'"/>'
    });
}
