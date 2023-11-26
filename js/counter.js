
let countNumber = document.getElementById("count-number")
let saveNumber = document.getElementById("saved-entries")

let incrementButton = document.getElementById("increment-btn");
incrementButton.onclick = increment;
let saveButton = document.getElementById("save-btn");
saveButton.onclick = save;
let resetButton = document.getElementById("reset-btn");
resetButton.onclick = reset;

let count = 0

function increment(){
  count += + 1
  countNumber.innerText = count
}

function save(){
  let countTotal = count + "-"
  saveNumber.innerText += countTotal
  countNumber.innerText = 0
  count = 0
}

function reset() {
  count = 0;
  countNumber.innerText = count;
  saveNumber.innerText = 'Previous Entries:' + ' ';
}



