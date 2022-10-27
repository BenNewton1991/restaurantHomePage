import './style.css';
import layout from './layout.js'
import {home} from './home.js'
import { chooseContent } from './control.js';
import {contact} from './contact.js'
import {menu} from './menu.js'



function init () {
    const content = document.querySelector('#content');
    const mainContent = document.querySelector('#main');
    
    const head = layout().header;
    content.appendChild(head);







    const body = layout().body;

    const cont = layout().content;

    


    const initContent = home();


    body.appendChild(cont);
    cont.appendChild(initContent);

    content.appendChild(body)

    const foot = layout().foot;
    content.append(foot)


    const homeBut = document.querySelector('#homeButton')
    homeBut.addEventListener('click', function(){
        cont.innerHTML = ''
        const div = home();
        cont.append(div);

    })

    const menuBut = document.querySelector('#menuButton')
    menuBut.addEventListener('click', function(){
        cont.innerHTML = ''
        const div = menu();
        cont.append(div);

    })

    const contactBut = document.querySelector('#contactButton')
    contactBut.addEventListener('click', function(){
        contact();
        cont.innerHTML = ''
        const div = contact();
        cont.append(div);

    })





}




init();





