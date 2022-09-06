/****************************** HANDLE BURGER CLICK **********************/
const burger = document.querySelector('.portfolio--nav-burger');
const sidebar = document.querySelector('.portfolio--sidebar');
const overlay = document.querySelector('.portfolio--overlay');
const exitBtn = document.querySelector('.portfolio--nav-exit');

burger.addEventListener('click', (e) => {
    overlay.classList.add('portfolio--show');
    setTimeout(() => {
        sidebar.classList.add('portfolio--show');
    }, (500));
});

[overlay, exitBtn].map(el => {
    el.addEventListener('click', (e => {
        sidebar.classList.remove('portfolio--show');
        setTimeout(() => {
            overlay.classList.remove('portfolio--show');
        }, (500));
    }));
});
