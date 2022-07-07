// Genero le immagini da JS

const images = [
    {
      url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
      title: 'Svezia',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
  
    {
      url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Perù',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
  
    {
      url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
      title: 'Chile',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
      url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Argentina',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
      url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
      title: 'Colombia',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
  ];

let imageFile = '';
let imageTitle = '';
let imageDescription = '';

for(const image of images){
    imageFile += `<img src="${image['url']}" alt="landscape"/>`;
    imageTitle += `<h1>${image['title']}</h1>`;
    imageDescription += `<p>${image['description']}</p>`;
}

const gallery = document.querySelector('.gallery');

gallery.innerHTML = imageFile + imageTitle + imageDescription;

// Aggancio la classe active
const imagesDisplay = document.querySelectorAll('#carousel img');
const titleDisplay = document.querySelectorAll('#carousel h1');
const descriptionDisplay = document.querySelectorAll('#carousel p');

let currentActiveIndex = 0;

imagesDisplay[currentActiveIndex].classList.add('active');
titleDisplay[currentActiveIndex].classList.add('active');
descriptionDisplay[currentActiveIndex].classList.add('active');

// Collego i bottoni
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

//Bottone next
nextButton.addEventListener('click', function(){
    imagesDisplay[currentActiveIndex].classList.remove('active');
    titleDisplay[currentActiveIndex].classList.remove('active');
    descriptionDisplay[currentActiveIndex].classList.remove('active');

    currentActiveIndex++;

    if(currentActiveIndex === images.length) {
        currentActiveIndex = 0;
    }
    imagesDisplay[currentActiveIndex].classList.add('active');
    titleDisplay[currentActiveIndex].classList.add('active');
    descriptionDisplay[currentActiveIndex].classList.add('active');

})

// Bottone prev

prevButton.addEventListener('click', function(){
    imagesDisplay[currentActiveIndex].classList.remove('active');
    titleDisplay[currentActiveIndex].classList.remove('active');
    descriptionDisplay[currentActiveIndex].classList.remove('active');

    currentActiveIndex--;

    if(currentActiveIndex < 0) {
        currentActiveIndex = images.length - 1;
    }
    imagesDisplay[currentActiveIndex].classList.add('active');
    titleDisplay[currentActiveIndex].classList.add('active');
    descriptionDisplay[currentActiveIndex].classList.add('active');
})
