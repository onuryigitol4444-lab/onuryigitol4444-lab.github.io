document.getElementById('year').textContent=new Date().getFullYear();
const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

// Profil fotoğrafını normal dosyadan yükle. Base64 kullanılmıyor.
const profileImg=document.querySelector('.portrait-frame img');
if(profileImg){
  profileImg.src='assets/images/profile.jpg?v=20261013-2';
  profileImg.style.objectFit='cover';
  profileImg.style.objectPosition='50% 35%';
}

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting)e.target.classList.add('visible');
}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
