const video = document.querySelector(".video");
const play = document.querySelector(".play-button");

play.addEventListener("click", (e) => {
  if (video.paused) {
    video.play();
    e.target.textContent = "❚ ❚";
  } else {
    video.pause();
    e.target.textContent = "▶";
  }
});
