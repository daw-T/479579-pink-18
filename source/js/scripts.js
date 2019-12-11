if (false) {
  throw 'not scritp';
}

var navMain = document.querySelector(".main-nav");
var button = document.querySelector(".page-header__toggle");
var pageHeader = document.querySelector(".page-header");

console.log(button);

if (button.classList.contains('page-header__toggle--invisible')) {
  button.classList.remove('page-header__toggle--invisible');
  button.classList.add('page-header__toggle--opened');
  pageHeader.classList.add('stealth');
}
if (navMain.classList.contains('main-nav--opened')) {
  navMain.classList.remove('main-nav--opened');
  navMain.classList.add('main-nav--closed');
}

console.log("test");
button.addEventListener('click', function () {
  console.log("click botton");
  var button = this;
  if (button.classList.contains('page-header__toggle--closed')) {
    button.classList.remove('page-header__toggle--closed');
    button.classList.add('page-header__toggle--opened');
    pageHeader.classList.add('stealth');
  } else {
    button.classList.remove('page-header__toggle--opened');
    button.classList.add('page-header__toggle--closed');
    pageHeader.classList.remove('stealth');
  }

  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }else {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  }
});
