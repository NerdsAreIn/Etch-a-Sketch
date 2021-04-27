const container = document.querySelector("#container");
const containerWidth = 300;
//let setNumber = prompt("Enter a number between 2 and 100", "");
let setNumber = 40;
let squareWidth = containerWidth/setNumber;

// The below code works a little better: grids with any number of squares fit within container, but some leave a gap/margin inside the border
//squareWidth = Math.floor(squareWidth) + "px";
// NO - even worse: 
//squareWidth = Math.ceil(squareWidth) + "px";

squareWidth = squareWidth.toFixed(1);

// To ensure that total area of squares doesn't exceed that of container: 
if ((squareWidth * setNumber) > containerWidth) {
    squareWidth = squareWidth - 0.1 + "px";
	console.log(squareWidth)
}
else squareWidth = squareWidth + "px";

console.log(squareWidth); 

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

const letters = Array.from(document.getElementsByTagName("span"));
letters.forEach(letter => {
letter.className = "letter";
});

window.onload = () => {
makeVisible();
};

// Below is a working function to make the title letters fade in one at a time:
let timeIndex = 2;
function makeVisible() {
	for (let i = 0; i < letters.length; i++) {
        letters[i].classList.add("visible");
		letters[i].style.transition = `opacity ${timeIndex}s`;
        timeIndex += 2;
	}
}

const squares = Array.from(document.getElementsByClassName("square"));
let mouseIsDown;

const colourSquares = function () {
	if (mouseIsDown) {
		this.style.backgroundColor = "black";
	}
};

squares.forEach(square => {
	square.addEventListener("mousedown", () => {
         mouseIsDown = true;
         colourSquares();        		
	});
	square.addEventListener("mouseover", colourSquares);
    square.addEventListener("mouseup", () => {
		 mouseIsDown = false;
         square.removeEventListener("mouseover", colourSquares);
	});	
	square.addEventListener("click", () => {
		 square.style.backgroundColor = "black";
	});
});
	
	
