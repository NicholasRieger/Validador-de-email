const inputEmail = document.querySelector('#email')
const botaoValidar = document.querySelector('.botaoValidar')
const resultado = document.querySelector('.resultado')

function validacao(valor){
    const email = valor.trim()
    return email.includes('@') && email.endsWith('.com')
}

botaoValidar.addEventListener('click', () => {
    const ok = validacao(inputEmail.value)

    if(ok){
        resultado.textContent = 'E-mail validado'
        resultado.style.color = 'green'
        inputEmail.value = ''
        inputEmail.focus()
    } else {
        resultado.textContent = 'E-mail é inválido'
        resultado.style.color = 'red'
        inputEmail.focus()
    }
})

