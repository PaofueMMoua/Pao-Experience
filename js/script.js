let kick = document.querySelectorAll('.kick_btn');
const play = document.getElementsByClassName('.play');

let playing = false;

play.addEventListener('click', () => {
    if (playing === false) {
        playing = true
    }
    else {
        playing = false
    }
})

kick.addEventListener('click', kick())

function kick() {
    if (kick.classList.contains('active')) {
        kick.classList.remove('active');
    }
    else {
        kick.classList.add('active');
    }
}

while (playing == true) {
    
}