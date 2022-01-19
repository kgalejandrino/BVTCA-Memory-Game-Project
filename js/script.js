const gameController = (() => {
    class Game {
        constructor(col, row) {
            this.col = col;
            this.row = row;
        }

        print = () => {
            console.log(this.col, this.row);
        }
    }
    return {
        addGrid: () => {
            
        }
    }
})();


const UIController = (() => {
    let percent = 0;
    let playing = false;

    const DOMstrings = {
        bgIcon: '.icon-bg',
        playIcon: '.icon-play',
    }

    return {
        loading: () => {
            let timer = setInterval(() => {
                let randomNum = Math.floor(Math.random() * 20) + 1;
                percent += randomNum;
                if(percent > 100) {
                    percent = 100;
                    document.querySelector(DOMstrings.playIcon).style.animation = 'beat .35s infinite alternate';
                    document.querySelector(DOMstrings.playIcon).style.cursor = 'pointer';
                    document.querySelector(DOMstrings.playIcon).style.pointerEvents = 'auto';
                    clearInterval(timer);
                }
                document.querySelector('.percent').innerHTML = percent;
            }, 300);
        },

        displayMainMenu: () => {
            document.querySelector('.loading').style.display = 'none';
            document.querySelector('.menu').style.display = 'block';
            document.querySelector(DOMstrings.bgIcon).style.display = 'block';
            document.querySelector('.background-music').play();
            playing = true;
        },

        toggleMusicBackground: () => {
            if(playing) {
                playing = false;
                document.querySelector(DOMstrings.bgIcon).innerHTML = 'music_off';
                document.querySelector('.background-music').pause();
            } else {
                playing = true; 
                document.querySelector(DOMstrings.bgIcon).innerHTML = 'music_note';
                document.querySelector('.background-music').play();
            }
        },

        // getLevel: (event) => {
        //     let level = event.target.dataset.level;
        //     if(level === 'easy') {
        //         return {
        //             col: 4,
        //             row: 4,
        //         }
        //     } else if(level === 'medium') {
        //         return {
        //             col: 5,
        //             row: 5,
        //         }
        //     } else if(level === 'hard') {
        //         return {
        //             col: 6,
        //             row: 6,
        //         }
        //     }
        // },

        getDOMstrings: () => {
            return DOMstrings;
        }
    }
})();

const appController = ((UICtrl) => {
    const setupEventListener = () => {
        const DOM = UICtrl.getDOMstrings();

        UICtrl.loading();
        document.querySelector(DOM.playIcon).addEventListener('click', UICtrl.displayMainMenu);
        document.querySelector(DOM.bgIcon).addEventListener('click', UICtrl.toggleMusicBackground);
        document.querySelector('.option').addEventListener('click', (event) => UICtrl.getLevel(event));
    }

    return {
        init: () => {
            setupEventListener();
        }
    }
})(UIController);

appController.init();




