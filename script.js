document.getElementById('year').textContent=new Date().getFullYear();
const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

// Profil fotoğrafı: sabit JPG dosyası, eski base64/webp kullanılmıyor.
const profileImg=document.querySelector('.portrait-frame img');
if(profileImg){
  profileImg.src='assets/images/profile-final.jpg?v=20261013-1546';
  profileImg.alt='Onur Yiğitol profil fotoğrafı';
  profileImg.style.width='100%';
  profileImg.style.height='100%';
  profileImg.style.display='block';
  profileImg.style.objectFit='cover';
  profileImg.style.objectPosition='50% 34%';
}

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting)e.target.classList.add('visible');
}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));