
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


let c = 0;
function random() {
    if (c = 0) {
        alert("why did you click me?")
        console.log(c)
        console.log(c)
        c++
    }
    else if (c = 1) {
        alert('Please stop clicking me')
        console.log(c)
        c++
    }else if (c = 2) {
        alert('Please dont click me again')
        console.log(c)
        c++
    }else if (c = 3) {
        alert('Why are you doing this ')
        console.log(c)
        c++
    }else if (c = 4) {
        alert('You know this hurts me when you do this')
        console.log(c)
        c++
    }else if (c = 5) {
        alert('Why do you still do this')
        console.log(c)
        c++
    }else if (c = 6) {
        alert('I`m giving up on this ')
        console.log(c)
        c++
    }else if (c = 7) {
        alert('. . .')
        console.log(c)
        c++
    }else if (c = 8) {
        alert(' WHYYYYYY')
        console.log(c)
        c++
    }else if (c = 9) {
        alert('WHY DO YOU DO THIS ARE YOU SOME KINDA DETECTIVE I KNOW NOTHING')
        console.log(c)
        c++
    }else if (c = 10) {
        alert('I GIVE UP BECAUSE FOR SOME REASON YOU HAVE THE TIME TO SIT THERE AND CLICK THIS ONE BUTTON OVER AND OVER AND OVER AGAIN UNTILL IT JUST ANNOYES ME DONT YOU UNDERSTAND WHAT YOU ARE DOING WITHIN THIS TIME FRAME WHYYY DID YOU JUST WAIST YOUR TIME DOING THIS LIKE WHYYYYY.')
        console.log(c)
        c = 0
    }

}