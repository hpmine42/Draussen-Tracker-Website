const header=document.querySelector('[data-header]');const menu=document.querySelector('.menu-toggle');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30),{passive:true});
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));header.classList.toggle('menu-open',!open)});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('menu-open');menu.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const ring=document.querySelector('.hero-ring');window.addEventListener('pointermove',e=>{if(!ring||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const x=(e.clientX/window.innerWidth-.5)*10;const y=(e.clientY/window.innerHeight-.5)*10;ring.style.transform=`translate(${x}px,${y}px)`},{passive:true});
