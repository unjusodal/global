function menu() {
    const menuBtn = document.querySelector('.header__menu-icon')
    const menu = document.querySelector('.nav__menu')

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('nav__menu--active')
    })
}

function activeLinks() {
    const menuLinks = document.querySelectorAll('.menu__link')

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {

            menuLinks.forEach(link => {
                link.classList.remove('menu__link--active')
            })
            
            link.classList.add('menu__link--active')
        })
    })
}

menu()
activeLinks()
