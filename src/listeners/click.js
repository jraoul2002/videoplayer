'use strict';

import { togglePlay } from '../handlers/togglePlay.js';
import { scrub } from '../handlers/scrub.js';
import { skip } from '../handlers/skip.js';


const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
// const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');



video.addEventListener('click', togglePlay);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
progress.addEventListener('click', scrub);
