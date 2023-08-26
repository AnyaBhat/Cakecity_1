// Script for navigation bar
const bar=document.getElementById('drawer');
const nav=document.getElementById('navbar');


if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    });
}