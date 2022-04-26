// https://todo-itacademy.herokuapp.com/api/register
// https://todo-itacademy.herokuapp.com/api/login
// https://todo-itacademy.herokuapp.com/api/create
// https://todo-itacademy.herokuapp.com/api/todos 




const $email = document.querySelector('.login')
const $password = document.querySelector('.password')
const $login = document.querySelector('.regist_btn')


const base_URL = 'https://todo-itacademy.herokuapp.com/api'

function getRegister() {
    fetch(`${base_URL}/login`, {
        method:"POST",
        body:JSON.stringify({
            email:$email.value,
            password:$password.value,
        }),
        headers: {
            'Content-type':'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        localStorage.setItem('accessToken', res.accessToken)
        localStorage.setItem('refreshToken', res.refreshToken)
        // localStorage.setItem('userID', res.user.id)
        if(res.user.isActivated){
            window.open('./index.html', '_self')
            localStorage.setItem('isActivated', r.user.isActivated)
        }
    })
    .finally(() => $login.disabled = false)
}


$login.addEventListener('click', e => {
    e.preventDefault()
    getRegister()
})


window.addEventListener('load', () => {
    const active = localStorage.getItem('isActivated')
    if(active){
      window.open('../index.html', '_self')
    }
  })