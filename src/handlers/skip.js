'use strict';


export function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
   }