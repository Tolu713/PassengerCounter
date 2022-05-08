

// initialize count var
let count = 0;
// onbuttonclcick count++
let counter = document.getElementById("counting")
let prevEnt = document.getElementById("prev-ent")
function increment() {
    count += 1
    counter.innerText = count
}

function save() {
    prevEnt.innerText += " " + count + " " + "-"
}




