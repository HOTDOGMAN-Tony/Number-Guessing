let number = Math.floor (Math.random() * 100)
//Create a random number.

function reset() {
    number = Math.floor (Math.random() * 100)
}
// Reset the number.

function enter() {
    var input = document.querySelector('.input').value

    if (input == number){
        document.querySelector ('.Result')
          .innerHTML = ('Win, Answer is ' + `${number}`)
    } else if (input < number) {
        document.querySelector ('.Result')
          .innerHTML = ('Bigger')
    } else {
        document.querySelector ('.Result')
          .innerHTML = ('Smaller')
    }
}
//Detect the number and saying the result.

function answer() {
    document.querySelector ('.Result')
          .innerHTML = ('Answer: ' + `${number}`)
}
//Display the number.

function tips() {
    document.querySelector ('.Result')
    .innerHTML = ('It is a number : P')
}
