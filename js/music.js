// const kick = new Audio('.Kick.mp4');
// const snare = Audio('');
// const hihat_open = Audio('');
// const hihat_close = Audio('');

// const kick_btn = document.getElementsByClassName('kick_btn');
// const snare_btn = document.querySelectorAll('snare_btn');
// const hihat_open_btn = document.querySelectorAll('hihat_open')
// const hihat_close_btn = document.querySelectorAll('hihat_close')

// kick_btn.addEventListener('click', function (e) {
//     console.log('testing')
// })

let playSound = function (soundFile) {
    $("#sound").html("<embed src=\"" + soundFile + "\" hidden=\"true\" autostart=\"true\" />");
}