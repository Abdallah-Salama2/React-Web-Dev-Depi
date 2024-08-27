function displayProducts() {
  var cards = document.getElementById("cards");
  var box = ``;
  for (var i = 1; i <= 7; i++) {
    box += `<div class="col-md-4">
        <div class="card border-0 position-relative">
          <img src="images/menu-${i}.jpg" class="w-100 h-100" />
          <div class="imgDesc position-absolute bg-white text-center mx-5 top-50">
            <h2>item title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptas, aliquid!
            </p>
          </div>
        </div>
      </div>`;
  }
  cards.innerHTML += box;
}
displayProducts();

var cardsImages = document.querySelectorAll(".card > img");
var layout = document.getElementById("layout");
var layoutImage = document.querySelector(".layout-img img");

cardsImages.forEach((cardImage) => {
  cardImage.addEventListener("click", function (e) {
    layout.classList.replace("d-none", "d-flex");
    layoutImage.src = cardImage.src;
  });
});

var left = document.querySelector(".icons .fa-circle-arrow-left");
var xmark = document.querySelector(".icons .fa-circle-xmark");
var right = document.querySelector(".icons .fa-circle-arrow-right");

left.addEventListener("click", function () {
  for (var i = 0; i < cardsImages.length; i++) {
    if (layoutImage.src == cardsImages[i].src) {
      var newIndex = i - 1;
      if (newIndex < 0) {
        newIndex = cardsImages.length - 1;
      }
      layoutImage.src = cardsImages[newIndex].src;
      break;
    }
  }
});

right.addEventListener("click", function () {
  for (var i = 0; i < cardsImages.length; i++) {
    if (layoutImage.src == cardsImages[i].src) {
      var newIndex = i + 1;
      if (newIndex >= cardsImages.length) {
        newIndex = 0;
      }
      layoutImage.src = cardsImages[newIndex].src;
      break; // Exit the loop after updating the image
    }
  }
});

xmark.addEventListener("click", function () {
  layout.classList.replace("d-flex", "d-none");
});

layout.addEventListener("click", function (e) {
  if (
    e.target !== layoutImage &&
    e.target !== xmark &&
    e.target !== left &&
    e.target !== right
  ) {
    layout.classList.replace("d-flex", "d-none");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.code === "Escape") {
    layout.classList.replace("d-flex", "d-none");
  }
});
