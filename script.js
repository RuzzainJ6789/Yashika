let heartSize = 100;
let pulse = 0;
let clicked = false;
let heartPulse = 0;
const messageText = "HIii my BABYYY I hope you like this ji well the time rn is 6:56 AM June 21…and i wanna start with love You’re my baby my princess my world my little muse my snuggle bunny my everything ..okay love here’s a big kiss (click the heart) not happy here are a lot of more kisses (spam click the heart on the bottom right) HEEHHE this is nothing baby I wanna give you my everything meri jaan…I love you wifey this is a small gift from your bastard…(there’s more baby)";
let stars = [];

// Floating love notes
const loveNotes = [
  "You are my favorite notification!",
  "Your smile is my sunshine ☀️",
  "Thinking of you always 💭",
  "You make my heart skip a beat!",
  "I love you more every day 💖",
  "You are my happy place 🏡",
  "Can't wait to make more memories!",
  "You + Me = Forever",
  "You are my muse 🎨",
  "Your laugh is my favorite song 🎶",
  "You are the reason I believe in magic ✨",
  "Every moment with you is a treasure 💎",
  "You light up my world!",
  "Forever yours 💌",
  "You are my dream come true 🌙"
];

function setup() {
  let canvas = createCanvas(300, 300);
  canvas.parent('canvas-container');
  createStars();
}

function draw() {
  clear();
  translate(width / 2, height / 2);
  // Soft, natural pulse
  let scaleFactor = 1 + 0.06 * Math.sin(heartPulse) + 0.02 * Math.sin(heartPulse * 2);
  heartPulse += 0.045;
  if (clicked) scaleFactor *= 1.13;
  scale(scaleFactor);
  // Heart glow
  for (let i = 8; i > 0; i--) {
    fill(255, 182, 218, 10 / i);
    drawHeart(heartSize + i * 3);
  }
  fill(255, 105, 180);
  drawHeart(heartSize);
}

function drawHeart(size) {
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.01) {
    let x = 16 * pow(sin(a), 3);
    let y = - (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
    vertex(x * size / 20, y * size / 20);
  }
  endShape(CLOSE);
}

function showMuah() {
  const muah = document.getElementById('muah-text');
  if (!muah) return;
  muah.textContent = 'MUAHH';
  muah.classList.remove('muah-hidden');
  muah.classList.add('muah-show');
  setTimeout(() => {
    muah.classList.remove('muah-show');
    muah.classList.add('muah-hidden');
  }, 1200);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    clicked = !clicked;
    let message = select('#message');
    if (clicked) {
      message.addClass('show');
      showMuah();
    }
  }
}

function createStars() {
  // Remove old stars
  document.querySelectorAll('.star').forEach(e => e.remove());
  stars = [];
  for (let i = 0; i < 50; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    let size = (Math.random() * 2 + 1).toFixed(1);
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.position = 'absolute';
    star.style.animationDelay = `${Math.random() * 2}s`;
    document.body.appendChild(star);
    stars.push({el: star, speed: Math.random() * 0.1 + 0.02});
  }
  animateStars();
}

function animateStars() {
  stars.forEach(star => {
    let top = parseFloat(star.el.style.top);
    top += star.speed;
    if (top > 100) top = 0;
    star.el.style.top = `${top}%`;
  });
  requestAnimationFrame(animateStars);
}

function typeWriter(text, element, speed = 50) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

function createSparkles(x, y, count = 10) {
  const container = document.getElementById('canvas-container');
  for (let i = 0; i < count; i++) {
    let sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    let angle = Math.random() * 2 * Math.PI;
    let dist = Math.random() * 60 + 20;
    let sx = x + Math.cos(angle) * dist;
    let sy = y + Math.sin(angle) * dist;
    sparkle.style.left = `${sx - 4}px`;
    sparkle.style.top = `${sy - 4}px`;
    sparkle.style.position = 'absolute';
    container.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  }
}

function createAnimatedHearts() {
  const bg = document.getElementById('animated-bg');
  if (!bg) return;
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement('div');
    heart.className = 'animated-heart';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = `-${Math.random() * 20 + 10}px`;
    heart.style.animationDelay = `${Math.random() * 10}s`;
    heart.style.opacity = 0.12 + Math.random() * 0.12;
    bg.appendChild(heart);
  }
}

function createKissEmojis(count = 18) {
  const emojiOptions = ['❤️💋', '😘'];
  for (let i = 0; i < count; i++) {
    const kiss = document.createElement('div');
    kiss.textContent = emojiOptions[Math.floor(Math.random() * emojiOptions.length)];
    kiss.style.position = 'fixed';
    kiss.style.left = `${Math.random() * 100}%`;
    kiss.style.top = `${Math.random() * 100}%`;
    kiss.style.fontSize = `${Math.random() * 1.5 + 1.5}rem`;
    kiss.style.opacity = '0';
    kiss.style.zIndex = 99;
    kiss.style.pointerEvents = 'none';
    kiss.style.transition = 'opacity 0.2s, transform 1.1s cubic-bezier(.68,-0.55,.27,1.55)';
    document.body.appendChild(kiss);
    setTimeout(() => {
      kiss.style.opacity = '1';
      kiss.style.transform = `scale(${Math.random() * 0.6 + 1.1}) rotate(${Math.random() * 40 - 20}deg)`;
    }, 10);
    setTimeout(() => {
      kiss.style.opacity = '0';
      kiss.style.transform += ' translateY(-40px)';
    }, 1100);
    setTimeout(() => kiss.remove(), 1700);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const messageElem = document.getElementById('message');
    if (messageElem) {
      messageElem.classList.add('show');
      const typedElem = document.getElementById('typed-message');
      if (typedElem) {
        typeWriter(messageText, typedElem);
      }
    }
  }, 1000);

  const btn = document.getElementById('love-letter-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      let letter = document.getElementById('love-letter');
      if (letter) {
        letter.classList.toggle('hidden');
        letter.classList.toggle('show');
        if (typeof confetti === 'function') {
          confetti({
            particleCount: 50,
            spread: 50,
            origin: { y: 0.5 }
          });
        }
        createSparkles(letter.offsetWidth / 2, 0, 12);
      }
    });
  }

  // Floating heart button interaction
  const floatingHeart = document.getElementById('floating-heart');
  if (floatingHeart) {
    floatingHeart.addEventListener('click', () => {
      createKissEmojis(18);
    });
  }

  createAnimatedHearts();
});
