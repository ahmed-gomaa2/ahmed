/**************************************************************************************/
/************************************* Global Variables *******************************/
/**************************************************************************************/
const burger = document.querySelector('.portfolio--nav-burger');
const sidebar = document.querySelector('.portfolio--sidebar');
const overlay = document.querySelector('.portfolio--overlay');
const exitBtn = document.querySelector('.portfolio--nav-exit');
const body = document.querySelector("body");
const about = document.querySelector('.portfolio--about');
const header = document.querySelector('.portfolio--nav');
const dummy = document.querySelector('.portfolio--dummy');
const skillsContainer = document.querySelector('.portfolio--skills-container');
const projectsContainer = document.querySelector('.portfolio--projects-container')
const nodes = document.querySelectorAll('*');
console.log(nodes);

/***************************************************************************************/
/****************************** HANDLE BURGER CLICK ************************************/
/***************************************************************************************/
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

/**************************************************************************************/
/************************************* Handling header scroll *************************/
/**************************************************************************************/
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

/**************************************************************************************/
/************************************* Handling Skills section ************************/
/**************************************************************************************/
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
    skillsContainer.insertAdjacentHTML('beforeend', markup);
});

/**************************************************************************************/
/***************************** Handling the Projects section **************************/
/**************************************************************************************/
const projects = [
    {
        name: 'messenger-clone',
        link: 'http://3.80.44.161/',
        github: 'https://github.com/ahmed-gomaa2/massenger',
        desc: 'Chat using test and images.',
        skills: ['NodeJS', 'MySql', 'ReactJS', 'Redux', 'SocketIO']
    },
    {
        name: 'Spotify-clone',
        link: 'https://spotify-b41cc.web.app/',
        github: 'https://github.com/ahmed-gomaa2/spotify.git',
        desc: 'spotify login and user interface.',
        skills: ['ReactJS', 'Redux', 'firebase']
    }
];

projects.map(p => {
    const markup = `<div class="portfolio--projects-project">
                <a href=${p.link} target="_blank" class="portfolio--projects-project-container">
                </a>
            </div>`;
    projectsContainer.insertAdjacentHTML('afterbegin', markup);
    const link = document.querySelector('.portfolio--projects-project-container');
    const linkMarkup = `<div class="portfolio--projects-project-header">
                            <p><i class="fa-regular fa-folder"></i></p>
                            <p><a target="_blank" href=${p.github}><i class="fa-brands fa-github"></i></a></p>
                            <p><a target="_blank" href=${p.link}><i class="fa-solid fa-link"></i></a></p>
                        </div>
                        <div class="portfolio--projects-project-desc">
                            <h4>${p.name}</h4>
                            <p>${p.desc}</p>
                        </div>
                        <div class="portfolio--projects-project-footer">
                        </div>`;
    link.insertAdjacentHTML('beforeend', linkMarkup)
    const footer = document.querySelector('.portfolio--projects-project-footer');
    p.skills.map(s => {
        const skillsMarkup = `<p>${s}</p>`
        footer.insertAdjacentHTML('beforeend', skillsMarkup)
    });
});

/**************************************************************************************/
/*************************************** Handling the scroll animation ****************/
/**************************************************************************************/
const aboutH = document.querySelector('.portfolio--about-header');
const aboutI = document.querySelector('.portfolio--about-info');
const aboutE = document.querySelector('.portfolio--about-resume');

[aboutH, aboutI, aboutE].map(el => {
    el.classList.add('fading');
});

setTimeout(() => {
    [aboutH, aboutI, aboutE].map(el => {
        el.classList.remove('fading');
    });
}, 200);





















