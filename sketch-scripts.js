const container = document.querySelector("#container");
const borderWidth = 1;
const containerWidth = 300;
let setNumber = prompt("Enter a number between 2 and 100", "");
//let setNumber = 7;
// FIXME: ^ doesn't work with all numbers... 
let squareWidth = containerWidth/setNumber;

// The below code works a little better: grids with any number of squares fit within container, but some leave a gap/margin inside the border
//squareWidth = Math.floor(squareWidth) + "px";

// doesn't work with every number - e.g., 11, which overflows container

squareWidth = squareWidth.toFixed(1);


  if ((squareWidth * setNumber) > containerWidth) {
            squareWidth = squareWidth - 0.1 + "px";
             console.log(squareWidth)
				}
      else squareWidth = squareWidth + "px";

// NO - even worse: 
//squareWidth = Math.ceil(squareWidth) + "px";
console.log(squareWidth); // for "21" = 19.05; total width of squares = 400.05 = greater than containerWidth

function addRows() {
	for(let r = 1; r <= setNumber; r++) {
		const row = document.createElement("div");
        row.className = "row";
		row.style.height = squareWidth;
		container.appendChild(row);
	}
}

addRows();

const rows = Array.from(document.getElementsByClassName("row"));
console.log(rows);
 
function addSquares() {
	for (let i = 0; i < rows.length; ++i) {	
        for (let s = 1; s <= setNumber; ++s) {
 	     	 const square = document.createElement("div");    
		 	 square.style.boxSizing = "border-box";
			 square.style.width = squareWidth;    
        	 square.style.height = squareWidth;
			 square.className = "square";
		 	 rows[i].appendChild(square); 
		}
	}
}

addSquares();

