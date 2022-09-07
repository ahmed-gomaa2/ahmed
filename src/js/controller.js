const burger = document.querySelector('.portfolio--nav-burger');
const sidebar = document.querySelector('.portfolio--sidebar');
const overlay = document.querySelector('.portfolio--overlay');
const exitBtn = document.querySelector('.portfolio--nav-exit');
const body = document.querySelector("body");
const about = document.querySelector('.portfolio--about');
const header = document.querySelector('.portfolio--nav');
const dummy = document.querySelector('.portfolio--dummy');
const skillsContainer = document.querySelector('.portfolio--skills-container');

/****************************** HANDLE BURGER CLICK **********************/
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

/************************************* Handling header scroll ************/
const stickyNav = (entries) => {
    const [entry] = entries;

    // console.log(entry);

    if(!entry.isIntersecting) header.classList.add('sticky');
    else header.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    // rootMargin: `-${navHeight + 200}px`
    rootMargin: `10px`
})


headerObserver.observe(dummy);


/************************************* Handling Skills section ************************/
const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'ReactJS',
    'Redux',
    'Redux-thunk',
    'NodeJS',
    'MySql',
    'SocketIO'
];

skills.map(s => {
    const markup = `<div class="portfolio--skills-skill"><span>▹</span>${s}</div>`;
    skillsContainer.insertAdjacentHTML('beforeend', markup)
})
