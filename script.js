const nav = document.querySelector('.nav');
const icon = document.getElementById('icon');
const iconElement = document.getElementById('menu-icon');

icon.addEventListener('click', () => {

  nav.classList.toggle('show');
});


iconElement.addEventListener('click', () => {
  if (iconElement.getAttribute('name') === 'menu-outline') {
    iconElement.setAttribute('name', 'close-outline');
  } else {
    iconElement.setAttribute('name', 'menu-outline');
  }
});