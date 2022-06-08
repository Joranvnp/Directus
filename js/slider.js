let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slideIndex = 1;
  //Selectionne l'élément pour le slide avec la class mySlides
  let slides = document.getElementsByClassName("mySlides");
  //Selectionne l'élément pour le dot avec la class mySlides
  let dots = document.getElementsByClassName("dot");
  //Remet à 1 l'index si il est supèrieur au nombre de slides
  if (n > slides.length) {slideIndex = 1}
  //Remet à 1 l'index si il est infèrieur au nombre de slides
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    console.log("enleve l'ancienne image");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    // slides[i].className = dots[i].className.replace
    // slides[i].querySelectorAll = document.querySelectorAll("masthead.header");
    // dots[i].className = dots[i].className.replace.style.backgroundImage = "url(./assets/img/map-image.png)";
    console.log("remplace l'ancienne image");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  // console.log("")
}