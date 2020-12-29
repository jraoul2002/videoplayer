'use strict';

import { updateButton } from '../handlers/updateButton.js';


const player = document.querySelector('.player');
const video = player.querySelector('.viewer');


video.addEventListener('play', updateButton);