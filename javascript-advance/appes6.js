//create class
class Client {
    //to the constructor
    constructor(name, balance){
        this.name = name;
        this.balance = balance;

    }
    membership(){
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
    clientInfo(){
        return `Name: ${this.name}, Balance: ${this.balance}
    , Memebership:${this.membership()}`
    }
    getBalance(){
        return this.balance;
    }
    //static methode does not require instantiation
    static welcome() {
        return 'welcome to es6';
    }
}


//Business class


class Business extends Client {
     constructor (name,balance, phone, category){
         //access the parent constructor
         super(name,balance);
         this.phone = phone;
         this.category = category;
     }
     clientInfo(){
        return `Name: ${this.name}, Balance: ${this.balance}
        , Memebership:${this.membership()}, phone:${this.phone}, Category: ${this.category}`
     }
     static welcome() {
        return 'welcome to Business';
    }
}


// instantiating the subclass
const business = new Business('Business Name', 1000, 1231335,'Real state');
console.log(business);

console.log(business.clientInfo());
console.log(Business.welcome());
console.log(Client.welcome());

console.log(business.getBalance());











