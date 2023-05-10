
let search = document.querySelector('.search');
let btn = document.querySelector('.btn');
let input = document.querySelector('.input');


btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus()
})


let search2 = document.querySelector('.search2');
let btn2 = document.querySelector('.btn2');
let input2 = document.querySelector('.input2');


btn2.addEventListener('click', () => {
    search2.classList.toggle('active');
    input2.focus()
})


let search3 = document.querySelector('.search3');
let btn3 = document.querySelector('.btn3');
let input3 = document.querySelector('.input3');


btn3.addEventListener('click', () => {
    search3.classList.toggle('active');
    input3.focus()
})

window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
        method: 'POST',
        body: data,
        })
    });
});
