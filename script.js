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
  'sirta-solar-rail.webp': 'sirta.svg',
  'tubitak-map.webp': 'tubitak.svg',
  'asra-system.webp': 'asra.svg',
  'mavi2053.webp': 'mavi2053.svg',
  'hero-road.webp': 'yol2053.svg',
  'offshore-hybrid.webp': 'offshore.svg',
  'green-city.webp': 'green-city.svg',
  'digital-twin.webp': 'digital-twin.svg',
  'smart-center.webp': 'yol2053.svg',
  'road-network.webp': 'digital-twin.svg',
  'mavi-infographic.webp': 'mavi2053.svg',
  'wind-maps.webp': 'green-city.svg'
};

document.querySelectorAll('img').forEach(img => {
  const file = (img.getAttribute('src') || '').split('/').pop()?.split('?')[0];
  if (file && stableProjectImages[file]) {
    img.src = `assets/images/${stableProjectImages[file]}?v=20261013-1700`;
    img.decoding = 'async';
  }
});

const observer = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) e.target.classList.add('visible');
}), { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
