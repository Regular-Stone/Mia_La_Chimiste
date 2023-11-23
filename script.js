let barils = document.querySelectorAll(".mia");
let h2 = document.querySelector("h2");
console.log(barils);
let inGame = true;
let lastBaril;
let score = 0;
let vie = 50;

function randomTime(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

function randomBaril(barils) {
    const indexBaril = Math.floor(Math.random() * barils.length);
    const selectedBaril = barils[indexBaril];

    if(selectedBaril === lastBaril){
        return randomBaril(barils)
    }

    return selectedBaril
}

function showMia(){
    const time = randomTime(700, 1300);
    const baril = randomBaril(barils);
    baril.className = "mia-up";
    setTimeout(() => {
        if(inGame === true){
            showMia();
        }
        baril.className = "mia"
    },time)
}   

barils.forEach(baril => baril.addEventListener('click', () => {
    score ++;
    baril.className = "mia";
    h2.textContent = "Score : " + score;   
}));

showMia();