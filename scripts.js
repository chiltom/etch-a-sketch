// Creation of grid squares
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
  // Hover functionality
  document.querySelectorAll('.grid-item').forEach((item) => {
    item.onmouseleave = (e) => {
        e.target.style.background = '#ddd';
        e.target.style.borderImage = null;
    }

    item.addEventListener('mousemove', (e) => {
        e.target.style.background = 'black';
        e.target.style.borderImage = 'black';
    });
});
};

makeRows(16, 16);

// Button reset functionality
function reset() {
    let number = prompt('Please enter your desired number of grid squares per side', '16')
    if (isNaN(number)) {
        alert("That's not a number");
    } else if (number > 100) {
        alert("That's too many squares");
    } else {
        const gridItems = document.querySelectorAll(".grid-item");
        gridItems.forEach(item => {
            item.remove();
        })
        makeRows(number, number);
    }
}
document.getElementById('button').onclick = reset;