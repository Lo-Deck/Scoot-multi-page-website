# Frontend Mentor - Scoot website solution

This is a solution to the [Scoot website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/scoot-multipage-website-N76alNPRJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site

### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Scoot-multi-page-website/blob/main/screenshot/Scoot%20multi-page%20website-mobile.png).
![screenshot mobile-menu](https://github.com/Lo-Deck/Scoot-multi-page-website/blob/main/screenshot/Scoot%20multi-page%20website-mobile-menu.png).
![screenshot tablet-careers](https://github.com/Lo-Deck/Scoot-multi-page-website/blob/main/screenshot/Scoot%20multi-page%20website-tablet-careers.png).
![screenshot tablet-locations](https://github.com/Lo-Deck/Scoot-multi-page-website/blob/main/screenshot/Scoot%20multi-page%20website-tablet-locations.png).
![screenshot desktop](https://github.com/Lo-Deck/Scoot-multi-page-website/blob/main/screenshot/Scoot%20multi-page%20website-desktop.png).
![screenshot desktop-about](https://github.com/Lo-Deck/Scoot-multi-page-website/blob/main/screenshot/Scoot%20multi-page%20website-desktop-about.png).

### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Scoot-multi-page-website).
- Live Site URL: [Website](https://lo-deck.github.io/Scoot-multi-page-website/).

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow



### What I learned

I learned how to do a bigger website with different pages, set different background and try to keep a good responsiveness between all the pages and sizes from mobile to desktop size.

And set some transition with JS and CSS, when you click on an element.

```js
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

```

### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.
- [FreeCodeCamp](https://www.freecodecamp.org/) - I've been learning a lot.
- [Utopia](https://utopia.fyi/) - To have a better responsive design.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
