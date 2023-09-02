const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Variable qui permet de connaître l'image sur laquelle on se trouve
let currentSlideIndex = 0;
 
// Selectionne la banniére
const banner = document.getElementById("banner"); 

// EventListener flèche gauche
const arrowLeft = banner.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
  console.log("fleche gauche on click");
// Sauvegarde l'index de la diapositive actuelle
const saveSlideIndex = currentSlideIndex;

   // Vérifie si on est sur la première diapositive
   if (currentSlideIndex === 0) {
	 // Si oui, on passe à la dernière diapositive
	 currentSlideIndex = slides.length - 1;
   } else {
	 // Sinon, on passe à la diapositive précédente
	 currentSlideIndex -= 1;
   }
 
   changeSlide(currentSlideIndex);
   changeBulletPoint(currentSlideIndex, saveSlideIndex);
   updateSlideText(currentSlideIndex);
 });

// EventListener flèche droite
const arrowRight = banner.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
  console.log("fleche droite on click");
    // Sauvegarde l'index de la diapositive actuelle
  const saveSlideIndex = currentSlideIndex;

  // Vérifie si on est sur la dernière diapositive
  if (currentSlideIndex === slides.length - 1) {
    // Si oui, on revient à la première diapositive
    currentSlideIndex = 0;
  } else {
    // Sinon, on passe à la diapositive suivante
    currentSlideIndex += 1;
  }

  changeSlide(currentSlideIndex);
  changeBulletPoint(currentSlideIndex, saveSlideIndex);
  updateSlideText(currentSlideIndex);
});

function changeBulletPoint (newIndex, lastIndex) {
	const currentDot = document.getElementsByClassName("dot") [lastIndex];
	currentDot.classList.remove("dot_selected");
	const newDot = document.getElementsByClassName("dot") [newIndex];
	newDot.classList.add("dot_selected");
}

// Création des points
// Fonction pour générer les bullet points
function createBulletPoints() {
	const bulletpoint = document.getElementById("bulletpoint");
  
	for (let i = 0; i < slides.length; i++) {
	  const bullet = document.createElement("div");
	  bullet.classList.add("dot");
	  
	  if (i === currentSlideIndex) {
		bullet.classList.add("dot_selected");
	  }
	  
	  bulletpoint.appendChild(bullet);
	}
  }
  
  createBulletPoints();

// Fonction qui change l'image et le texte du slide
  function changeSlide (index) {
	const image = document.getElementsByClassName("banner-img") [0];
	const src = slides[index]["image"];
	image.src=`./assets/images/slideshow/${src}`
	const slideText = document.getElementById("slide-text");
  	const text = slides[index]["tagLine"];
  	slideText.innerHTML = text;
  }



  