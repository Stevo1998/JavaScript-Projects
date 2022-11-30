
let slideIndex = 0; //Defying the variable "slideIndex" and giving it a value of 0
showSlides(); //Calling the function showSlides()

function showSlides() { //Defying and naming the function showSlides()
  let i; //Defying the variable scope "i"
  let slides = document.getElementsByClassName("mySlides"); //Defying variable "slides" and setting the value to "mySlides" targetting the pictures
  for (i = 0; i < slides.length; i++) { //setting a loop to for the display of images
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}