var context = new AudioContext();
var buffer;
var source;
var isPlaying = false;



function grab1(){
fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/377648/since_alt1.mp3")  
  
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    buffer = audioBuffer;
  });

}

function grab2(){
fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/377648/blu_mon_1b.wav")       
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    buffer = audioBuffer;
  });

}

function grab3(){
fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/377648/cherry_pull_1.wav")       
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    buffer = audioBuffer;
  });

}

function grab4(){
fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/377648/remember_pull_1.wav")       
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    buffer = audioBuffer;
  });

}

function grab5(){
fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/377648/silence3.wav")       
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    buffer = audioBuffer;
  });

}



function start() {
  
  
  grab4();
   
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("myCanvas").innerHTML = coords;
  
  
  this.gainNode = context.createGain();
  this.source = context.createBufferSource();
  this.source.buffer = this.buffer;
  source.loop = false;
  source.playbackRate.value = x/537;


  this.source.connect(this.gainNode);

  this.gainNode.connect(context.destination);


  this.gainNode.gain.value = y/1177;

  
  var t = context.currentTime;
  source.start(t);
  source.stop(t + 1.97);





}








/*

window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 38) {
      grab4();
    
     
   } 
     else if(key == 40){
      grab4();
   
   
     }
  
    else if(key == 37){
      grab5();
    
   
     }
  
   else if(key == 39){
      grab5();
   
     }
}
*/