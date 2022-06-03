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
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    console.log("enleve l'ancienne image");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    // slides[i].querySelectorAll = document.querySelectorAll("masthead.header");
    // dots[i].className = dots[i].className.replace.style.backgroundImage = "url(./assets/img/map-image.png)";
    console.log("remplace l'ancienne image");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  console.log("")
}

// var images = ['./assets/img/header-bg.jpg'];
// var index = 0;
// function buildImage() {
//     var img = document.createElement('img');
//     img.src = images[index];
//     document.getElementById('content').style.backgroundImage = (img);
//     index++;
//     index = index%4;
//     img.src = images[index];
// }