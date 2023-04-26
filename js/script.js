const project = document.querySelector('.project');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');


btn.addEventListener('hover', () => {
    search.classList.toggle('active');
    input.focus()
})