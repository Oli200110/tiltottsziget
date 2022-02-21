const stressButton = document.querySelector('#stressed');
const niceOne = document.querySelector('#KeepGoin');
const achievement = document.querySelector('#Achievement');
let counter = 0;

stressButton.addEventListener("click", countIt);

function countIt(){
    counter++;
    if(counter >= 100) {
        niceOne.style = "Nem fog történni semmi am... :( <br> Sorry!";
    }

    if(counter >= 200) {
        achievement.innerHTML="Achievement unlocked: Gecire unatkozol! <br>";
    }
    if(counter >= 200) {
        achievement.innerHTML="Achievement unlocked: Gecire unatkozol Tier 2! <br>";
    }
    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    document.querySelector("body").style="background-color:rgb("+generateRandomIntegerInRange(0, 256)+","+generateRandomIntegerInRange(0, 256)+","+generateRandomIntegerInRange(0, 256)+")";
}
