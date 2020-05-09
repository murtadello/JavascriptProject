// Classes

class Budget{
    constructor(budget){
        this.budget = Number(budget);
        this.budgetLeft = this.budget;
    }

    /// substract from the budget
    substractFromBudget(amount){
        return this.budgetLeft -= amount;
    }
}

// Everything related to HTML

class HTML {
    //insert the budget when the user submits it
    insertBudget(amount){
        // insert into html
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }

    //Display a message
    printMessage(message, className){
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('text-center', 'alert', className);
        messageWrapper.appendChild(document.createTextNode(message));
        // Insert into HTML
        document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm);
        //clear the error
        setTimeout(() => {
            document.querySelector('.primary .alert').remove();            
        }, 3000);
    }
    // Display the expense from the form into the list
    addExpenseToList(name, amount){
        const expensesList = document.querySelector('#expenses ul');
        //create a li
        const li = document.createElement('li');
        li.classList = 'list-group-item d-flex justify-content-between align-item-center';

        //create the template
        li.innerHTML = `
        ${name}
        <span class = "badge badge-primary badge-pill" >$ ${amount}</span>`
        ;
        //insert into the html
        expensesList.appendChild(li);
    }
    //substract expens amount from budget
    trackBudget(amount){
        const budgetLeftDollars = budget.substractFromBudget(amount);
        budgetLeft.innerHTML = `${budgetLeftDollars}`;
        // Check when 50% is spent
        if( (budget.budget/4)>budgetLeftDollars ){
            budgetLeft.parentElement.parentElement.classList.remove('alert-success', 'alert-warning');
            budgetLeft.parentElement.parentElement.classList.add('alert-danger');

        }else if( (budget.budget/2)>budgetLeftDollars ){
            budgetLeft.parentElement.parentElement.classList.remove('alert-success');
            budgetLeft.parentElement.parentElement.classList.add('alert-warning');
        }
        
    }
}//end of class


//Variables
//select the form
const addExpenseForm = document.querySelector('#add-expense'),
      budgetTotal = document.querySelector('span#total'),
      budgetLeft = document.querySelector('span#left');

let budget, userBudget;

//Instanciate the HTML class
const html = new HTML();


//Event Listeners
eventListener();
function eventListener(){
    //App init
    document.addEventListener('DOMContentLoaded', function(){
        userBudget = prompt('what is your budget for this week');
        //validate the userbudget
        if(userBudget === null || userBudget === '' || userBudget === '0'){
            window.location.reload();
        }else{
            //budget is valid then instanciate the budget class
            budget = new Budget(userBudget);
            //Instanciate HTML class
            html.insertBudget(budget.budget);
        }
    })
    //when a new expense added
    addExpenseForm.addEventListener('submit', function(e){
        e.preventDefault();
    })
}

// when a new expense is added

addExpenseForm.addEventListener('submit', function(e){
    e.preventDefault();
    //Read the input value
    const expenseName =  document.querySelector('#expense').value;
    const amount = document.querySelector('#amount').value;

    if(expenseName === '' || amount === ''){
        html.printMessage('There was an error, all field are mandatory',
        'alert-danger');
        
    }else{
        // Add the Expense into the list
        html.addExpenseToList(expenseName, amount);
        html.trackBudget(amount);

        html.printMessage('Added....',
        'alert-success');
        
    }
});




