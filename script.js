let rFactsMat= ['fact1', 'fact2', 'fact3', 'fact4'];
let rFactsEng= ['facta', 'factb', 'factc', 'factd'];
let rFactsSci= ['fact9', 'fact8', 'fact7', 'fact6'];
let rFactsHis= ['factz', 'facty', 'factx', 'factw'];
let rFactsArt= ['fact-', 'fact=', 'fact$', 'fact*'];
let rFactsSup= ['fact(', 'fact?', 'fact[', 'fact{'];

let mathB= document.querySelector('.button.math');
let engB= document.querySelector('.button.english');
let sciB= document.querySelector('.button.science');
let hisB= document.querySelector('.button.history');
let artB= document.querySelector('.button.arts');
let supB= document.querySelector('.button.suprise');

let factBox1= document.getElementById('fact-box1');
let factBox2= document.getElementById('fact-box2');
let factBox3= document.getElementById('fact-box3');
let factBox4= document.getElementById('fact-box4');
let factBox5= document.getElementById('fact-box5');
let factBox6= document.getElementById('fact-box6');

mathB.addEventListener('click', () => {
    let randomFact1 = rFactsMat[Math.floor(Math.random() * rFactsMat.length)];
    factBox1.textContent= randomFact1;
    factBox1.style.display= 'block';
    factBox2.style.display= 'none';
    factBox3.style.display= 'none';
    factBox4.style.display= 'none';
    factBox5.style.display= 'none';
    factBox6.style.display= 'none';
         
});

engB.addEventListener('click', () => {
    let randomFact2 = rFactsEng[Math.floor(Math.random() * rFactsEng.length)];
    factBox2.textContent= randomFact2;
    factBox2.style.display= 'block';
    factBox1.style.display= 'none';
    factBox3.style.display= 'none';
    factBox4.style.display= 'none';
    factBox5.style.display= 'none';
    factBox6.style.display= 'none';
});

sciB.addEventListener('click', () => {
    let randomFact3 = rFactsSci[Math.floor(Math.random() * rFactsEng.length)];
    factBox3.textContent= randomFact3;
    factBox3.style.display= 'block';
    factBox1.style.display= 'none';
    factBox2.style.display= 'none';
    factBox4.style.display= 'none';
    factBox5.style.display= 'none';
    factBox6.style.display= 'none';
});

hisB.addEventListener('click', () => {
    let randomFact4 = rFactsHis[Math.floor(Math.random() * rFactsHis.length)];
    factBox4.textContent= randomFact4;
    factBox4.style.display= 'block';
    factBox1.style.display= 'none';
    factBox2.style.display= 'none';
    factBox3.style.display= 'none';
    factBox5.style.display= 'none';
    factBox6.style.display= 'none';
});

artB.addEventListener('click', () => {
    let randomFact5 = rFactsArt[Math.floor(Math.random() * rFactsArt.length)];
    factBox5.textContent= randomFact5;
    factBox5.style.display= 'block';
    factBox1.style.display= 'none';
    factBox2.style.display= 'none';
    factBox3.style.display= 'none';
    factBox4.style.display= 'none';
    factBox6.style.display= 'none';
    
});

supB.addEventListener('click', () => {
    let randomFact6 = rFactsSup[Math.floor(Math.random() * rFactsSup.length)];
    factBox6.textContent= randomFact6;
    factBox6.style.display= 'block';
    factBox1.style.display= 'none';
    factBox2.style.display= 'none';
    factBox3.style.display= 'none';
    factBox4.style.display= 'none';
    factBox5.style.display= 'none';
});