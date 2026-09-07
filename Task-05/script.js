const track = document.getElementById('track');
const cards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');

let currentIndex = 0;

function getVisibleCards() {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

function getMaxIndex() {
  return Math.max(0, cards.length - getVisibleCards());
}

function createDots() {
  dotsContainer.innerHTML = '';
  const totalDots = getMaxIndex() + 1;
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === currentIndex) dot.classList.add('active');
    dot.addEventListener('click', () => moveTo(i));
    dotsContainer.appendChild(dot);
  }
}

function updateSlider() {
  const cardWidth = cards[0].getBoundingClientRect().width;
  const gap = 24; // 1.5rem gap
  track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;

  document.querySelectorAll('.dot').forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
}

function moveTo(index) {
  currentIndex = Math.min(Math.max(index, 0), getMaxIndex());
  updateSlider();
}

prevBtn.addEventListener('click', () => moveTo(currentIndex - 1));
nextBtn.addEventListener('click', () => moveTo(currentIndex + 1));

window.addEventListener('resize', () => {
  createDots();
  moveTo(currentIndex);
});

createDots();