//Write your pseduo code first! 
// Get input
document.querySelector('#yell').addEventListener('click', convert)

function convert() {
    // take value in Celsius and conver to Farenheight
    let temp = document.querySelector('#sel').value
    temp = temp * 2
    // show it
    document.querySelector('#placeToYell').innerText = temp
}


