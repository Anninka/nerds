const modalButton = document.querySelector(".button-feedback");
const modal = document.querySelector(".modal");
const modalClose = modal.querySelector(".modal-close");
const modalForm = modal.querySelector(".modal-form");
const modalName = modal.querySelector(".modal-input-name");
const modalEmail = modal.querySelector(".modal-input-email");
const modalText = modal.querySelector(".modal-input-text");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");

  if (storage) {
    modalName.value = storage;
    modalEmail.focus();
  } else {
    modalName.focus();
  }
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
if (!modalName.value || !modalEmail.value || !modalText.value) {
  evt.preventDefault();
  modal.classList.remove("modal-error");
  modal.offsetWidth;
  modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", modalName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});
