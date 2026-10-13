document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const profileImg = document.querySelector('.portrait-frame img');
if (profileImg) {
  profileImg.src = 'assets/images/profile-lite.jpg?v=20261013-1626';
  profileImg.alt = 'Onur Yiğitol profil fotoğrafı';
  profileImg.loading = 'eager';
  profileImg.decoding = 'async';
  profileImg.style.width = '100%';
  profileImg.style.height = '100%';
  profileImg.style.objectFit = 'cover';
  profileImg.style.objectPosition = '50% 28%';
}

const stableProjectImages = {
  sirta: 'assets/images/sirta.svg?v=20261013-1857',
  tubitak: 'assets/images/tubitak.svg?v=20261013-1857',
  asra: 'assets/images/asra.svg?v=20261013-1857',
  mavi: 'assets/images/mavi2053.svg?v=20261013-1857',
  yol: 'assets/images/yol2053.svg?v=20261013-1857',
  offshore: 'assets/images/offshore-hybrid.webp?v=20261013-1857',
  smartcity: 'assets/images/green-city.svg?v=20261013-1857',
  digitaltwin: 'assets/images/digital-twin.svg?v=20261013-1857'
};

document.querySelectorAll('.project-card[data-project]').forEach(card => {
  const key = card.dataset.project;
  const img = card.querySelector('img');
  if (img && stableProjectImages[key]) {
    img.src = stableProjectImages[key];
    img.decoding = 'async';
  }
});

document.querySelectorAll('.gallery img').forEach((img, i) => {
  const replacements = [
    'assets/images/yol2053.svg?v=20261013-1857',
    'assets/images/digital-twin.svg?v=20261013-1857',
    'assets/images/mavi2053.svg?v=20261013-1857'
  ];
  if (replacements[i]) img.src = replacements[i];
});

const windMap = document.querySelector('.research-panel img');
if (windMap) windMap.src = 'assets/images/green-city.svg?v=20261013-1857';

const glowStyle = document.createElement('style');
glowStyle.textContent = `
.cursor-glow{
  position:fixed;
  left:0;
  top:0;
  width:360px;
  height:360px;
  border-radius:50%;
  pointer-events:none;
  z-index:0;
  opacity:0;
  background:radial-gradient(circle,rgba(110,231,249,.16) 0%,rgba(68,180,210,.09) 32%,rgba(20,90,120,.04) 52%,transparent 72%);
  filter:blur(16px);
  transition:opacity .25s ease;
  will-change:transform;
}
.cursor-glow.active{opacity:1}
.topbar,main,footer{position:relative;z-index:1}
@media (pointer:coarse){.cursor-glow{display:none}}
`;
document.head.appendChild(glowStyle);

const cursorGlow = document.querySelector('.cursor-glow');
if (cursorGlow && window.matchMedia('(pointer:fine)').matches) {
  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX = currentX;
  let targetY = currentY;

  window.addEventListener('pointermove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    cursorGlow.classList.add('active');
  }, { passive: true });

  window.addEventListener('pointerleave', () => cursorGlow.classList.remove('active'));

  const animateGlow = () => {
    currentX += (targetX - currentX) * 0.14;
    currentY += (targetY - currentY) * 0.14;
    cursorGlow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(animateGlow);
  };
  animateGlow();
}

const observer = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) e.target.classList.add('visible');
}), { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
