'use strict';

import { handleRangeUpdate } from '../handlers/handleRangeUpdate.js';

const player = document.querySelector('.player');
const ranges = player.querySelectorAll('.player__slider');


ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));