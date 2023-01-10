/* Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile assieme al suo titolo e testo.
Milestone 2:
Aggiungere il "ciclo infinito" del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra. */


const data = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];



// Prendo elementi dalla pagina

const gallery = document.querySelector('#carousel #gallery');


//Creo le card

let card = '';


// Inietto elementi array dentro HTML 

for (let i = 0; i < data.length; i++) {

  const image = `<img src="${data[i].image}" alt="img"></img>`;
  

  card += `${image}
  
      <div class="text">
        <h2>"${data[i].title}"</h2>
        <h5>"${data[i].text}"</h5>
      </div>`;
}


// Stampo in pagina 
gallery.innerHTML = card; 



const img = document.querySelectorAll("#gallery img");
const txt = document.querySelectorAll("#gallery .text");


// Rendo active la prima immagine e i testi
let currentActiveIndex = 0;

img[currentActiveIndex].classList.add('active');
txt[currentActiveIndex].classList.add('active');




// Buttons

const prev = document.getElementById('prev');
const next = document.getElementById('next');


// FUNCTIONS -------------------------------------------------------------

prev.addEventListener('click', function(){

  img[currentActiveIndex].classList.remove('active');
  txt[currentActiveIndex].classList.remove('active');

  currentActiveIndex --;

  if (currentActiveIndex < 0) currentActiveIndex = img.length - 1;

  img[currentActiveIndex].classList.add('active');
  txt[currentActiveIndex].classList.add('active');
});

next.addEventListener('click', function(){

  img[currentActiveIndex].classList.remove('active');
  txt[currentActiveIndex].classList.remove('active');

  currentActiveIndex ++;

  if (currentActiveIndex === img.length) currentActiveIndex = 0;

  img[currentActiveIndex].classList.add('active');
  txt[currentActiveIndex].classList.add('active');
});








