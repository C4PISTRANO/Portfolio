let list = document.querySelectorAll('.nav li');
let header = document.querySelector('header');

/*mark menu item corresponding to visible section*/
function highlightMenu() {
    list.forEach((item) => {
        const sectionId = item.querySelector('a').getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        const rect = section.getBoundingClientRect();

        if (rect.top <= 80 && rect.bottom >= 0) {
            list.forEach((i) => i.classList.remove('active'));
            item.classList.add('active');
        }
    });
}

/*highlight the menu while the user scrolls*/
window.addEventListener('scroll', highlightMenu);

/*open hamburger menu when click on hamburger icon*/
function toggleHeader() {
    header.classList.toggle('active');
}

let menuToggle = document.querySelector('.menuToggle');
menuToggle.addEventListener('click', toggleHeader);

/*close hamburger menu when select menu item*/
function closeHeader() {
    header.classList.remove('active');
}

let menuClose = document.querySelector('.nav')
menuClose.addEventListener('click', closeHeader);

/*button show-or-hide in projects section*/
var btn = document.querySelector('#show-or-hide');
var content2 = document.querySelector('.content2');

btn.addEventListener('click', function () {
    if (content2.style.display === 'block' || content2.style.display === 'grid') {
        content2.style.display = 'none';
        this.textContent = 'Mais Projetos';
    }
    else {
        content2.style.display = 'grid';
        this.textContent = 'Menos Projetos';
        this.attr = 'Clique para ver menos projetos.';
    }
})

/*save choice of cookies msg*/
var msgCookies = document.getElementById('cookies-msg');

function accept() {
    localStorage.lgpdMsg = "sim"
    msgCookies.classList.remove('show-msg')
}
if (localStorage.lgpdMsg == 'sim') {
    msgCookies.classList.remove('show-msg')
}
else {
    msgCookies.classList.add('show-msg')
}