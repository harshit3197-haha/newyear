const audio = document.getElementById("audio");
const play = document.getElementById("play");
const cd = document.getElementById("cd");
const tap = document.getElementById("tapScreen");
const main = document.getElementById("main");

tap.onclick = () => {
  tap.style.display = "none";
  main.style.display = "block";

  audio.play();
  cd.style.animationPlayState = "running";
};

play.onclick = () => {
  if (audio.paused) {
    audio.play();
    play.innerText = "❚❚";
    cd.style.animationPlayState = "running";
  } else {
    audio.pause();
    play.innerText = "▶";
    cd.style.animationPlayState = "paused";
  }
};

