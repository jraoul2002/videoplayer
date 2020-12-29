'use strict';


const player = document.querySelector('.player');

const toggle = player.querySelector('.toggle');


export function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  toggle.textContent = icon;
}