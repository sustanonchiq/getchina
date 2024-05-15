document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuTrigger = document.querySelector('.header__hamburger'),
        mobileMenu = document.querySelector('.menu'),
        menuCloser = document.querySelector('.menu__closer');

    menuTrigger.addEventListener('click', () => {
        menu.classList.add('menu_active')
    })

    menuCloser.addEventListener('click', () => {
        menu.classList.remove('menu_active')
    })


    const anchors = [
        {
            links: document.querySelectorAll('.about-link'),
            anchor: document.querySelector('#about')
        },
        {
            links: document.querySelectorAll('.payment-link'),
            anchor: document.querySelector('#payment')
        },
    ]

    anchors.forEach(anchor => {
        anchor.links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                menu.classList.remove('menu_active')

                anchor.anchor.scrollIntoView({
                    behavior: 'smooth'
                });
            })
        })
    })

    document.querySelector('.promo__btn').addEventListener('click', () => {
        window.Tawk_API.popup()
    })
})