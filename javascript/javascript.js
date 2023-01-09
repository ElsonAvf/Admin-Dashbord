const menuIcon = document.querySelector('.mdi-menu');
const dropdownMenu = document.querySelector('#absoluteContainer');
const aside = document.querySelector('.aside')

menuIcon.addEventListener('click', () => {
  dropdownMenu.classList.remove('hidden');
})

dropdownMenu.addEventListener('click', (e) => {
  if (e.target === dropdownMenu) {
    dropdownMenu.classList.add('hidden');
  }
})