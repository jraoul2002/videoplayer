'use strict';


const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
//const progress = player.querySelector('.progress');
//const progressBar = player.querySelector('.progress__filled');


export function handleRangeUpdate() {
    video[this.name] = this.value;
  }