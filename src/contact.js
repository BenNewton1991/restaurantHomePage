import cocktail from './abhishekHajareAppleCocktail.jpg'

function contact () {
   
    


    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact')

  


    const title = document.createElement('p')
    title.classList.add('contentLargeText')
    title.textContent = 'Contact Information'

    const phone = document.createElement('p')
    phone.classList.add('contentSmallText')
    phone.textContent = 'Phone: A1B-C2D-E3F'

    const email = document.createElement('p')
    email.classList.add('contentSmallText')
    email.textContent = 'Email: appleAppleForMe.com'


    /*
    const homeImage = new Image()
    homeImage.src = cocktail
    homeImage.classList.add('homeImage');
    */



    


    

    const map = document.createElement('iframe');
    map.classList.add('map')
    map.src="https://www.google.com/maps/embed?pb&Q=!"

    

    





    contactDiv.appendChild(title);

    contactDiv.appendChild(phone);
    contactDiv.appendChild(email);
    contactDiv.appendChild(map)

    

    

    return contactDiv;
    
    

}




export {contact}