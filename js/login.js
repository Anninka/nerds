const modalButton = document.querySelector(".button-feedback");
const modal = document.querySelector(".modal");
const modalClose = modal.querySelector(".modal-close");

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault(); 
  modal.classList.add("modal-show");
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
});