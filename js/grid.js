var NUM_COLS = 6;
var NUM_ROWS = 5;

document.addEventListener('DOMContentLoaded', createGrid);

function createGrid() {
    const body = document.querySelector("body");
    for (var i = 0; i < NUM_COLS; i++) {
        for (var j = 0; j < NUM_ROWS; j++) {
            let grid = document.createElement('div');
            grid.id = "grid";
            grid.style.width = 560/NUM_COLS + 'px';
            grid.style.height = 500/NUM_ROWS + 'px';
            body.appendChild(grid);
        };
    };
}

