// Select Dom items 
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

const upArrow = document.querySelector('.up-arrow');

// Set initial state of menu 
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

window.addEventListener('scroll', showUpArrow);


function toggleMenu() {
  if(!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');

    navItems.forEach(item => item.classList.add('show'));

    // Set menu state 
    showMenu = true;
  } else {

    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');

    navItems.forEach(item => item.classList.remove('show'));

    // Set menu state 
    showMenu = false;
  }
}

function showUpArrow() {
  let y = window.scrollY;

  if(y > 200){
    upArrow.classList.add('showArrow');
  } else {
    upArrow.classList.remove('showArrow');
  }
}