const selectionButtons = document.querySelecttorAll('[data-selection]')
const finalColumn = document.querySelecttor('[data-final-column]')
const computerScoreSpan = document.querySelecttor('[data-computer-score]')
const computerScoreSpan = document.querySelecttor('[data-your-score]')
const SELECTIONS = [
{
	name: 'rock',
	emoji: '✊'
	beats:'scissors'
}

{
	name: 'paper',
	emoji: '✋'
	beats:'rock'
}

{
	name: 'scissors',
	emoji: '✌️'
	beats:'paper'
}
selectionButtons.forEach(selectionButtons =>) {
	selectionButtons.addEventListener('click', e =>) {
	const selectionName = selectionButtons.dataset.selection
	const selection= SELECTIONS.find(selection => selection.name === selectionName)
	makeSelection(selectionName)

	addSelectionResult(computerSelection, computerWinner)
	addSelectionResult(computerSelection, yourWinner)

if (yourWinner)incrementScore(yourScoreSpan)
if (computerWinner)incrementScore(computerScoreSpan)

}

function incrementScore(scorSpan) { 
	scorSpan.innerText = pareseInt(scorSpan.innerText) + 1
}

function addSelectionResult(selection, winner){
	const div = document.createElement('div')
	div.innerText= selection.emoji
	div.classList.add('result-selection')
	if (winner) div.classList.add('winner')
	finalColumn.after(div)

}

function makeSelection(selection) {
	const computerSelection = randomSelection()
	const yourWinner = isWinner(selection, computerSelection)
	const computerWinner = isWinner(computerSelection, selection)
	console.log(selection)
}

function isWinner(selection, opponentSelection) {
	return selection.beats === opponentSelection.name

}


function randomSelection() {
	const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
	return SELECTIONS[randomIndex]
}