const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const question = document.getElementById('question');
const catImg = document.getElementById('cat-img');

let yesBtnSize = 1.2;

// Make the "No" button move when hovered
noBtn.addEventListener('mouseover', () => {
    const card = document.getElementById('main-card');
    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Calculate maximum positions to keep button inside card area or screen
    // We'll move it relative to the viewport to be funnier
    const maxX = window.innerWidth - btnRect.width - 20;
    const maxY = window.innerHeight - btnRect.height - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    // Increase Yes button size slightly each time they try to click No
    yesBtnSize += 0.2;
    yesBtn.style.transform = `scale(${yesBtnSize})`;
    yesBtn.style.fontSize = `${1.2 + (yesBtnSize * 0.1)}rem`;
});

// Also trigger on click just in case they manage to click it
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    noBtn.dispatchEvent(new Event('mouseover'));
});

// Success state when "Yes" is clicked
yesBtn.addEventListener('click', () => {
    question.textContent = "YAY! I knew you'd say yes! ❤️";
    catImg.style.animation = "none";
    
    // Optional: swap image to a happy cat if we had one, 
    // but the generated cat is cute enough. Let's make it bounce!
    catImg.style.animation = "bounce 1s infinite";
    
    // Hide buttons
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';

    // Create falling hearts
    createHearts();
});

function createHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 100);
}

// Add CSS for bounce dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px) scale(1.1); }
    }
`;
document.head.appendChild(style);
