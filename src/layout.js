import { chooseContent } from "./control";
/* Function for base layout */

const layout = function () {


    const content = document.createElement('div');

    content.classList.add('content');
    content.setAttribute('id', 'main');

    /* Header and tabs */

    const header = document.createElement('div');
    header.classList.add('header');

    const tabs = document.createElement('div');
    tabs.classList.add('tabs');


    const btn1 = document.createElement('button');
    btn1.setAttribute('id', 'homeButton');
    btn1.textContent = 'Home'
    btn1.classList.add('tab-link')
    const btn2 = document.createElement('button');
    btn2.textContent = 'Menu'
    btn2.setAttribute('id', 'menuButton');
    btn2.classList.add('tab-link')
    const btn3 = document.createElement('button');
    btn3.setAttribute('id', 'contactButton');
    btn3.classList.add('tab-link')
    btn3.textContent = 'Contact'

    tabs.appendChild(btn1)
    tabs.appendChild(btn2)
    tabs.appendChild(btn3)

    header.appendChild(tabs);
    


    const body = document.createElement('div');
    body.classList.add('body');


   





    const foot = document.createElement('div');
    foot.classList.add('footer');
    




    
    

    return {header, foot, body, content};


}

function test () {
    console.log('worked')
}

export {test}

export default layout;
