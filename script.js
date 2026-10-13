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

const observer = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) e.target.classList.add('visible');
}), { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
