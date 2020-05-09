
// //Callbacks
// const cities = ['London','New York','Madrid','Paris','Berlin'];


// // Inline callbacks

// // cities.forEach(function(city){
// //     console.log(city);
    

// // });


// //callback with declaration
// function callback(city){
//     console.log(city);
    
// }
// cities.forEach(callback);


const countries = ['Afghanistan','England','Switzerland','Australia'];

function displayCountries(){
    setTimeout(function(){
        let html = '';
        countries.forEach(function(country){
            html += `<li> ${country}</li>`
        });
        document.body.innerHTML = html;

    },1000);
}
//call the funciton
displayCountries();