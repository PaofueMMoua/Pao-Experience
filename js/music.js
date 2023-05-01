let btn4 = document.getElementsByClassName('musicButton');

for(let btn of btn4) {
    btn.addEventListener('click', function(){
        console.log("test")
        btn.classList.toggle('active_music');
    })
}