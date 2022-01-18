/* Variables */
const bgMusic = document.querySelector('audio');
const musicIcon = document.querySelector('.icon-sound');
const loadingPercent = document.getElementById('percent');
const playIcon = document.getElementById('icon-play');
const menuOption = document.getElementById('menu-option');
const loadingUI = document.getElementById('loading');

let percent = 0;
let playing = false;

/* Function: Randomly increment percentage from 0 to 100% */
const loading = () => {
    let timer = setInterval(() => {
        let randomNum = Math.floor(Math.random() * 20) + 1;
        percent += randomNum;
        if(percent > 100) {
            percent = 100;
            playIcon.style.animation = 'beat .35s infinite alternate';
            playIcon.style.cursor = 'pointer';
            playIcon.style.pointerEvents = 'auto';
            clearInterval(timer);
        }
        loadingPercent.innerHTML = percent;
    }, 300)
}

/* Event: Click to open menu */
playIcon.addEventListener('click', () => {
    loadingUI.style.display = 'none';
    menuOption.style.display = 'block';
    bgMusic.play();
    playing = true;
})

/* Event: Click to mute background music */
musicIcon.addEventListener('click', () => {
    if(playing) {
        playing = false;
        musicIcon.innerHTML = 'music_off';
        bgMusic.pause()
    } else {
        playing = true; 
        musicIcon.innerHTML = 'music_note';
        bgMusic.play();
    }
});

loading();


