const dialog=document.querySelector('dialog');
if(dialog){const image=dialog.querySelector('img');document.querySelectorAll('.shot').forEach(button=>button.addEventListener('click',()=>{image.src=button.querySelector('img').src;image.alt=button.querySelector('img').alt;dialog.showModal();}));dialog.querySelector('button').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});}
// Locale links are ordinary URLs: no cookies, analytics or browser storage.

const arenaTabs=[...document.querySelectorAll('.arena-tab')];
function selectArena(tab){
  arenaTabs.forEach(item=>{const active=item===tab;item.setAttribute('aria-selected',String(active));item.tabIndex=active?0:-1;});
  const panel=document.getElementById('arena-panel');
  const img=panel.querySelector('img');
  img.src=tab.dataset.src;img.alt=tab.dataset.caption;
  panel.setAttribute('aria-labelledby',tab.id);
  document.getElementById('arena-caption').textContent=tab.dataset.caption;
}
arenaTabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>selectArena(tab));
  tab.addEventListener('keydown',event=>{
    let next=index;
    if(event.key==='ArrowRight')next=(index+1)%arenaTabs.length;
    else if(event.key==='ArrowLeft')next=(index-1+arenaTabs.length)%arenaTabs.length;
    else if(event.key==='Home')next=0;
    else if(event.key==='End')next=arenaTabs.length-1;
    else return;
    event.preventDefault();selectArena(arenaTabs[next]);arenaTabs[next].focus();
  });
});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.documentElement.classList.add('js-motion');
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.08});
  document.querySelectorAll('.feature-row,.journey,.section-head,.faq-grid').forEach(element=>{element.classList.add('reveal');observer.observe(element);});
}
