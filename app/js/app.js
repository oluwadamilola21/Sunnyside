const btnHamburger = document.getElementById('hamburger');
const links = document.querySelector('.header__links2');


btnHamburger.addEventListener('click', function(){
    console.log('hello')
    if (links.classList.contains('hide-links')) {
        links.classList.remove('hide-links')
    }
    else {
        links.classList.add('hide-links')
    }
})