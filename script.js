//Hamburger Menu Code #############################################
let checkbox = document.getElementsByClassName('checkbox')[0];

//Modal Code ######################################################
var quoteModal = document.getElementById('quoteModal');
var quoteModalButton = document.getElementById('quoteModalButton');
var closeButton = document.getElementsByClassName('close')[0];

quoteModalButton.onclick = function () {
  quoteModal.style.display = 'block';
};

closeButton.onclick = function () {
  quoteModal.style.display = 'none';
};

window.addEventListener('click', function (event) {
  if (event.target == quoteModal) {
    quoteModal.style.display = 'none';
  }
});

//Carousel Code ###################################################
let currentSlide = 1;
let slideH1 = document.getElementById('slideH1');
let slideP = document.getElementById('slideP');
let bio = document.getElementById('bio');

showSlide(currentSlide);

function showSlide(n) {
  let i;
  const slides = document.getElementsByClassName('slide');
  const dots = document.getElementsByClassName('fa-circle');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('activeSlide');
  }

  slides[currentSlide - 1].style.display = 'block';
  dots[currentSlide - 1].classList.add('activeSlide');
  changeText();
}

function changeSlide(n) {
  showSlide((currentSlide = n));
}

function changeText() {
  if (currentSlide == 1) {
    slideH1.innerText = 'Professional Service and Trusted for Delivering Goods';
    slideP.innerText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium fusce id velit ut tortor pretium viverra suspendisse. Id faucibus nisl tincidunt eget nullam non. Felis donec et odio pellentesque diam volutpat commodo. Quis hendrerit dolor magna eget.';
    bio.innerHTML =
      '<span style="font-weight: 600">Thomas Wake</span>, Founder & CEO of <span style="font-weight: 900">LOGISTICS</span>';
  } else if (currentSlide == 2) {
    slideH1.innerText =
      'I have had nothing but good experiences with LOGISTICS and I really appreciate the brand';
    slideP.innerText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed. Purus semper eget duis at tellus at urna. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum.';
    bio.innerHTML =
      '<span style="font-weight: 600">Carol Tomé</span>, CEO of <span style="font-weight: 900">UPS</span>';
  } else if (currentSlide == 3) {
    slideH1.innerText =
      'The people at LOGISTICS are extremely helpful and knowledgeable in their job';
    slideP.innerText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent tristique magna sit amet purus. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Dolor sed viverra ipsum nunc. Purus faucibus ornare suspendisse sed nisi.';
    bio.innerHTML =
      '<span style="font-weight: 600">Søren Skou</span>, CEO of <span style="font-weight: 900">Maersk</span>';
  }
}
