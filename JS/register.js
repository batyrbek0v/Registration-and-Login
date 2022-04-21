const $email = document.querySelector('.login')
const $password = document.querySelector('.password')
const $regist_btn = document.querySelector('.regist_btn')
const $text_password = document.querySelector('.text-password') 

const base_URL = 'https://todo-itacademy.herokuapp.com/api'

function getRegister() {
    fetch(`${base_URL}/registration`, {
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
        localStorage.setItem('userID', res.user.id)
    })
}


$regist_btn.addEventListener('click', e => {
    e.preventDefault()
    getRegister()
})