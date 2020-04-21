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
    this.membership = function(){
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


const person = new Client('Murtaza', 1000);

const person2 = new Client('Fatima', 2000);


console.log(person);
console.log(person.membership());

console.log(person2);
console.log(person2.name);
console.log(person2.balance);
console.log(person.name);

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

const number1 = 80;
const number2 = new Number(20);

console.log(number1);
console.log(number2);


console.log(number2[0]);




