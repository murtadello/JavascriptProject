//Object Literals

/*
const client = {
    name: 'Murtaza',
    balance: 100,
    membership: function(){
        let name;
        if(this.balance >1000){
            name = 'Gold'
        }else if(this.balance > 500){
            name = 'Platinum'
        }else{
            name = 'Nomral'
        }
        return name;
    }

}

console.log(client);
console.log(client.name);
console.log(client.balance);
console.log(client.membership());

*/

//Object Constructor

/*
function Client(name, balance){
    this.name = name;
    this.balance = balance;
      
}
//Attach the prototype to the methode
Client.prototype.membership = function(){
    let name;
    if(this.balance >1000){
        name = 'Gold'
    }else if(this.balance > 500){
        name = 'Platinum'
    }else{
        name = 'Nomral'
    }
    return name;
    
}
//second prototype with the name and balance
Client.prototype.clientInfo = function(){
    return `Name: ${this.name}, Balance: ${this.balance}
    , Memebership:${this.membership()}`
}
//another methode to withdraw money from the accont
Client.prototype.withdraw = function(amount){
    this.balance -= amount;
}
//Create a deposit methode
Client.prototype.deposit = function(amount){
    this.balance += amount;
}
// Check the Balanace

Client.prototype.getBalance = function(){
    return this.balance;
}
const person = new Client('Murtaza', 1000);
const person2 = new Client('Fatima', 2000);



//Business
function Business(name, balance,phone, category){
    Client.call(this, name, balance);
    this.phone = phone;
    this.category = category;

}


//Inherite the prototype
Business.prototype = Object.create(Client.prototype);

// Create a business
const business = new Business('Udemy', 10000, 3132131,'Education');


console.log(business);
console.log(business.clientInfo());

*/




//Constructor for String
/*
const name1 = 'Murtaza';
const name2 = new String('Murtaza')
console.log(typeof name1);
console.log(typeof name2);
if(name1 === name2){
    console.log('Equal');
}else{
    console.log('Not equal');
}
*/

//Constructor for Numbers

// const number1 = 80;
// const number2 = new Number(20);

// console.log(number1);
// console.log(number2);


// console.log(number2[0]);

// const boolean1 = true;
// const boolean2 = new Boolean(false);
// console.log(boolean1);
// console.log(boolean2);
// if(boolean1 == boolean2){
//     console.log('Yes');
    
// }else{
//     console.log('No');
    
// }


//Function

// const function1 = function(a,b){
//     return a+b;

// }
// const function2 = new Function('a','b', 'return a+b');


// console.log(function1(2,5));
// console.log(function2(4,6));




///Prototype



/// Object Create


// const Client = {
//     getBalance: function(){
//         return `hello ${this.name} your balance is ${this.balance}`
//     },
//     withdraw: function(amount){
//         return this.balance -= amount;
//     }

// }


// // create a new Object and give a balance
// const mary = Object.create(Client);


// // Attach the properties


// mary.name = 'Maryam';
// mary.balance = 1000;


// console.log(mary);
// console.log(mary.getBalance());





