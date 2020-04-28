// Instantiating the class
const form = document.getElementById('request-quote');
const html = new HTMLUI();

//Event listeners
eventListener();
function eventListener(){
    document.addEventListener('DOMContentLoaded', function(){
        //create the option for the year
        
        html.displayYears();
    });
    //when the form is submitted
    form.addEventListener('submit', function(e){
        e.preventDefault();
        // Read the values from the form
        const make = document.getElementById('make').value;
        const year = document.getElementById('year').value;
        //read the radio buttons
        const level = document.querySelector('input[name ="level"]:checked').value;
        //check that all the fields have something
        if(make === '' || year ==='' || level === ''){
            html.displayError('All the fields are mandetory');
            
        }else{
            // clear the previous quote


            const prevResult = document.querySelector('#result div');
            if(prevResult != null){
                prevResult.remove();
            }
            // Make the quotation 
            const insurance = new Insurance(make, year, level);
            const price = insurance.calculateQuotation(insurance);
            

            // print the result from HTMLUI
            html.showResult(price,insurance);
            
        }
    });
    
}






// objects

//Everything related to the quotation and calculation is Insurance
function Insurance(make, year, level){
    this.make = make;
    this.year = year;
    this.level = level;

}
//calculate the price for the current quotation
Insurance.prototype.calculateQuotation = function(insurance){
    let price;
    const base = 2000;


    //get get the make
    const make = insurance.make;
    /*
        1= American 15%
        2 = Asian 0.5%
        3 = European 35%



    */
   switch(make){
       case '1':
           price = base* 1.15;
           break;
        case '2':
           price = base* 1.05;
           break;
        case '3':
            price = base* 1.35;
            break;
   }
   // get the year
   const year = insurance.year;
   //get the years difference
   const difference = this.getYearDifference(year);
   

   // Each year the cost of the price is going to be 3% cheaper
   price = price - ((difference *3)* price)/100;
   
   //check the level of protection
   const level = insurance.level;

   
   price = this.calculateLevel(price, level);
   
   return price;

   
   
    
}

// Returns the differnce between years
Insurance.prototype.getYearDifference = function(year){
    return new Date().getFullYear()- year;
}
//Adds the value based on the level of protection
Insurance.prototype.calculateLevel = function(price, level){
    /*
    Basic insurance is going to increase the vlaue by 30%
    complet insurane is going to increase the value by 50%
    
    */
   if(level === 'basic'){
       price = price *1.30;
   }else{
       price = price * 1.50;
   }
   return price;
   
}
//everything related to the HTML
function HTMLUI(){}


//Display the latest 20 years in the selct

HTMLUI.prototype.displayYears = function(){
    //Max and minimum years
    const max = new Date().getFullYear(),
          min = max-20;
    //Generate the list with the latest 20 years
    const selectYears = document.getElementById('year');//select menu
    for(let i = max; i> min; i--){
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYears.appendChild(option); 
    }   
}
/// print and error

HTMLUI.prototype.displayError = function(message){
    //create a div
    const div = document.createElement('div');
    div.classList = 'error';
    //  insert the message
    div.innerHTML = `
    <p>${message}</p>
    
    `;
    form.insertBefore(div, document.querySelector('.form-group'));
    // Remove the error
    setTimeout(() => {
        document.querySelector('.error').remove();
    }, 3000);
}
//print the result into the HTML

HTMLUI.prototype.showResult = function(price, insurance){
    //print the result
    const result = document.getElementById('result');

    //create a div with the result
    const div = document.createElement('div');
    
    // Get Make from the object and assign a readab le fname
    let make = insurance.make;
    switch(make){
        case '1':
            make = 'American';
            break;
        case '2':
            make = 'Asian';
            break;
        case '3':
            make = 'European';
            break;
    }
    
    
    
    //Insert the result
    div.innerHTML =`
    <p class = "header">Summary</p>
    <p>Make: ${make}</p>
    <p>Year: ${insurance.year} </p>
    <p>Level: ${insurance.level}</p>
    <p class = "total">Total : ${price} </p>
    `;
    const spinner = document.querySelector('#loading img');
    spinner.style.display = 'block';
    setTimeout(() => {
        spinner.style.display = 'none';
        result.appendChild(div);
    }, 3000);
    

}



