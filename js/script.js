
// Arrays for different difficulty: Easy, Medium, Hard
const easyArr = [
    { name: 'baby-elephant' ,img: '/img/baby-elephant.png' },
    { name: 'baby-elephant' ,img: '/img/baby-elephant.png' },
    { name: 'wolf' ,img: '/img/wolf.png' },
    { name: 'wolf' ,img: '/img/wolf.png' },
    { name: 'cat' ,img: '/img/cat.png' },
    { name: 'cat' ,img: '/img/cat.png' },
    { name: 'chicken' ,img: '/img/chicken.png' },
    { name: 'chicken' ,img: '/img/chicken.png' },
    { name: 'dog' ,img: '/img/dog.png' },
    { name: 'dog' ,img: '/img/dog.png' },
    { name: 'dragon' ,img: '/img/dragon.png' },
    { name: 'dragon' ,img: '/img/dragon.png' },
    { name: 'leo' ,img: '/img/leo.png' },
    { name: 'leo' ,img: '/img/leo.png' },
    { name: 'monkey' ,img: '/img/monkey.png' },
    { name: 'monkey' ,img: '/img/monkey.png' },
]

const mediumArr = [
    { name: 'baby-elephant', img: '/img/baby-elephant.png' },
    { name: 'baby-elephant', img: '/img/baby-elephant.png' },
    { name: 'wolf', img: '/img/wolf.png' },
    { name: 'wolf', img: '/img/wolf.png' },
    { name: 'cat', img: '/img/cat.png' },
    { name: 'cat', img: '/img/cat.png' },
    { name: 'chicken.png', img: '/img/chicken.png' },
    { name: 'chicken', img: '/img/chicken.png' },
    { name: 'dog', img: '/img/dog.png' },
    { name: 'dog', img: '/img/dog.png' },
    { name: 'dragon', img: '/img/dragon.png' },
    { name: 'dragon', img: '/img/dragon.png' },
    { name: 'leo', img: '/img/leo.png' },
    { name: 'leo', img: '/img/leo.png' },
    { name: 'monkey', img: '/img/monkey.png' },
    { name: 'monkey', img: '/img/monkey.png' },
    { name: 'parrot', img: '/img/parrot.png' },
    { name: 'parrot', img: '/img/parrot.png' },
    { name: 'rabbit', img: '/img/rabbit.png' },
    { name: 'rabbit', img: '/img/rabbit.png' },
]

const hardArr = [
    { name: 'baby-elephant', img: '/img/baby-elephant.png' },
    { name: 'baby-elephant', img: '/img/baby-elephant.png' },
    { name: 'wolf', img: '/img/wolf.png' },
    { name: 'wolf', img: '/img/wolf.png' },
    { name: 'cat', img: '/img/cat.png' },
    { name: 'cat', img: '/img/cat.png' },
    { name: 'chicken', img: '/img/chicken.png' },
    { name: 'chicken', img: '/img/chicken.png' },
    { name: 'dog', img: '/img/dog.png' },
    { name: 'dog', img: '/img/dog.png' },
    { name: 'dragon', img: '/img/dragon.png' },
    { name: 'dragon', img: '/img/dragon.png' },
    { name: 'leo', img: '/img/leo.png' },
    { name: 'leo', img: '/img/leo.png' },
    { name: 'monkey', img: '/img/monkey.png' },
    { name: 'monkey', img: '/img/monkey.png' },
    { name: 'parrot', img: '/img/parrot.png' },
    { name: 'parrot', img: '/img/parrot.png' },
    { name: 'rabbit', img: '/img/rabbit.png' },
    { name: 'rabbit', img: '/img/rabbit.png' },
    { name: 'shark', img: '/img/shark.png' },
    { name: 'shark', img: '/img/shark.png' },
    { name: 'unicorn', img: '/img/unicorn.png' },
    { name: 'unicorn', img: '/img/unicorn.png' },
]

// Class Game
class Game {
    constructor(cardArray) {
        this.cardArray = cardArray;
    }

    startGame() {
        this.nextCard = null;
        this.matchedCards = [];
        this.shuffleCards();
    }

    flipCard(card) {
        card.classList.add('visible');
        if(this.nextCard) {
            this.checkIfMatch(card);
        } else {
            this.nextCard = card;
        }
    }

    checkIfMatch(card) {
        if(card.dataset.name === this.nextCard.dataset.name) {
            console.log('match');
            this.cardMatch(card, this.nextCard);
        } else {
            this.cardDidNotMatch(card, this.nextCard);
            console.log('not match');
        }

        this.nextCard = null;
    }

    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('visible');
        card2.classList.add('visible');
    }

    cardDidNotMatch(card1, card2) {
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
        }, 1000);
    }

    // @Fisher-Yates shuffle
    shuffleCards() {
        for(let i = this.cardArray.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i+1));
            this.cardArray[randomIndex].style.order = i;
            this.cardArray[i].style.order = randomIndex;
        }
    }
}

// Function: DOM manipulation
const UIController = () => {
    let percent = 0;
    let playing = false;

    const DOMstrings = {
        bgIcon: '.icon-bg',
        playIcon: '.icon-play',
        cards: '.card',
        option: '.option',
        grid: '.grid-container'
    }

    // Creates the board grid
    const createGrid = (arr) => {
        const grid = document.querySelector('.grid-container');
        for (let i = 0; i < arr.length; i++) {
            let card = document.createElement('div');
            card.classList.add("card");
            card.setAttribute('data-name', arr[i].name);
    
            let flipBoxInner = document.createElement('div');
            flipBoxInner.classList.add("flip-box-inner");
    
            let flipBoxFront = document.createElement('div');
            flipBoxFront.classList.add(`flip-box-front`);
    
            let flipBoxBack = document.createElement('div');
            flipBoxBack.classList.add("flip-box-back");
            let backImg = document.createElement('img')
            backImg.setAttribute('src', arr[i].img);
            flipBoxBack.appendChild(backImg);
    
            card.appendChild(flipBoxInner);
            flipBoxInner.appendChild(flipBoxFront);
            flipBoxInner.appendChild(flipBoxBack);
            grid.appendChild(card);
        }
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
            }, 100);
        },

        displayMainMenu: () => {
            document.querySelector('.loading').style.display = 'none';
            document.querySelector('.menu').style.display = 'flex';
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

        getSelection: (event) => {
            const difficulty = event.target.dataset.level;
            document.querySelector('.option').style.display = 'none';
            if(difficulty === 'easy') {
                createGrid(easyArr);
            } else if(difficulty === 'medium') {
                createGrid(mediumArr);
                document.querySelector('.grid-container').style.gridTemplateColumns= 'repeat(5, auto)';
            } else if(difficulty === 'hard') {
                createGrid(hardArr);
                document.querySelector('.grid-container').style.gridTemplateColumns= 'repeat(6, auto)';
            }
        },

        getDOMstrings: () => {
            return DOMstrings;
        }
    }
};

const initialize = () => {
    let UICtrl = UIController();

    const setupEventListener = () => {
        const DOM = UICtrl.getDOMstrings();
        let game = null;

        // Game loads
        UICtrl.loading();
        // Menu displayed when play button is clicked
        document.querySelector(DOM.playIcon).addEventListener('click', UICtrl.displayMainMenu);
        // Toggle background music
        document.querySelector(DOM.bgIcon).addEventListener('click', UICtrl.toggleMusicBackground);
        // Main menu selection (easy, medium, hard)
        document.querySelector(DOM.option).addEventListener('click', (event) => {
            UICtrl.getSelection(event);
            let cards = Array.from(document.getElementsByClassName('card'));
            game = new Game(cards)
            game.startGame();
        });
        // Flip cards
        document.querySelector(DOM.grid).addEventListener('click', (event) => {
            let card = event.target.parentNode.parentNode;
            game.flipCard(card)
        })
    }

    return setupEventListener();
};

initialize();



