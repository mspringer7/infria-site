
(function(){
  const themeToggle=document.getElementById('theme-toggle');
  const setTheme=t=>{document.documentElement.setAttribute('data-theme',t);localStorage.setItem('theme',t)};
  const saved=localStorage.getItem('theme'); if(saved) setTheme(saved);
  themeToggle && themeToggle.addEventListener('click',()=>{
    const cur=(document.documentElement.getAttribute('data-theme')||'dark');
    setTheme(cur==='dark'?'light':'dark');
  });
})();
