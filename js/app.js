const btnToShowMenu = document.getElementById('menu-btn')
const btnToHidewMenu = document.getElementById('btn-menu-hide')
const menuMovil = document.getElementById('menu-movil')

menuMovil.style.display = 'none' 

const toggleMenu = ( status ) => {
  if (status) {
    menuMovil.style.display = 'flex' 
  } else {
    menuMovil.style.display = 'none' 
  }
}

btnToShowMenu.addEventListener('click', () => toggleMenu(true) )
btnToHidewMenu.addEventListener('click', () =>  toggleMenu(false) )