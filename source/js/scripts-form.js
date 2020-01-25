var DataButton = document.querySelector(".button--form");
var DataPopup = document.querySelector(".modal__data");
var DataSent = document.querySelector(".modal__sent");
var DataClose = document.querySelector(".modal__close");
var DataForm = document.querySelector(".form__wrapper");
var overlay = document.querySelector(".overlay");

DataButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  var inputs = document.querySelectorAll(".form__wrapper input[required]");
  var success = true;
  inputs.forEach(function (item) {
    success = success && (item.value != "");
  });
  console.log(success);
  if (success === false) {
    DataPopup.classList.add("modal__show");
    overlay.classList.add("modal__show");
  } else {
    DataSent.classList.add("modal__show");
    overlay.classList.add("modal__show");
  }
});

DataClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  DataPopup.classList.remove("modal__show");
  overlay.classList.remove("modal__show");
});

DataSent.addEventListener("click", function (evt) {
  evt.preventDefault();
  DataSent.classList.remove("modal__show");
  overlay.classList.remove("modal__show");
  // DataForm.submit();
});
