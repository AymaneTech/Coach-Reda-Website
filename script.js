let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('bx bx-x')
    menu.classList.toggle('active')
} 
window.onscroll = () =>{
    menu.classList.remove('bx bx-x')
    menu.classList.remove('active')
} 

