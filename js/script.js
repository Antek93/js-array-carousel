console.log('I am java and I am working')

// Aggiungere piu elementi di java su html

// 1) CREARE UN ARRAY di immagini

// 2) SELEZIONARE IL CONTENITORE DOVE INSERIRE le immagini

// 3) CREARE UN CICLO FOR per inserire ogni elemento dell'array nel contenitore

// 4) AGGIUNGER LE SLIDE NEL CAROUSEL

// Tutte le slide hanno display block in CSS

// 5) INDIVIDUARE E SELEZIONARE TUTTI I DIV CON CLASSE SLIDE su js

// Dopo aver creato le frecce navigatrici su html/css

// 6) INDIVIDUARE E SELEZIONARE LE DUE FRECCE su js

// 7) CREARE DUE EVENTI CHE SPOSTANO LA CLASSE CURRENT:
// (quela che altera il valore display none in display block)


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

// 3. CREARE UN CICLO FOR PER INSERIRE PIU ELEMENTI DA INSERIRE NEL CAROUSEL


for (let i = 0; i < images.length; i++) { // a partire da 0 - fin quando i è minore della lunghezza di images (l'array) - incrementando di 1 in 1

    console.log(images[i])  // Visualizza in console l'array images con valori [0/1/2/3/4]


// 4. INSERIRE LE SLIDE NEL CAROUSEL

    //  all'intero del carousel bisogna AGGIUNGERE (quindi +=)
    // e non SOSTITUIRE (=) gli elementi da inserire

    carous.innerHTML += `<div class="slide">
                            <img src="${images[i]}">
                         </div>`


  // A QUI HO INSERITO SU HTML TUTTE LE SLIDE 

}

// 5. SELEZIONARE TUTTI I DIV CON CLASSE SLIDE

const allSlide = document.querySelectorAll('.slide')

// querySelectorAll crea già da sé un ARRAY 
// vedi in console: 

console.log('allSlide', allSlide, typeof allSlide);


// ADESSO PER AGGIUNGERE LA CLASSE CURRENT
// ad ogni elemento dell'array
// scorrendo con le frecce


// Innazitutto creo due costanti per selezionare i due bottoni:

const nextArrow = document.querySelector('.next');
const previousArrow = document.querySelector('.previous')

// Aggiungo la classe current al valore 0 (prima immagine)

allSlide[0].classList.add('current') //current su CSS ha valore block

// Determino una variabile iniziale per il valore 0

let current = 0;

// creo un evento


nextArrow.addEventListener('click', // quando clicco su nextArrow:

        function() {

        // Verifica se event funziona:
            console.log('cliccato su Next')
         
        // rimuovo current dalla slide 0    

        allSlide[current].classList.remove('current');

        // modifico la variabile 0 con 0 +1

        current = current + 1;

        //aggiungo nuovamente current alla slide,

        allSlide[current].classList.add('current');

        // ARRIVATI ALL'ULTIMA SLIDE RIMUOVO IL TASTO NEXT
        // se (slide corrente = all'ultima slide)
        // lunghezza array = 5 (con zero compreso)
        // 5 - 1 = slide 4 (l'ultima slide)

        if (current == allSlide.length - 1) {

        nextArrow.classList.add('hidden'); 

        }

        // Dopo la slide 0 rimuovo sempre hidden dal tasto PREVIOUS

        previousArrow.classList.remove('hidden');
        
    }


);

previousArrow.addEventListener('click', // quando clicco su nextArrow:

        function() {

            // Verifica se event funziona:
                console.log('cliccato su Next')
            
            // rimuovo current dalla slide 0    

            allSlide[current].classList.remove('current');

            // modifico la variabile 0 con 0 - 1

            current = current - 1;

            //aggiungo nuovamente current alla slide,

            allSlide[current].classList.add('current');

            // SE RITORNO ALLA PRIMA SLIDE RITORNA IL VALORE HIDDEN alla freccia previous
            // se (slide corrente = alla prima slide)
            // lunghezza array = 5 (con zero compreso)
            // 5 - 5 = slide 0 (prima slide)


            if (current == allSlide.length - 5) {

                previousArrow.classList.add('hidden'); 
        
                
            }

            if (current == allSlide.length - 5) {

                nextArrow.classList.remove('hidden'); 
        
                
            } 

        
        }

         // Dopo la slide 0 rimuovo sempre hidden dal tasto PREVIOUS

)
 