function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

const card1 = document.querySelector(".card1_inner");

card1.addEventListener("click", function () {
  card1.classList.toggle("is-flipped");
});

const card2 = document.querySelector(".card2_inner");

card2.addEventListener("click", function () {
  card2.classList.toggle("is-flipped");
});

const card3 = document.querySelector(".card3_inner");

card3.addEventListener("click", function () {
  card3.classList.toggle("is-flipped");
});
if(el){
  el.addEventListener('click', swapper, false);
}