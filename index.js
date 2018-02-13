const player = document.querySelector('.player');
const viewer = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const skipButtons = player.querySelector('[data-skip]');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelector('.player__slider');

function togglePlay() {
  if (video.paused) {
    video.play();
  }
}
