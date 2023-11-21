'use strict';


// prendo contenitore immagini PRINCIPALE
const items = document.querySelector('.items');
// prendo contenitore immagini laterali LATERALE
const itemsMini = document.querySelector('.items-mini');



//*********** NEW CODE 

// creo array di oggetti che contengono url dell immagine, titolo e descrizione
const arrayObjects = [
  {
    urlImg: '01.jpg',
    title: 'Il lago della Classe #110',
    description: 'Un bellissimo lago dove la classe #110 trascorrerà le vacanze natalizie'
  },
  {
    urlImg: '02.jpg',
    title: 'La cittadina sul lago della Classe #110',
    description: 'Un bellissimo paesino vicino al lago della Classe #110'
  },
  {
    urlImg: '03.jpg',
    title: 'La Capitale dell impero della Classe #110',
    description: 'Una meravigliosa città che la Classe #110 ha scelto come capitale del suo impero'
  },
  {
    urlImg: '04.jpg',
    title: 'La città sede del Governo della Classe #110',
    description: 'In questa città si trova la sede del Parlamento della Classe #110'
  },
  {
    urlImg: '05.jpg',
    title: 'L isola della Classe #110',
    description: 'Una bellissima isola dove la Classe #110 trascorrerà le vacanze estive'
  }
];

//*********** NEW CODE 


// inizializzo una variabile per la foto attiva e mostrata in pagina
let itemActive = 0;


// ciclo for per inserimento immagini e contenitori html
for (let i = 0; i < arrayObjects.length; i++) {

  // creo div contenitore per immagine PRINCIPALE
  const divItem = document.createElement('div');

  // creo div contenitore immagini mini LATERALE
  const divItemMini = document.createElement('div');

  // aggiungo la classe active all'elemento che voglio attivo
  if (i === itemActive) {
    divItem.classList.add('active'); // PRINCIPALE
    divItemMini.classList.add('active'); // LATERALE
  }


  // PRINCIPALE INIZIO
  // aggiungo la classe item a tutti i div contenitori per avere lo stile voluto
  divItem.classList.add('item');
  // inserisco i div contenitore immagine dentro il contenitore grande item
  items.append(divItem);

  // creo le img in html
  const img = document.createElement('img');
  // inserisco il contenuto dell'attributo src dentro ogni img PRESO DALL'ARRAY DI OGGETTI
  img.src = `img/${arrayObjects[i].urlImg}`;   //*********** NEW CODE 
  // inserisco l'immagine dentro il suo contenitore
  divItem.append(img);

  //*********** NEW CODE 

  // inserimento titolo e descrizione con template
  const template = document.getElementById('title-description').content.cloneNode(true);
  const div = template.querySelector('div');
  const h1 = template.querySelector('h1');
  const par = template.querySelector('p');
  divItem.style.position = 'relative';
  div.style.position = 'absolute';
  div.style.right = '20px';
  div.style.bottom = '20px';
  h1.innerText = `${arrayObjects[i].title}`;
  h1.style.color = 'white';
  h1.style.textAlign = 'right';
  h1.style.marginBottom = '10px';
  par.innerText = `${arrayObjects[i].description}`;
  par.style.color = 'white';
  par.style.fontSize = '20px';
  par.style.textAlign = 'right';
  divItem.append(div);

  //*********** NEW CODE 

  



  // PRINCIPALE FINE


  //LATERALE INIZIO
  // aggiungo la classe item-mini a tutti i div contenitori per avere lo stile voluto
  divItemMini.classList.add('item-mini');
  // inserisco i div contenitore immagine dentro il contenitore grande item
  itemsMini.append(divItemMini);

  // creo le img miniMini in html
  const imgMini = document.createElement('img');
  // inserisco il contenuto dell'attributo src dentro ogni img
  imgMini.src = `img/${arrayObjects[i].urlImg}`;
  // inserisco l'immagine dentro il suo contenitore
  divItemMini.append(imgMini);
  //LATERALE FINE

}

// mi salvo i due div bottone in due costanti
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// creo una sorta di array con i miei div contenitore di immagine PRINCIPALE
const arrayItems = document.querySelectorAll('.item');

// creo una sorta di array con i miei div contenitore di immagine LATERALE
const arrayItemsMini = document.querySelectorAll('.item-mini');

// evento click next
next.addEventListener('click', 
function () {
  // condizione sull'ultima foto che mi riporta alla prima
  if (itemActive === arrayItems.length - 1){
    arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
    itemActive = 0;
    arrayItems[itemActive].classList.add('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.add('active'); // LATERALE
    console.log(`La foto corrente è ${itemActive + 1}`);
  } 
  // condizione di avanzamento in tutti i casi tranne quando sono all'ultima foto
  else if (itemActive < arrayItems.length - 1 ) {
    arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
    itemActive++;
    arrayItems[itemActive].classList.add('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.add('active'); // LATERALE
    console.log(`La foto corrente è ${itemActive + 1}`);
  }
});


// evento click prev
prev.addEventListener('click', 
function () {
  // condizione sulla prima foto che mi riporta all'ultima
  if (itemActive === 0){
    arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
    itemActive = arrayItems.length - 1;
    arrayItems[itemActive].classList.add('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.add('active'); // LATERALE
    console.log(`La foto corrente è ${itemActive + 1}`);
  } 
  // condizione di retrocessione alla foto precedenete tranne nel caso in cui sono alla prima foto
  else if (itemActive > 0 ) {
    arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
    itemActive--;
    arrayItems[itemActive].classList.add('active'); // PRINCIPALE 
    arrayItemsMini[itemActive].classList.add('active'); // LATERALE
    console.log(`La foto corrente è ${itemActive + 1}`);
  }
});



// SOLUZIONE OTTIMIZZATA CON CICLO FOR

for (let j = 0; j < arrayItemsMini.length; j++) {
  arrayItemsMini[j].addEventListener('click',
  function() {
    if (j !== itemActive) {
      arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
      arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
      itemActive = j;
      arrayItems[j].classList.add('active'); // PRINCIPALE
      arrayItemsMini[j].classList.add('active'); // LATERALE
    }
  })
}


//FUNCTIONS AUTOPLAY 

// AVANTI
function autoPlayForward() {
  // condizione sull'ultima foto che mi riporta alla prima
  if (itemActive === arrayItems.length - 1){
    arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
    itemActive = 0;
    arrayItems[itemActive].classList.add('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.add('active'); // LATERALE
  } 
  // condizione di avanzamento in tutti i casi tranne quando sono all'ultima foto
  else if (itemActive < arrayItems.length - 1 ) {
    arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
    itemActive++;
    arrayItems[itemActive].classList.add('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.add('active'); // LATERALE
  }
}

// INDIETRO
function autoPlayBackward() {
  // condizione sulla prima foto che mi riporta all'ultima
  if (itemActive === 0){
    arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
    itemActive = arrayItems.length - 1;
    arrayItems[itemActive].classList.add('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.add('active'); // LATERALE
  } 
  // condizione di retrocessione alla foto precedenete tranne nel caso in cui sono alla prima foto
  else if (itemActive > 0 ) {
    arrayItems[itemActive].classList.remove('active'); // PRINCIPALE
    arrayItemsMini[itemActive].classList.remove('active'); // LATERALE
    itemActive--;
    arrayItems[itemActive].classList.add('active'); // PRINCIPALE 
    arrayItemsMini[itemActive].classList.add('active'); // LATERALE
  }
}

// NEW CODE PER ELIMINARE BUG CHE SE CLICCO SU START PIù VOLTE SU START SCATENA SET INTERVAL A RAFFICA

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const invert = document.getElementById('invert');

let autoPlay = setInterval(autoPlayForward, 3000);
console.log('parto'); // DEBUG
let autoPlayControl = true;
let orderForward = true;


// // BUTTON START CHE FA PARTIRE SEMPRE FORWARD
// start.addEventListener('click', function() {
//   if (autoPlayControl === true) {
//     console.log('BUTTON START: sono gia startata'); // DEBUG
//     return
//   } 
//   autoPlay = setInterval(autoPlayForward, 3000);
//   autoPlayControl = true;
//   console.log('BUTTON START: sono ripartita '); // DEBUG
// });

// BUTTON START CHE FA PARTIRE IN BASE ALL'ULTIMA DIREZIONE PRIMA DI CLICCARE STOP
start.addEventListener('click', function() {
  if (autoPlayControl === true) {
    console.log('BUTTON START: sono gia startata'); // DEBUG
    return
  } else if (orderForward === true) {
    autoPlay = setInterval(autoPlayForward, 3000);
    autoPlayControl = true;
    console.log('BUTTON START: sono ripartita FORWARD '); // DEBUG
  } else {
    autoPlay = setInterval(autoPlayBackward, 3000);
    autoPlayControl = true;
    orderForward = false;
    console.log('BUTTON START: sono ripartita BACKWARDS '); // DEBUG
  }
});


// BUTTON STOP
stop.addEventListener('click', function() {
  if (autoPlayControl !== true) {
    console.log('BUTTON STOP: sono già ferma'); // DEBUG
    return
  } 
  clearInterval(autoPlay);
  autoPlayControl = false;
  console.log('BUTTON STOP: mi fermo');// DEBUG
});


// BUTTON INVERT
invert.addEventListener('click', function() {
  if (autoPlayControl === true && orderForward === true) {
    clearInterval(autoPlay);
    autoPlay = setInterval(autoPlayBackward, 3000);
    orderForward = false;
    console.log('BUTTON INVERT: ora vado BACKWARDS');// DEBUG
  } else if (autoPlayControl === true && orderForward === false) {
    clearInterval(autoPlay);
    autoPlay = setInterval(autoPlayForward, 3000);
    orderForward = true;
    console.log('BUTTON INVERT: ora vado FORWARDS');// DEBUG
  } else {
    console.log('BUTTON INVERT: sono fermo, prima ristartami');// DEBUG
  }
});