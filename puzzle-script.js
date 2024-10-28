// script.js

// Initialize the puzzle as an array of tile values, with the last one empty
let tiles = [1, 2, 3, 4, 5, 6, 7, 8, null];

// Render the puzzle in the container
function renderPuzzle() {
  const puzzleContainer = document.getElementById('puzzle-container');
  puzzleContainer.innerHTML = '';

  tiles.forEach((tile, index) => {
    const tileElement = document.createElement('div');
    tileElement.className = 'tile' + (tile === null ? ' empty' : '');
    tileElement.innerText = tile || ''; // Leave empty space for null
    tileElement.onclick = () => moveTile(index);
    puzzleContainer.appendChild(tileElement);
  });
}

// Shuffle the tiles array to create a new game
function shuffleTiles() {
  // Basic shuffle using Fisher-Yates shuffle algorithm
  for (let i = tiles.length - 2; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  renderPuzzle();
}

// Move tile if it’s adjacent to the empty space
function moveTile(index) {
  const emptyIndex = tiles.indexOf(null);
  const adjacentIndexes = [
    emptyIndex - 1, // Left
    emptyIndex + 1, // Right
    emptyIndex - 3, // Above
    emptyIndex + 3  // Below
  ];

  if (adjacentIndexes.includes(index)) {
    [tiles[emptyIndex], tiles[index]] = [tiles[index], tiles[emptyIndex]];
    renderPuzzle();
    checkWin();
  }
}

// Check if tiles are in the winning order
function checkWin() {
  const winningOrder = [1, 2, 3, 4, 5, 6, 7, 8, null];
  if (tiles.every((tile, index) => tile === winningOrder[index])) {
    setTimeout(() => alert('You solved the puzzle!'), 100);
  }
}

// Start the game on load
window.onload = () => {
  shuffleTiles();
};