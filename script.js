	
	//TODO
	//styling


const cellElements = document.querySelectorAll('.cell');
const text = document.getElementById('text');
const restart = document.getElementById('restart');
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

restart.addEventListener('click', restartGame);

function handleClick(e) {
	const cell = e.target;
	
	if (!cell.classList.contains('x') && !cell.classList.contains('circle'))
	{
		changeTurns(cell);
		drawSign(whosTurn, cell);
		if (checkWin(whosTurn)) {
			message.classList.add('show');
			text.innerHTML = "Congrats!!! " + `${player}` + " is the winner";
		}
		else if (checkDraw()) {
			message.classList.add('show');
			text.innerHTML = "Draw!!! " 
		}
	}
}

function restartGame(e) {
	cellElements.forEach(cell => {
		cell.classList.remove('x');
		cell.classList.remove('circle');
		message.classList.remove('show');
	})
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

function checkDraw() {
	return [...cellElements].every(cell => {
		return cell.classList.contains('circle') || cell.classList.contains('x')
	})
}