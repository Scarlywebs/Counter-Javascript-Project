
let count = 0
let countNumber = document.getElementById("count-number")
let incrementButton = document.getElementById("increment-btn")
incrementButton.onclick = increment
function increment() {  
  count += 1
  countNumber.innerText = count
}

let saveNumber = document.getElementById("save-btn")
let saveEntries = document.getElementById("saved-entries")
saveNumber.onclick = save
function save() {
  saveEntries.textContent += count + " - "
}

let resetButton = document.getElementById("reset-btn")
resetButton.onclick = reset
function reset() {
  count = 0
  countNumber.innerText = count
  saveEntries.innerText = "Previous Entries: "
}







