'use strict';

import { handleRangeUpdate } from '../handlers/handleRangeUpdate.js';

let mousedown = false;
const player = document.querySelector('.player');
const progress = player.querySelector('.progress');
//const progressBar = player.querySelector('.progress__filled');

const ranges = player.querySelectorAll('.player__slider');




ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);