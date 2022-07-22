//Write your pseduo code first! 


// Take in Temperature
document.querySelector('#run').addEventListener('click',run)

function run(){
    let temp = document.querySelector('#temp').value

    // Convert to Celsius
    temp = temp * 1.5

    // Return new Temperature
    document.querySelector('#placeToRun').innerText = temp
}
