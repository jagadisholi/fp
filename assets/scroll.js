// Scroll to top button behavior
(function(){
  const btn = document.getElementById('scrollTopBtn');
  if(!btn) return;

  function toggleBtn(){
    if(window.scrollY > 200){ btn.classList.add('show'); }
    else { btn.classList.remove('show'); }
  }

  window.addEventListener('scroll', toggleBtn);
  btn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  // initial check
  toggleBtn();
})();
