

// initialize count var
let count = 0;
let countTwo = 0;
// onbuttonclcick count++
let counter = document.getElementById("counting")
let prevEnt = document.getElementById("prev-ent")
let countingBatch = document.getElementById("countingBatch")

function increment() {
    count += 1
    counter.textContent = count
    countTwo += 1
    countingBatch.textContent = countTwo
}

function save() {
    prevEnt.textContent += " " + countTwo + " " + "-"
    countTwo = 0 
    countingBatch.textContent = 0
}




