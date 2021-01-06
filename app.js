// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

let pUn = (Number.parseFloat(p1.dataset.nombre) + 10);
p1.dataset.nombre = pUn;

let pDeux = p2.innerHTML.length;
p2.dataset.text = pDeux;

let pTrois = p2.dataset.liste;
p3.innerHTML += pTrois;

if (p4.dataset.booleen === 'true') {
    p4.innerHTML += ' La valeur est vraie.'
}
else {
    p4.innerHTML += ' La valeur est fausse.';
}


// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

p5.dataset.nombre = pUn ;
p6.dataset.text = pDeux;
p7.innerHTML += pTrois;
p8.dataset.booleen = 'true';

if (p8.dataset.booleen === 'true'){
    p8.innerHTML += ' La valeur est vraie.'
}
else {
    p8.innerHTML += ' La valeur est fausse.';
}
