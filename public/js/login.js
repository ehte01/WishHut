const userActive = document.querySelector('.user');
const adminActive = document.querySelector('.admin');
const loginPage = document.querySelector('.login-page');
const registerPage = document.querySelector('.register-page');
const btnPill = document.querySelector('#btn-box');

function init(){
    loginPage.setAttribute('action','/user/login');
    registerPage.setAttribute('action','/user/register');
}

userActive.addEventListener('click',()=>{
    if(!userActive.classList.contains('active')){
        adminActive.classList.remove('active');
        userActive.classList.add('active');
        loginPage.setAttribute('action','/user/login');
        registerPage.setAttribute('action','/user/register');
    }
});

adminActive.addEventListener('click',()=>{

    if(!adminActive.classList.contains('active')){
        userActive.classList.remove('active');
        adminActive.classList.add('active');
        loginPage.setAttribute('action','/admin/login');
        registerPage.setAttribute('action','/admin/register');
    }
});

function register(){
    loginPage.style.left = '-400px';
    registerPage.style.left = '57px';
    btnPill.style.left = '110px';
}
function login(){
    registerPage.style.left = '450px';
    loginPage.style.left = '57px';
    btnPill.style.left = '0px';
}

init();


