const hamburgue = document.querySelector('.hamburgue'); 
const menu = document.querySelector('.menu-navegacion');

/* console.log(menu);
console.log(hamburgue) */;

hamburgue.addEventListener('click', () => {
    menu.classList.toggle('spread')
})
window.addEventListener('click', e=> {
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburgue){
        menu.classList.toggle('spread')
    }
})
