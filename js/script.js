window.addEventListener('DOMContentLoaded', () => {
    const menu_list = document.querySelector('.menu_list'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu_list.classList.toggle('menu_list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu_list.classList.toggle('menu_list_active');
        })
    })
})