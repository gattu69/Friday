const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");

const SpeechRecognition =
 window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
    
    console.log("vr active");

};

recognition.onresult= function(event){
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    transcript=transcript.toLowerCase()
     console.log(`my words : ${transcript}`);
   if (transcript.includes("hello friday")){
    readOut("hello sir");
    
   }
   if(transcript.includes("open youtube")){
    readOut("opening youtube sir");
    window.open("https://www.youtube.com/");
   }
};

// recognition.continuous = true;

recognition.onend = function () {
    
    console.log("vr deactive");
};

startBtn.addEventListener("click", () => {
    recognition.start();
});

stopBtn.addEventListener("click", () => {
    recognition.stop();
});

function readOut(message) {
    const speech = new SpeechSynthesisUtterance();

  //  const allVoices = speechSynthesis.getVoices();

    speech.text = message;
 //   speech.voice = allVoices[13];
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log("speaking out");
}

speakBtn.addEventListener("click", () => {
    readOut("hi, my dear friends, let's do something epic today");
});

window.onload= function () {
    readOut("   ")
};
