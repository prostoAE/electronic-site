"use strict";

function toggleClassToActive() {
  this.classList.toggle('active');
}

document.querySelector('#categories').onclick = toggleClassToActive;