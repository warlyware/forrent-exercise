var overlay = document.getElementById('overlay');
var overlayContent = document.getElementById('overlay-content');

setTimeout(function() {
  overlay.classList.remove('hidden');
  overlayContent.classList.add('overlay-animate');
  overlayContent.classList.remove('hidden');
}, 3000);

setTimeout(function() {
  overlayContent.classList.add('hidden');
  overlay.classList.add('hidden');
}, 5000);
