console.log('I am java and I am working')

// Aggiungere piu elementi di java su html

// 1) COSA AGGIUNGERE?

// un array di elementi

// 2) DOVE AGGIUNGERE?

// nel carousel

// 3) QUALI ELEMENTI DELL'ARRAY?

// Ciclo for 

// 4) AGGIUNGER LE SLIDE NEL CAROUSEL

// 1. CREARE UN ARRAY

const images = [
    'img/01.webp', // valore 0
    'img/02.webp', // valore 1
    'img/03.webp', // valore 2
    'img/04.webp', // valore 3
    'img/05.webp'  // valore 4 (qui la virgola non va perché chiude le parentesi)
];

// 2. SELEZIONARE il CAROUSEL DELL'HTML

const carous = document.querySelector('.carousel');

// 3. CREARE UN CICLO FOR PER SELEZIONARE GLI ELEMENTI DA INSERIRE NEL CAROUSEL

// a partire da 0 - fin quando i è minore della lunghezza di images (l'array) - incrementando di 1 in 1

for (let i = 0; i < images.length; i++) {

    // Visualizza in console l'array images con valori [0/1/2/3/4]
    console.log(images[i])

// 4. INSERIRE NEL CAROUSEL LE SLIDE

    //  all'intero del carousel bisogna AGGIUNGERE (quindi +=)
    // e non SOSTITUIRE (=) gli elementi da inserire

    carous.innerHTML += `<div class="slide">
                            <img src="${images[i]}">
                         </div>`

    // A QUI HO INSERITO SU HTML TUTTE LE SLIDE 

}

// SELEZIONARE TUTTE LE SLIDE PER AGGIUNGERE LA CLASSE CURRENT (quella con il display block)

const allSlide = document.querySelectorAll('.slide')

// querySelectorAll crea già da sé un ARRAY 
// vedi in console: 

console.log('allSlide', allSlide, typeof allSlide);

// ADESSO PER AGGIUNGERE LA CLASSE CURRENT
// ad ogni elemento dell'array
// scorrendo con le frecce

allSlide[0].classList.add('current');



 