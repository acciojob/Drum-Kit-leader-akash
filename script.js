//your JS code here. If required.
window.addEventListener('keydown', playSound);

function playSound(event) {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  const sound = key.querySelector('.sound');
  if (!key) return;

  // Add CSS class for visual feedback
  key.classList.add('playing');

  // Play audio
  // Replace the sound logic with your own audio files or API calls
  sound.innerHTML = 'Playing...';

  // Remove CSS class after the transition ends
  key.addEventListener('transitionend', function() {
    key.classList.remove('playing');
  });
}
