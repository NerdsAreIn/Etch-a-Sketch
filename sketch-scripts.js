const container = document.querySelector("#container");
const borderWidth = 1;
const containerWidth = 600;
// let squareNumber = prompt("Enter a number between 2 and 100", "");
let setNumber = 100;
//let totalNumber = setNumber * setNumber;
//let gridRows = Math.sqrt(setNumber);
let squareWidth = containerWidth/setNumber - (borderWidth * 2) + "px";
console.log(squareWidth);
//const gap = document.createElement("br");
//container.setAttribute("grid-template-columns", `repeat(${setNumber}, ${squareWidth}px)`);
//container.setAttribute("grid-template-rows", `repeat(${setNumber}, ${squareWidth}px)`);


function addRows() {
	for(let r = 1; r <= setNumber; r++) {
		const row = document.createElement("div");
        row.className = "row";
		//row.style.border = "1px solid pink";
		row.style.height = squareWidth + "px";
		/*for (let s = 1; s <= setNumber; i++) {
 	     	 const square = document.createElement("div");    
		 	 square.style.boxSizing = "border-box";
			 square.style.width = squareWidth + "px";    
        	 square.style.height = squareWidth + "px";
        	 square.className = "square";
		 	 row.appendChild(square);         
		}*/
	container.appendChild(row);
	}
}

addRows();

const rows = Array.from(document.getElementsByClassName("row"));
console.log(rows);
 
function addSquares() {
	for (let i = 0; i < rows.length; i++) {	
        for (let s = 1; s <= setNumber; s++) {
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

