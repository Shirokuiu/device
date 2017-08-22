var pageHeaderTabButton = document.querySelector('.page-header__tab');
var dropdownTab = document.querySelector('.page-header__dropdownTab');

pageHeaderTabButton.addEventListener('click', function () {
  dropdownTab.classList.toggle('page-header__dropdownTab--vissible');
});
