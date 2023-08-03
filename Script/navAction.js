const checkBtn = document.querySelector("[data-type-check]");
const menu = document.querySelector("[data-type-menu]");

const showMenu = () =>{
    menu.classList.toggle("showMenu");
    checkBtn.classList.toggle("changeBackground");
}

checkBtn.addEventListener('click', showMenu);
