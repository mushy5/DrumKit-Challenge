var length = document.querySelectorAll(".drum").length;
var current_sound = "";
var sound = "";

function playsound(drum_name){
  switch (drum_name) {
    case "w":
              sound = "sounds/tom-1.mp3";
              break;
    case "s":
              sound="sounds/tom-2.mp3";
              break;
    case "t": sound="sounds/tom-3.mp3";
              break;
    case "u": sound="sounds/tom-4.mp3";
              break;
    case "v": sound="sounds/kick-bass.mp3";
              break;
    case "x": sound="sounds/song.mp3";
              break;
    case "y": sound="sounds/snare.mp3";
              break;
    default:  sound="sounds/crash.mp3";
  }
  return sound;
}

function stopaudio(audio) {
			audio.pause();
			audio.currentTime = 0;
		}

function add_animation(element){
  element.classList.add("pressed");
  const myTimeout = setTimeout(remove_animation, 100);
//}

function remove_animation() {
  element.classList.remove("pressed");
}

}
for(var i=0; i<length; i++)
{
    var drum = document.querySelectorAll(".drum");
    //drum now contains list of elements with .drum class.
    drum[i].addEventListener("click",function(){
      add_animation(this);
      var audio = new Audio(playsound(this.innerHTML));
      audio.play();
      current_sound = audio;
  });

}
var a = document.querySelector(".stop");
a.addEventListener("click", function(){
  add_animation(this);

  stopaudio(current_sound);
});
