const btnMenu = document.querySelector('.button-menu');
const menu = document.querySelector('.menu');
const background = document.querySelector('.background');


/*DISPLAY MENU*/

let isClickedMenu = false;

btnMenu.addEventListener('click', () => {

    isClickedMenu = !isClickedMenu;

    if(isClickedMenu){

        menu.style.display = 'block';
        background.style.display = 'block';
        document.querySelector('.logo-hamburger').src = './images/icons/close.svg';

    }
    else{

        menu.style.display = '';
        background.style.display = 'none';
        document.querySelector('.logo-hamburger').src = './images/icons/hamburger.svg';

    }

});


document.querySelectorAll('.section-faqs').forEach( (item, index) => {

    item.addEventListener('click', () => {

        if( !document.querySelectorAll('.section-faqs .text')[index].style.display ){
            document.querySelectorAll('.section-faqs .text')[index].style.display = 'block';
            document.querySelectorAll('.arrow')[index].style.transform = 'rotate(180deg)';
            document.querySelectorAll('.section-faqs .text')[index].classList.add('anim-height');
        }

        else{
            document.querySelectorAll('.section-faqs .text')[index].style.display = '';
            document.querySelectorAll('.arrow')[index].style.transform = 'rotate(0deg)';
            document.querySelectorAll('.section-faqs .text')[index].classList.remove('anim-height');
        }

    });

});
