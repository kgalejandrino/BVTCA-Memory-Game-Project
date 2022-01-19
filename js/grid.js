var NUM_COLS = 6;
var NUM_ROWS = 5;

document.addEventListener('DOMContentLoaded', createGrid);

function createGrid() {
    const grid = document.querySelector("#grid");
    for (var i = 0; i < NUM_COLS; i++) {
        for (var j = 0; j < NUM_ROWS; j++) {
            let flipBox = document.createElement('div');
            flipBox.classList.add("flip-box");
            flipBox.style.width = 560/NUM_COLS + 'px';
            flipBox.style.height = 500/NUM_ROWS + 'px';

            let flipBoxInner = document.createElement('div');
            flipBoxInner.classList.add("flip-box-inner");

            let flipBoxFront = document.createElement('div');
            flipBoxFront.classList.add(`flip-box-front`);

            let flipBoxBack = document.createElement('div');
            flipBoxBack.classList.add("flip-box-back");

            flipBox.appendChild(flipBoxInner);
            flipBoxInner.appendChild(flipBoxFront);
            flipBoxInner.appendChild(flipBoxBack);
            grid.appendChild(flipBox);
        };
    };
}

// document.querySelector("#container").addEventListener('click', (event) => {

// });