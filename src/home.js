import cocktail from './abhishekHajareAppleCocktail.jpg'



function home () {

    

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home')




    const title = document.createElement('h1')
    title.classList.add('title')
    title.textContent = 'The Apple Shop'

    const advert = document.createElement('p')
    advert.classList.add('contentLargeText')
    advert.textContent = 'NEW FLAVOURS \n GREAT VALUE'

    const offers = document.createElement('p')
    offers.classList.add('contentSmallText');
    offers.textContent = 'Kids eat free breakfast |\n Daytime Apples only £1.99 |\n £5 Apple cocktail 5-7pm';

    const homeImage = new Image();
    homeImage.src = cocktail;
    homeImage.classList.add('homeImage');

    





    homeDiv.appendChild(title);

    homeDiv.appendChild(advert);

    homeDiv.appendChild(offers);

    homeDiv.appendChild(homeImage);

    
    return homeDiv;
    

}




export {home}