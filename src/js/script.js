let list = document.querySelectorAll('.nav li');
function active(){
    list.forEach((i) => i.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((i) => i.addEventListener('click',active));

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
menuToggle.onclick = function(){
    header.classList.toggle('active');
}

var btn = document.querySelector('#show-or-hide');
var content2 = document.querySelector('.content2');

btn.addEventListener('click', function() {
    if(content2.style.display === 'block' || content2.style.display === 'grid') {
        content2.style.display = 'none';
        
    }
    else {
        content2.style.display = 'grid';
    }
})