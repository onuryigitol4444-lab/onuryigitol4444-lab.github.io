document.getElementById('year').textContent=new Date().getFullYear();
const menuBtn=document.getElementById('menuBtn');const nav=document.getElementById('nav');menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

// Profil fotoğrafını doğrudan GitHub raw adresinden yükle; göreli yol/cache sorunlarını aşar.
const profileImg=document.querySelector('.portrait-frame img');
if(profileImg){
  profileImg.src='https://raw.githubusercontent.com/onuryigitol4444-lab/onuryigitol4444-lab.github.io/main/assets/images/profile.webp?v=3';
  profileImg.addEventListener('error',()=>{profileImg.src='https://avatars.githubusercontent.com/u/340141569?v=4';},{once:true});
}

// Güncel iş deneyimi: Ege Asfalt.
const timeline=document.querySelector('#experience .timeline');
if(timeline && !timeline.querySelector('[data-ege-asfalt]')){
  const first=timeline.querySelector('.exp');
  if(first){
    const oldDate=first.querySelector('.exp-date');
    if(oldDate && oldDate.textContent.includes('07.2024')) oldDate.textContent='07.2024 — 07.2026';
  }
  const ege=document.createElement('article');
  ege.className='exp reveal';
  ege.setAttribute('data-ege-asfalt','true');
  ege.innerHTML='<div class="exp-date">07.2026 — Devam</div><div><h3>Ege Asfalt</h3><h4>Harita Mühendisi</h4><p>Asfalt ve yol çalışmalarında GPS/GNSS saha verilerinin kontrolü; koordinat ve kot değerlendirmeleri; Netcad ve AutoCAD Civil 3D ile teknik çizim, kübaj, metraj, ataşman ve hakediş süreçleri.</p></div>';
  timeline.prepend(ege);
}

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
