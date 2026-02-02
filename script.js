// simple theme toggle
const btn = document.getElementById('theme-toggle');
const root = document.documentElement;
const stored = localStorage.getItem('theme');
if(stored) root.setAttribute('data-theme', stored);
btn?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', current === 'dark' ? 'dark' : 'light');
  localStorage.setItem('theme', current === 'dark' ? 'dark' : 'light');
});