let rFactsM= ['fact1', 'fact2', 'fact3', 'fact4'];
let MathB = document.querySelector('.button.math');

function getRMathFact() {
    let randomIndex = Math.floor(Math.random() * rFactsM.length);
    let randomFact = rFactsM[randomIndex];
    alert(randomFact);
}

MathB.addEventListener('click', getRMathFact);

