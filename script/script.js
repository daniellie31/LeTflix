function runAllFunction(){
    validateEmail();
    validatePassword();
    validateGender();
    validatePlan();
    validateAgreement();
    if(validateEmail() && validatePassword() && validateGender() && validatePlan() && validateAgreement()){
        alert("Your data has been submitted, Thank You!");
        document.getElementById('form').reset();
    }
}

var errEmail = document.getElementById("error-email");
function validateEmail(){
    var email = document.getElementById('email').value;
    if(email == ''){
        errEmail.innerHTML = 'Please input your Email !';
        return false;
    }
    else if(!email.endsWith('@binus.ac.id')){
        errEmail.innerHTML = 'Email must ends with "@binus.ac.id"'
        return false;
    }
    errEmail.innerHTML = '';
    return true;
}

var errPassword = document.getElementById("error-password")
function validatePassword(){
    var password = document.getElementById('password').value;
    if(password == ''){
        errPassword.innerHTML = 'Please input your password !';
        return false;
    }
    else if(password.length < 8){
        errPassword.innerHTML = 'Password length must be atleast 8 characters !';
        return false;
    }
    else if(password.length > 16){
        errPassword.innerHTML = 'Password length must not exceed 16 characters !';
        return false;
    }
    else if(!isAlphaNum(password) ){
        errPassword.innerHTML = 'Password must be contain at least one character and one number!';
        return false; 
    }
    errPassword.innerHTML = '';
    return true;
}

function isAlphaNum(password){
    var letter = 0;
    var number = 0;
    for (var i = 0; i < password.length; i++) {
        var c = password.charAt(i);
        if(c >= 'a' && c <='z'){
            letter = 1;
        }
        else if(c >= '0' && c <='9'){
            number = 1;
        }
    }
    if(letter==1 && number==1){
        return true;
    }
    else return false;
}

var errGender = document.getElementById('error-gender');
function validateGender(){
    var male = document.getElementById('male').checked;
    var female = document.getElementById('female').checked;
    if(!male && !female){
        errGender.innerHTML = 'You Must Choose Between Male or Female !';
        return false;
    }
    errGender.innerHTML = '';
    return true;
}

var errPlan = document.getElementById("error-plan");
function validatePlan(){
    var plan = document.getElementById('plan').value;
    if(plan == ''){
        errPlan.innerHTML = 'Please choose your plan!'
        return false;
    }
    errPlan.innerHTML = '';
    return true;
}

var errAgreement = document.getElementById('error-agreement');
function validateAgreement(){
    var agreement = document.getElementById('cek').checked;
    if(!agreement){
        errAgreement.innerHTML = 'You Must Agree With Term & Conditions!';
        return false;
    }
    errAgreement.innerHTML = '';
    return true;
}

const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// $(document).ready(function(){
//     let len = $('.image').length;
//     let counter = $('#counter');
//     let index = 0;
//     let image = $('.image');

//     counter.html(0);
//     image.hide();
//     image.eq(index).show();

//     $('#previous').click(function(){
//         image.eq(index).animate(
//             {
//                 left : '-100px',
//                 opacity: 0
//             },
//             function(){
//                 image.eq(index).hide();
//                 if(index == 0){
//                     index = len - 1;
//                 }
//                 else{
//                     index = index - 1;
//                 }
//                 image.eq(index).show();
//                 image.eq(index).css('left', '100px');
//                 image.eq(index).animate(
//                     {
//                         left : 0,
//                         opacity: 1
//                     }
//                 )
//                 counter.html(index);
//             }
//         );

//     })

//     $('#next').click(function(){
//         image.eq(index).animate(
//             {
//                 left : '100px',
//                 opacity: 0
//             },
//             function(){
//                 image.eq(index).hide();
//                 if(index == len - 1){
//                     index = 0;
//                 }
//                 else{
//                     index = index + 1;
//                 }
//                 image.eq(index).show();
//                 image.eq(index).css('left', '-100px');
//                 image.eq(index).animate(
//                     {
//                         left : 0,
//                         opacity: 1
//                     }
//                 )
//                 counter.html(index);
//             }
//         );
//     })
// });


// $(document).ready(function(){
//     let len = $('.image1').length;
//     let counter = $('#counter');
//     let index = 0;
//     let image = $('.image1');

//     counter.html(0);
//     image.hide();
//     image.eq(index).show();

//     $('#previous1').click(function(){
//         image.eq(index).animate(
//             {
//                 left : '-100px',
//                 opacity: 0
//             },
//             function(){
//                 image.eq(index).hide();
//                 if(index == 0){
//                     index = len - 1;
//                 }
//                 else{
//                     index = index - 1;
//                 }
//                 image.eq(index).show();
//                 image.eq(index).css('left', '100px');
//                 image.eq(index).animate(
//                     {
//                         left : 0,
//                         opacity: 1
//                     }
//                 )
//                 counter.html(index);
//             }
//         );

//     })

//     $('#next1').click(function(){
//         image.eq(index).animate(
//             {
//                 left : '100px',
//                 opacity: 0
//             },
//             function(){
//                 image.eq(index).hide();
//                 if(index == len - 1){
//                     index = 0;
//                 }
//                 else{
//                     index = index + 1;
//                 }
//                 image.eq(index).show();
//                 image.eq(index).css('left', '-100px');
//                 image.eq(index).animate(
//                     {
//                         left : 0,
//                         opacity: 1
//                     }
//                 )
//                 counter.html(index);
//             }
//         );
//     })
// });
