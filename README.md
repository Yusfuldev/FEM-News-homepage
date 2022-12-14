# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Toggle the mobile menu (requires some JavaScript)

### Screenshot

![Desktop](./screenshot/desktop%20design.png)
![Mobile](./screenshot/mobile%20design.png)

### Links

- Solution URL: [Github](https://github.com/Yusfuldev/FEM-News-homepagel.com)
- Live Site URL: [Live site](https://frontend-mentor-news-homepage1.netlify.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanila javascript

### What I learned

learnt to use combination of multiple 'if' conditions together using "&&"

```js
document.body.addEventListener("click", (e) => {
  if (e.target !== menu.children && e.target !== menu && e.target !== burger) {
    closeMenu();
  }
});
```

## Author

- Website - [Netlify profile](hhttps://app.netlify.com/teams/yusfuldev/overview)
- Frontend Mentor - [Front end mentor profile](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@hadebayo4u](https://www.twitter.com/hadebayo4u)
