const openBtn = document.getElementById('open-btn');
const giftBox = document.getElementById('gift-box');
const birthdayContent = document.getElementById('birthday-content');

openBtn.addEventListener('click', () => {
    // Hide the gift box
    giftBox.style.display = 'none';
    
    // Show the birthday content
    birthdayContent.style.display = 'block';
    
    // Fire confetti
    fireConfetti();
    
    // Play a tiny subtle sound effect if you want, or just rely on visuals
});

function fireConfetti() {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        
        // Fire confetti from multiple origins
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}
