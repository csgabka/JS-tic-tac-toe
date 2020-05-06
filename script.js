	
	//TODO
	//losing message
	//restart button
	//styling


const cellElements = document.querySelectorAll('.cell');
const message = document.getElementById('message');
let whosTurn = false;
let player = 'x';


const winningCombination = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[0, 4, 8],
]

cellElements.forEach(cell => {
	cell.addEventListener('click', handleClick)}); 

function handleClick(e) {
	const cell = e.target;
	if (!cell.classList.contains('x') && !cell.classList.contains('circle'))
	{
		changeTurns(cell);
		drawSign(whosTurn, cell);
		if (checkWin(whosTurn)) {
			message.classList.add('show');
			message.innerHTML = "Congrats!!! " + `${player}` + " is the winner";
			console.log();
			console.log(message);
		}
	}
}

function changeTurns(cell) {
	whosTurn = whosTurn //:
	whosTurn = !whosTurn;
	console.log(whosTurn); 
}

function drawSign(whosTurn, cell) {
	whosTurn == true ? 
	cell.classList.add('x') :
	cell.classList.add('circle')
}

function checkWin(whosTurn) {
	whosTurn == true ? player = 'x' : player = 'circle'
	return winningCombination.some(combination => {
		return combination.every(index => {
			return cellElements[index].classList.contains(player);
		})
	})
}
