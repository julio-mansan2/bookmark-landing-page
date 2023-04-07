//FAQ

var acc = document.getElementsByClassName("acordeon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//Features

const simpleBookmarking = document.getElementById('simple-bookmarking')
const speedySearching = document.getElementById('speedy-searching')
const easySharing = document.getElementById('easy-sharing')
const simpleFeature = document.querySelector('.simple-bookmarking')
const speedyFeature = document.querySelector('.speedy-searching')
const easyFeature = document.querySelector('.easy-sharing')
const simpleLabel = document.querySelector('.simple-label')
const speedyLabel = document.querySelector('.speedy-label')
const easyLabel = document.querySelector('.easy-label')

simpleBookmarking.addEventListener('click', function () {
  if (simpleBookmarking.checked) {
    simpleFeature.classList.add('selecionado')
    speedyFeature.classList.remove('selecionado')
    easyFeature.classList.remove('selecionado')
    simpleLabel.classList.add('checked')
    speedyLabel.classList.remove('checked')
    easyLabel.classList.remove('checked')
  }
}
)

speedySearching.addEventListener('click', function () {
  if (speedySearching.checked) {
    simpleFeature.classList.remove('selecionado')
    speedyFeature.classList.add('selecionado')
    easyFeature.classList.remove('selecionado')
    simpleLabel.classList.remove('checked')
    speedyLabel.classList.add('checked')
    easyLabel.classList.remove('checked')
  }
}
)

easySharing.addEventListener('click', function () {
  if (easySharing.checked) {
    simpleFeature.classList.remove('selecionado')
    speedyFeature.classList.remove('selecionado')
    easyFeature.classList.add('selecionado')
    simpleLabel.classList.remove('checked')
    speedyLabel.classList.remove('checked')
    easyLabel.classList.add('checked')
  }
}
)

//Validação de Email

const inputEmail = document.getElementById('email')
const iconError = document.querySelector('.icon-error')
const inputSubmit = document.getElementById('submit')
const messageError = document.querySelector('.message-error')

inputSubmit.addEventListener('click', function() {
  event.preventDefault()
    if ((inputEmail.value === "" || inputEmail.validity.valid === false)) {            
        messageError.classList.add('invalido')
        iconError.classList.add('invalido')
        inputEmail.classList.add('border-invalid')
    } else {
      messageError.classList.remove('invalido')
      iconError.classList.remove('invalido')
      inputEmail.classList.remove('border-invalid')
    }
})

//Menu Hambúrguer

const menuHamburguer = document.getElementById('menu__toggle')
const navMenu = document.querySelector('.menu__box')

menuHamburguer.addEventListener('click', function () {
    if (menuHamburguer.checked) {
        navMenu.classList.add('aparecer')
    } else {
        navMenu.classList.remove('aparecer')
    }
})