const stressButton = document.querySelector('#stressed');
const niceOneDiv = document.querySelector('#KeepGoin');
const achievement = document.querySelector('#Achievement');
let counter = 0;

stressButton.addEventListener("click", countIt);

function countIt(){
    counter++;
    if(counter >= 100) {
        niceOneDiv.style = "visibility: visible";
    }
    if(counter >= 200) {
        achievement.innerHTML="Achievment unlcoked: Gecire unatkozol! <br>";
    }
}
