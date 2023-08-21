const usEmail = document.querySelector('.ent-email')
const usSenha = document.querySelector('.ent-senha')
const btnAcess = document.querySelector('.entrar')
const btnErro = document.querySelector('.erro-retornar')
const cardErro = document.querySelector('.erro-login')
const bgErro = document.querySelector('.backdrop-erro')

const logins = ['jeferson.lima.cj@gmail.com', 'ckoperacao01@gmail.com']

const senhas = ['12345', 'admin']

function validarSenha() {
  console.log(logins.indexOf(usEmail.value))
  console.log(senhas.indexOf(usSenha.value))
  if (usEmail.value == '' || usSenha.value == '') {
    entErro()
  } else if (
    logins.indexOf(usEmail.value) != -1 &&
    senhas.indexOf(usSenha.value) != -1
  ) {
    infoLogin()
    console.log('Login OK')
    window.location.replace('pages/dasboard.html')
  } else {
    console.log('Usuário não cadastrado ou Senha Incorreta')
    entErro()
  }
}

function infoLogin() {
  console.log(`E-mail:${usEmail.value}`)
  console.log(`Senha:${usSenha.value}`)
}

function entErro() {
  cardErro.style.visibility = 'visible'
  bgErro.style.visibility = 'visible'
  cardErro.style.marginTop = '5%'
}

function extErro() {
  bgErro.style.visibility = 'hidden'
  cardErro.style.visibility = 'hidden'
  cardErro.style.marginTop = '-30%'
}

btnErro.addEventListener('click', extErro)

btnAcess.addEventListener('click', validarSenha)
