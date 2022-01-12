/* Variables */
const bgMusic = document.querySelector('audio');
const musicIcon = document.querySelector('.icon-sound');
const loadingPercent = document.getElementById('percent');
const iconPlay = document.getElementById('icon-play');
const menuOption = document.getElementById('menu-option');
const loadingUI = document.getElementById('loading');

let percent = 0;

/* Function: Randomly increment percentage from 0 to 100% */
const loading = () => {
    let timer = setInterval(() => {
        let randomNum = Math.floor(Math.random() * 20) + 1;
        percent += randomNum;
        if(percent > 100) {
            percent = 100;
            iconPlay.style.animation = 'beat .35s infinite alternate';
            iconPlay.style.cursor = 'pointer';
            iconPlay.style.pointerEvents = 'auto';
            clearInterval(timer);
        }
        loadingPercent.innerHTML = percent;
    }, 300)
}

/* Event: Click to open menu */
iconPlay.addEventListener('click', () => {
    loadingUI.style.display = 'none';
    menuOption.style.display = 'block';
})

loading();


