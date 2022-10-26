var a = new Audio("../audio/song2.mp3");
function palyAll(){
    if (a.paused || a.currentTime <= 0) {
        a.play();
      } else {
        a.pause();
      }
}