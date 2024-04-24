// Auto-slide home banner
var imgIndex = 0;
currentImg();

function currentImg() {
  let i;
  let slides = document.getElementsByClassName("banner");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  imgIndex++;
  if (imgIndex > slides.length) {
    imgIndex = 1;
  }
  slides[imgIndex - 1].style.display = "block";
  setTimeout(currentImg, 3000);
}

// Form validation
let nameInput = document.addEventListener("submit");

if (nameInput === "") {
  alert("Please enter your name.");
}
