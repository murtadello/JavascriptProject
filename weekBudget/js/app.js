// classes
class Budget {

    constructor(budget){
        this.budget = Number(budget);
        this.budgetLeft = this.budget;
    }
    //subsctrack from the budget
    substractFromBudget(amount){
        return this.budgetLeft -= amount;
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
    //Display the expense from the form into the list
    addExpenseToList(name, amount){
        const expensesList = document.querySelector('#expenses ul');
        //create a list
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-item-center';
        // create a template
        li.innerHTML = `
            ${name}
            <span class="badge badge-primary badge-pill">$ ${amount}</span>
        `;
        // insert into the html
        expensesList.appendChild(li);
    }
    //Substract expense amount from budget
    trackBudget(amount){
        const budgetLeftDollars = budget.substractFromBudget(amount);
        budgetLeft.innerHTML = `${budgetLeftDollars}
        `;

        /// check when 50% is spent
        if( (budget.budget / 4) > budgetLeftDollars ){
            budgetLeft.parentElement.parentElement.classList.remove('alert-success','alert-warning');
            budgetLeft.parentElement.parentElement.classList.add('alert-danger');
        }else if((budget.budget / 2) > budgetLeftDollars ){
            budgetLeft.parentElement.parentElement.classList.remove('alert-success');
            budgetLeft.parentElement.parentElement.classList.add('alert-warning');
        }
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

        const expenseName = document.querySelector('#expense').value ;
        const amount = document.querySelector('#amount').value;

        if(expenseName === '' || amount ===''){
            html.printMessage('There was error, all the fields are mandatory','alert-danger');
        }else{
            //Add the expenses to the list
            html.addExpenseToList(expenseName, amount);
            html.trackBudget(amount);
            
        }
    })

}