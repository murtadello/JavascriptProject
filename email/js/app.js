//variables

const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');
//Event Listeners
eventListeners();
 
function eventListeners(){
    //App init
    document.addEventListener('DOMContentLoaded', appInit);
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
    //send email and  reset button
    sendEmailForm.addEventListener('submit', sendEmail);
    resetBtn.addEventListener('click', resetForm);  
}
//Functions
//App intialization
function appInit(){
    //disable the send button on page loaded
    sendBtn.disabled = true;
}

function sendEmail(e){
    e.preventDefault();

    //show spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display ='block';

    //show the image
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src ='img/mail.gif';
    sendEmailImg.style.display = 'block';

    //Hide spinner and show the send Email image
    setTimeout(() => {
        //Hide the spinner
        spinner.style.display = 'none';
        //show the image
        document.querySelector('#loaders').appendChild(sendEmailImg);
        
        //After 5 seconds , hide the image and reset the from
        setTimeout(() => {
            sendEmailForm.reset();
            sendEmailImg.remove();
        }, 5000);
    
    }, 3000);


}
//Validate the fields
function validateField(){
    let errors;
    //validate the length of the field;
    validateLength(this);
    //validate the email
    if(this.type === 'email'){
        validateEmail(this);
    }

    //Both will return erros, then check if there is any erros
    errors = document.querySelectorAll('.error');
    // check that the inputs are not empty
    if(email.value !== ''  && subject.value !== ''&& message !== ''){
        if(errors.length === 0){
            sendBtn.disabled = false;
        }

    }
}
//validate the lenght of the fields

function validateLength(field){
    if(field.value.length > 0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

//validate email (check for @ inn the value)

function validateEmail(field){
    let emailText = field.value;
    // check if the emailText contains @
    if(emailText.indexOf('@') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}


//Reset the Form

function resetForm(){
    sendEmailForm.reset();
}

