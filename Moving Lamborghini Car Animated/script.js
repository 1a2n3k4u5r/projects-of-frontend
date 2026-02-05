const audio = new Audio('sound.mp3');
audio.loop = true;

// user interaction is required
document.addEventListener('click', () => {
    audio.play();
}, { once: true });