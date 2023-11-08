const toggle = document.getElementById('toggle');
const header = document.getElementById('header');
const navbar = document.getElementById('navbar');
const container = document.getElementById('home');
const activePage = window.location.pathname;
const links = document.querySelectorAll('.nav-bar ul li a');
    
toggle.onclick = function(active){
  toggle.classList.toggle('active');
  navbar.classList.toggle('active');
  container.classList.toggle('active');
}
document.onclick = function(e){
    if(e.target.id !== 'navbar'&& e.target.id !== 'toggle' && e.target.id != 'home'){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
        container.classList.remove('active');

    }
}

if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      link.classList.add('active');
    });
  });
}