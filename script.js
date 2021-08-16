const username = document.getElementById('kullaniciadi')
const email = document.getElementById('eposta')
const phone = document.getElementById('telefon')
const password = document.getElementById('sifre')
const repassword = document.getElementById('tekrarsifre')
const form = document.getElementById('form')

// const errorIcon = document.createElement('i')
// errorIcon.className = 'fas fa-exclamation'
// const successIcon = document.createElement('i')
// successIcon.className = 'fas fa-check'

function error(input,message){
input.parentElement.style.border = '1px solid red'
input.parentElement.className = 'input-icon form-control is-invalid'
const messageDiv = input.parentElement.nextElementSibling
messageDiv.innerText = message
}
function success(input,message){
    input.parentElement.style.border = '1px solid darkgreen'
    input.parentElement.className = 'input-icon form-control is-valid'
    }
function validateEmail(emailcontrol) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(emailcontrol).toLowerCase());
}
function validateUsername(usernamecontrol) {
    const re = /^[a-zA-Z0-9_]{4,}[a-zA-Z]+[0-9]*$/
    return re.test(String(usernamecontrol))
}
function validatePhone(phonecontrol) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return re.test(String(phonecontrol));
}
function validateStrongPassword(passwordControl) {
    const re = /^(?=.*\d)(?=.*[!@#%&.])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#%&.]{8,}$/
    return re.test(String(passwordControl));
}
form.addEventListener('submit', function(e){
    
    if(username.value === ''){
        error(username, 'Kullanıcı adını boş bırakamazsınız.')
    }else if(!validateUsername(username.value)){
        error(username, 'Kullanıcı adınız en az 5 karakter olmalıdır ve özel karakter içermemelidir.')
    }
    else{
        success(username)
    }

    if(email.value === ''){
        error(email, 'E-Posta adresini boş bırakamazsınız.')
    }else if(!validateEmail(email.value)){
        error(email, 'E-Posta adresinizde özel karakterler kullanmayınız ve @ etiketini giriniz.')
    }
    else{
        success(email)
    }

    if(phone.value === ''){
        error(phone, 'Telefon numarasını boş bırakamazsınız.')
    }else if(!validatePhone(phone.value)){
        error(phone, 'Telefon numarası sadece rakam içermeli ve en az 10 rakam olmalıdır.')
    }else{
        success(phone)
    }

    if(password.value === ''){
        error(password, 'Şifreyi boş bırakamazsınız.')
    }else if(!validateStrongPassword(password.value)){
        error(password, 'Şifreniz en az 1 büyük ve 1 küçük harf içermelidir. En az 8 karakterli olmalıdır ve aşağıdaki özel karakterlerden en az birini içermelidir.')
    }
    else{
        success(password)
    }
    if(repassword.value === ''){
        error(repassword, 'Tekrar şifreyi boş bırakamazsınız.')
    }else if(repassword.value !== password.value){
        error(repassword, 'Şifrenizle uyuşmuyor.')
    }
    else{
        success(repassword)
    }
    e.preventDefault()
})