// classes
class Budget {

    constructor(budget){
        this.budget = Number(budget);
        this.budgetLeft = this.budget;

    }
}

// Everything related to HTML
class HTML {
    // insert the budget when the user submits it
    insertBudget(amount){
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`
    }
    //Display a Message {correct or invalid}

    printMessage(message, className){
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('text-center','alert', className);
        messageWrapper.appendChild(document.createTextNode(message));

        //insert into HTMl
        document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm);
    
        setTimeout(() => {
            document.querySelector('.primary .alert').remove();
        }, 3000);
    }
}


// Variable
const addExpenseForm = document.querySelector('#add-expense'),
      budgetTotal = document.querySelector('span#total'),
      budgetLeft = document.querySelector('span#left');
let budget, userBudget;

//instanciate the HTML class
const html = new HTML();
// Event Listener
eventListener();
function eventListener(){
    //App init
    document.addEventListener('DOMContentLoaded', function(){
        // Ask the visitor the weekly budget
        userBudget = prompt('what is your budget for this week');
        //Validate the userBudget
        if(userBudget === null || userBudget === '' || userBudget === '0'){
            window.location.reload();
        }else{
            //Budget is valid then instanciate budget class
            budget= new Budget(userBudget);
            //Instanciate HTML class
            html.insertBudget(budget.budget);
            
        }
    });
    //when a new expense added
    addExpenseForm.addEventListener('submit', function(e){
        e.preventDefault();
        // Read the input values

        const expenseName = document.querySelector('#expense').vlaue ;
        const amount = document.querySelector('#amount').value;

        if(expenseName === '' || amount ===''){
            html.printMessage('There was error, all the fields are mandatory','alert-danger');

            
        }else{
            console.log('correct');
            
        }
    })

}

