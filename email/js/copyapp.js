// Variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');





//EventListener
eventListener();
function eventListener(){
    // App init
    document.addEventListener('DOMContentLoaded', appInit);
    //validate the form
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
    
    // Send email and reset button
    sendEmailForm.addEventListener('submit', sendEmail);
    resetBtn.addEventListener('click', resetForm);

}





//Functions
//App initialization
function appInit(){
    // disable the send btn
    sendBtn.disabled = true;

}

function sendEmail(e){
    e.preventDefault();
    //show the spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display ='block';
    //show the image
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block'
    // Hide spinner then show email image
    setTimeout(() => {
        spinner.style.display = 'none';

        //show the immage
        document.querySelector('#loaders').appendChild(sendEmailImg);

        setTimeout(() => {
            sendEmailForm.reset();
            sendEmailImg.remove();
        }, 5000);

    }, 3000);
}
// validate the field

function validateField(){
    let errors;
    //validate the length of the field
    validateLenght(this);

    //validate the Email
    if(this.type === 'email'){
        validateEmail(this);
    }
    

    //Both will return errors, the check if ther are any errors
    errors = document.querySelectorAll('.error');
    //check that the input are not empty
    if(email.value !== '' && subject.value !== '' && message.value !== ''){
        if(errors.length === 0){
            sendBtn.disabled = false;
        }
    }
}

//validate the length of the field
function validateLenght(field){
    if(field.value.length > 0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

//validate email (check for @ in the value)
function validateEmail(field){
    let emailText = field.value;
    //check the emailtext contains @
    if(emailText.indexOf('@') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }

}

//reset form

function resetForm(){
    sendEmailForm.reset();
}