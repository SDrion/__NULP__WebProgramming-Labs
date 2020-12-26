const burgerIco = document.getElementById('burger-ico');
const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');
const pictures = document.getElementById('pictures');
const thirdSection = document.getElementById('thirdSection');

function changeBurger() {
  if(burgerIco.classList.contains('active-burger')) {
    burgerIco.classList.remove('active-burger');
    navbar.classList.remove('active-burger-menu');
  } else {
    burgerIco.classList.add('active-burger');
    navbar.classList.add('active-burger-menu');
  }
}

burgerIco.addEventListener('click', changeBurger);

window.onload = () => {
  logo.classList.add('animation_logo');
};

window.onscroll = () => {
  const triggerHeight = thirdSection.offsetHeight - 350;
  let scrollHeight = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
  if(scrollHeight >= triggerHeight) {
    pictures.classList.add('picturesAnim');
  }
}