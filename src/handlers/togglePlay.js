'use strict';

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');



 export function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}