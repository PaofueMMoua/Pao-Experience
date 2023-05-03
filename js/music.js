// let kick = Audio('');
// let snare = Audio('');
// let hihat_open = Audio('');
// let hihat_close = Audio('');


let btn4 = document.getElementsByClassName('musicButton');

for(let btn of btn4) {
    btn.addEventListener('click', function(){
        console.log("test")
        btn.classList.toggle('active_music');
    })
}

// let btn5 = document.querySelectorAll('kick_btn');

// for (let btn of btn5) {
//     btn.addEventListener('click', function () {
//         if (btn.classList.contains('active_music')) {
//             kick.play()
//         }
//     })
// }

// let btn6 = document.querySelectorAll('snare_btn');

// for (let btn of btn6) {
//     btn.addEventListener('click', function () {
//         if (btn.classList.contains('active_music')) {
//             snare.play()
//         }
//     })
// }

// let btn7 = document.querySelectorAll('hihat_open')

// for (let btn of btn7) {
//     btn.addEventListener('click', function () {
//         if (btn.classList.contains('active_music')) {
//             hihat_open.play()
//         }
//     })
// }

// let btn8 = document.querySelectorAll('hihat_close')

// for (let btn of btn8) {
//     btn.addEventListener('click', function () {
//         if (btn.classList.contains('active_music')) {
//             hihat_close.play()
//         }
//     })
// }
