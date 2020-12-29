'use strict';

import{handleProgress} from '../handlers/handleProgress.js';


const player = document.querySelector('.player');

const video = player.querySelector('.viewer');

video.addEventListener('timeupdate', handleProgress);