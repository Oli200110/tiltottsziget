const stressButton = document.querySelector('#stressed');
const niceOneDiv = document.querySelector('#KeepGoin');
let counter = 0;

stressButton.addEventListener("click", countIt);

function countIt(){
    counter++;
    if(counter >= 100) {
        niceOneDiv.style = "visibility: visible";
    }
}