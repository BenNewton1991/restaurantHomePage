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


    const isolatedAppleImage = new Image();
    isolatedAppleImage.src = isolatedApple;
    isolatedAppleImage.classList.add('menuImage')

    const multiAppleImage = new Image();
    multiAppleImage.src = multiApple;
    multiAppleImage.classList.add('menuImage')

    const goodEatsImage = new Image();
    goodEatsImage.src = goodEats;
    goodEatsImage.classList.add('menuImage')

    const appleBananaImage = new Image();
    appleBananaImage.src = appleBanana;
    appleBananaImage.classList.add('menuImage')

    menu.appendChild(isolatedAppleImage);
    menu.appendChild(multiAppleImage);
    menu.appendChild(goodEatsImage);

    menu.appendChild(appleBananaImage);





    menuCont.appendChild(menu)






    


    
    
    


    return menuCont;
}




export {menu}