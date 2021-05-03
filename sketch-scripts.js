const container = document.querySelector("#container");
const containerWidth = 300;
const inputField = document.querySelector("input");
const button = document.querySelector("button");
const colourSquares = function () {
	if (mouseIsDown) {
        if (this.className == "square pastel") {
		this.style.backgroundColor = "#9e606f";
		}
		else if (this.className == "square eraser") {
		this.style.backgroundColor = "white";
		}
		else if (this.className == "square pen") {
		this.style.backgroundColor = "black";
		}
        else this.style.backgroundColor = "black"; 
	}
}

let setNumber = 30;


inputField.addEventListener("input", inputHandler);

function inputHandler() {
    setTimeout(function() {
     	setNumber = Number(inputField.value);
     	console.log(setNumber);
     	if (setNumber > 1 && setNumber < 81) {
     		squareWidth = containerWidth/setNumber;
     		squareWidth = squareWidth.toFixed(1);
     		if ((squareWidth * setNumber) > containerWidth) {
	 			squareWidth = squareWidth - 0.1 + "px";
	 		}
     		else squareWidth = squareWidth + "px";
     		console.log(squareWidth);
     		removeRows();			
     		addRows();
		}	 
     	else return;	 
	}, 1000);
}            

button.onclick = () => {
    squares.forEach(square => {
		square.style.backgroundColor = "white";	
	})
	}

let squareWidth = containerWidth/setNumber;
     squareWidth = squareWidth.toFixed(1); 
// To ensure that total area of squares doesn't exceed that of container: 
     if ((squareWidth * setNumber) > containerWidth) {
    	  squareWidth = squareWidth - 0.1 + "px";
	 }
     else squareWidth = squareWidth + "px";
     console.log(squareWidth);

// The below code works a little better: grids with any number of squares fit within container, but some leave a gap/margin inside the border
//squareWidth = Math.floor(squareWidth) + "px";
// NO - even worse: 
//squareWidth = Math.ceil(squareWidth) + "px";

let rows;
let squares;

function addRows() {
	for(let r = 0; r < setNumber; r++) {
		const row = document.createElement("div");
        row.className = "row";
		row.style.height = squareWidth;
		container.appendChild(row);
	}
rows = Array.from(document.getElementsByClassName("row"));
console.log(rows);
addSquares();
}

addRows();

function addSquares() {
	for (let i = 0; i < rows.length; ++i) {	
        for (let s = 0; s < setNumber; ++s) {
 	     	 const square = document.createElement("div");    
		 	 square.style.boxSizing = "border-box";
			 square.style.width = squareWidth;    
        	 square.style.height = squareWidth;
			 square.className = "square";
		 	 rows[i].appendChild(square); 
		}
	}
squares = Array.from(document.getElementsByClassName("square"));
addHandlers();
return squares;
}

function removeRows() {
	rows.forEach(row => {	        
             container.removeChild(row);
		});
}

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

let mouseIsDown;

const pastel = document.getElementById("pastel");
pastel.onclick = () => {
	squares.forEach(square => {
		square.className = "square pastel";
	})
};
const pen = document.getElementById("pen");
	pen.onclick = () => {
	squares.forEach(square => {
		square.className = "square pen";	
	})
};
const eraser = document.getElementById("eraser");
	eraser.onclick = () => {
	squares.forEach(square => {
		square.className = "square eraser";	
	})
};

function addHandlers() {
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
		if (square.className == "square pastel") {
		square.style.backgroundColor = "#9e606f";
		}
		else if (square.className == "square eraser") {
		square.style.backgroundColor = "white";
		}
		else if (square.className == "square pen") {
		square.style.backgroundColor = "black";
		}
        else square.style.backgroundColor = "black"; ;
	});
});
}