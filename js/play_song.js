var a = new Audio("../audio/song1.mp3");
let heart = document.querySelector(".but");
heart.addEventListener("click", (e) => {
    if (a.paused || a.currentTime <= 0) {
        a.play();
      } else {
        a.pause();
      }
});