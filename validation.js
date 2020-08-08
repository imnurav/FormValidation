console.log('this is the project on validation of form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
let validUser = false
let validPhone = false
let validPassword = false
let validFname = false
let validLname = false
$('#failure').hide();
$('#success').hide();

password.addEventListener('blur', () => {
    let regex = /[a-zA-Z0-9\.\~\_\)\(\*\&\^\%\$\#\@\!\+\=]{8,20}/
    str = password.value
    if (regex.test(str)) {
        console.log('valid password')
        password.classList.remove('is-invalid');
        // password.classList.add('is-valid')
        validPassword = true

    }
    else {
        console.log('invalid password')
        password.classList.add('is-invalid');
        validPassword = false
    }
})
fname.addEventListener('blur', (e) => {
    console.log('you just blurred your event')
    let regex = /^[a-zA-Z ]{2,30}$/
    let str = fname.value
    console.log(fname, str)
    if (regex.test(str)) {
        console.log('||Valid First Name||')
        // fname.classList.add('is-valid')
        fname.classList.remove('is-invalid');
        validFname = true
    }
    else {
        console.log('||Invalid First Name||')
        fname.classList.add('is-invalid');
        validFname = false
    }
})
lname.addEventListener('blur', () => {
    console.log('you just blurred your event')
    let regex = /^[a-zA-Z ]{2,30}$/
    let str = lname.value
    console.log(lname, str)
    if (regex.test(str)) {
        console.log('||Valid Last Name||')
        // lname.classList.add('is-valid')
        lname.classList.remove('is-invalid');
        validLname = true

    }
    else {
        console.log('||Invalid Last Name||')
        lname.classList.add('is-invalid');
        validLname = false
    }
})
email.addEventListener('blur', () => {
    console.log('you just blurred your event')
    let regex = /^([_a-zA-Z0-9]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,5}$/
    let str = email.value
    console.log(email, str)
    if (regex.test(str)) {
        console.log('||Valid Username||')
        // email.classList.add('is-valid')

        email.classList.remove('is-invalid');

        //   email.classList.add('is-invalid')
        validUser = true


    }
    else {
        console.log('||Invalid Username||')
        email.classList.add('is-invalid')
        validUser = false


    }
})
phone.addEventListener('blur', () => {
    console.log('you just blurred your event')
    let regex = /^([0-9]){10}$/
    let str = phone.value
    console.log(phone, str)
    if (regex.test(str)) {
        console.log('||Valid Phone Number||')
        // phone.classList.add('is-valid')
        phone.classList.remove('is-invalid');
        // email.classList.add('is-invalid')
        validPhone = true

    }
    else {
        console.log('||Invalid Phone Number||')
        // email.classList.remove('is-valid');

        phone.classList.add('is-invalid')
        console.log('error')
        validPhone = false
    }

})


let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('You clicked on submit');
    // console.log(validEmail, validUser, validPhone);

    // Submit your form here
    if (validFname && validLname && validUser && validPhone && validPassword) {
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();

    }
    else {
        console.log(validPassword, validFname, validLname, validPhone, validUser)
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
    }

    document.querySelector('form').reset();


})