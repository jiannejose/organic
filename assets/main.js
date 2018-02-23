const openNav = document.getElementById('openNav'); 
const toggleNav = document.getElementById('toggleNav');
const closeNav = document.getElementById('closeNav');
const navBg = document.getElementById('navBg');

// OPEN NAV

function navOpen() {

  // removes display none of c-nav__menu
  toggleNav.classList.remove('c-nav__menu--close');
  
  // removes burger
  openNav.classList.add('c-nav__burger--inactive');

  // removes close toggle display none
  closeNav.classList.remove('c-nav__close--inactive');

  setTimeout(function() {
    // bg appears
    navBg.classList.add('c-nav__main--open');        
    // nav menu appears
    toggleNav.classList.add('c-nav__menu--open');
    // close toggle appears
    closeNav.classList.add('c-nav__close--active');           
  }, 300);

}

openNav.addEventListener('click', navOpen);


// CLOSE NAV

function navClose() {

  toggleNav.classList.add('c-nav__menu--close');

  setTimeout(function() {
    navBg.classList.remove('c-nav__main--open'); 
    toggleNav.classList.remove('c-nav__menu--open');
    openNav.classList.remove('c-nav__burger--inactive'); 
    closeNav.classList.add('c-nav__close--inactive');
  }, 300);

  closeNav.classList.remove('c-nav__close--active');
}

closeNav.addEventListener('click', navClose);


// TOGGLE SUB MENU
const subMenus = document.getElementsByClassName('has_sub-menu');

for (let i = 0; i < subMenus.length; i++) {
  subMenus[i].addEventListener('click', openSubMenu);
}

function openSubMenu(event) {
  event.preventDefault();
  let parentElement = this.parentElement;

  if (hasSubMenuOpenClass(parentElement)) {
    parentElement.classList.remove('sub-menu--open');
    return;
  }

  closeAllSubMenus(); 

  parentElement.classList.add('sub-menu--open');
}

function hasSubMenuOpenClass(element) {
  let answer = element.classList.contains('sub-menu--open');
  return answer;
}

function closeAllSubMenus() {
  for (let i = 0; i < subMenus.length; i++) { 
    let subMenuParent = subMenus[i].parentElement;
    subMenuParent.classList.remove('sub-menu--open');
  }
}