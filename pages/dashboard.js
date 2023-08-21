const btnToggle = document.querySelector('.btn-menu-rec')
const btnCompleto = document.querySelector('.btn-menu-avanc')
const menuAside = document.querySelector('aside')
const menuMin = document.querySelector('.menu-min')
const btnRec = document.querySelector('fa-caret-left')
const main = document.querySelector('main')
const body = document.querySelector('body')
const btnModTela = document.querySelector('.btn-mod-tela')
const logoGT = document.querySelector('.logo-GT')
const logoInfGt = document.querySelector('.logo-inf-gt')
const btnAcoes = document.querySelector('.btn-acoes')
const menuAcoesBase = document.querySelector('.list-acoes')
const iconLtMenu = document.querySelector('.fa-ellipsis-vertical')

let tglMenu = true
let ltMenu = false

function toggleMenu() {
  tglMenu = !tglMenu
  if (tglMenu == false) {
    menuAside.classList.add('menu-min')
    main.style.width = 'calc(100vw - 70px)'
    main.style.marginLeft = '70px'
  } else {
    menuAside.classList.remove('menu-min')
    main.style.width = 'calc(100vw - 250px)'
    main.style.marginLeft = '250px'
  }
  //menuAside.classList.add('toggle')
}

function darkMode() {
  body.classList.toggle('dark')
  if (body.classList == 'dark') {
    logoGT.src = '/assets/GT_Logo.png'
    logoInfGt.src = '/assets/GT_Logo.png'
  } else {
    logoGT.src = '/assets/GT_Logo_cz.png'
    logoInfGt.src = '/assets/GT_Logo_cz.png'
  }
}

function menuAcoes(){
  ltMenu = !ltMenu
  if(ltMenu == false){
    console.log('fechado')
    iconLtMenu.classList.add('fa-ellipsis-vertical')
    iconLtMenu.classList.remove('fa-xmark')
  menuAcoesBase.style.right = '-35%'
  }else{
    menuAcoesBase.style.right = '1%'
    iconLtMenu.classList.remove('fa-ellipsis-vertical')
    iconLtMenu.classList.add('fa-xmark')
    console.log('aberto')}
}

btnAcoes.addEventListener('click', menuAcoes)

btnModTela.addEventListener('click', darkMode)

btnToggle.addEventListener('click', toggleMenu)
