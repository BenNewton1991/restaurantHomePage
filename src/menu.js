import isolatedApple from './images/isolatedAppleBenjaminWong.jpg'
import multiApple from './images/multiApplerebeccaHansen.jpg'
import goodEats from './images/goodEats.jpg'
import appleBanana from './images/appleBananaphongNguyen.jpg'



function menu () {

    const menuCont = document.createElement('div');
    menuCont.classList.add('menuUpper')


    const menuTitle = document.createElement('p')
    menuTitle.classList.add('title')
    menuTitle.textContent = 'MENU';


    menuCont.appendChild(menuTitle)

    const menu = document.createElement('div');
    menu.classList.add('menu')



    /*

    const isolatedAppleImage = new Image();
    isolatedAppleImage.src = isolatedApple;
    isolatedAppleImage.classList.add('menuImage')

    */

    /* First menu item */

    const isolatedAppleDiv = document.createElement('div');
    isolatedAppleDiv.classList.add('menuImage')
    isolatedAppleDiv.classList.add('isolatedAppleImage')

    const isolatedAppleText = document.createElement('div');
    isolatedAppleText.classList.add('imageTextContainer');

    const isolatedApplep = document.createElement('p')
    isolatedApplep.textContent = 'An Isolated Apple: £1.99';
    isolatedApplep.classList.add('imageText');

    isolatedAppleText.appendChild(isolatedApplep)
    isolatedAppleDiv.appendChild(isolatedAppleText);


    /* First menu item */

    /*

    const multiAppleImage = new Image();
    multiAppleImage.src = multiApple;
    multiAppleImage.classList.add('menuImage')
   
    */


    /* Second menu item */

    const multiAppleDiv = document.createElement('div');
    multiAppleDiv.classList.add('menuImage')
    multiAppleDiv.classList.add('multiAppleImage');

    const multiAppleText = document.createElement('div');
    multiAppleText.classList.add('imageTextContainer');

    const multiAppleTextp = document.createElement('p')
    multiAppleTextp.textContent = 'Many Apple, Mango: £3.99';
    multiAppleTextp.classList.add('imageText');

    multiAppleText.appendChild(multiAppleTextp)
    multiAppleDiv.appendChild(multiAppleText);

    /* Third menu item */

    /*

    const goodEatsImage = new Image();
    goodEatsImage.src = goodEats;
    goodEatsImage.classList.add('menuImage')

    */

    const goodEatsDiv = document.createElement('div');
    goodEatsDiv.classList.add('menuImage')
    goodEatsDiv.classList.add('goodEatsImage');

    const goodEatsText = document.createElement('div');
    goodEatsText.classList.add('imageTextContainer');

    const goodEatsTextp = document.createElement('p')
    goodEatsTextp.textContent = 'Gourmet Apple: £6.99';
    goodEatsTextp.classList.add('imageText');

    goodEatsText.appendChild(goodEatsTextp)
    goodEatsDiv.appendChild(goodEatsText);

    /* Fourth menu item */

    /*

    const appleBananaImage = new Image();
    appleBananaImage.src = appleBanana;
    appleBananaImage.classList.add('menuImage')

    */

    const appleBananaDiv = document.createElement('div');
    appleBananaDiv.classList.add('menuImage')
    appleBananaDiv.classList.add('appleBananaImage');

    const appleBananaText = document.createElement('div');
    appleBananaText.classList.add('imageTextContainer');

    const appleBananaTextp = document.createElement('p')
    appleBananaTextp.textContent = 'Apple Banana: £5.99';
    appleBananaTextp.classList.add('imageText');

    appleBananaText.appendChild(appleBananaTextp)
    appleBananaDiv.appendChild(appleBananaText);

    menu.appendChild(isolatedAppleDiv);
    menu.appendChild(multiAppleDiv);
    menu.appendChild(goodEatsDiv);

    menu.appendChild(appleBananaDiv);





    menuCont.appendChild(menu)






    


    
    
    


    return menuCont;
}




export {menu}