let menuToggle = false;

function menuPopUp() {
const navMenu = document.querySelector('.nav-menu');
if(menuToggle === false) {
  navMenu.style.display = 'grid';
  navMenu.style.opacity = 1;
  navMenu.style.zIndex = 99;
  menuToggle = true;
} else if (menuToggle === true) {
  navMenu.style.display = 'none';
  navMenu.style.opacity = 0;
  navMenu.style.zIndex = 1;
  menuToggle = false;
};
};
