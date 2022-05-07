

// initialize count var
let count = 0;
// onbuttonclcick count++
let counter = document.getElementById("counting")
function increment() {
    count += 1
    counter.innerText = count
}

function save() {
    console.log(count)
}
let nname = "Tolu"
let greeting = "Yo, my name is "
let myGreeting = greeting + nname
console.log(myGreeting)




