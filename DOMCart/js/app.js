// let element;


// element = document;
// element = document.all[200];

// element = document.head;
// element = document.URL;
// element = document.domain;
// element = document.characterSet;
// element = document.contentType;

// //link
// element = document.links;
// element = document.links[2];


// //ّForms

// element = document.forms;
// element = document.forms[0];
// element = document.forms[0].id;
// element = document.forms[0].action;
// element = document.forms[0].classList;
// element = document.forms[0].className;
// element = document.forms[0].classList[0]

// //Images

// element = document.images;

// //Scripts

// element = document.scripts;
// element = document.scripts[0].getAttribute('src');

// //Looping all the images

// let images = document.images;

// let imagesArray = Array.from(images);

// imagesArray.forEach(function (image){
//     console.log(image)
    
// });

// console.log(element);




//Selecting DOM Element
/*
let heading = document.getElementById('heading');


//Changing the content of css

heading.style.backgroundColor = "#EF476F";
heading.style.color = "#008148";
heading.style.padding = '20px';
heading.textContent = 'The best course';
//another way 

heading.innerText = 'New Heading';
*/


//Queryselector
/*
const learningHeading = document.querySelector('#learn');

let tagline = document.querySelector('.tagline');
tagline.style.backgroundColor ="#008148";
tagline.style.backgroundColor = "#EF476F";

*/


// let card = document.querySelector('.card');

// card.style.backgroundColor= "#EF476F"

/*
let heading = document.querySelector('h2');
heading.style.backgroundColor = "#EF476F";
heading.style.color = "black"
console.log(heading)

*/
//selecting inner 
//let image = document.querySelector('.card img');
/*
let link;
link = document.querySelector('#primary a:first-child');
link = document.querySelector('#primary a:last-child');
link = document.querySelector('#primary a:nth-child(3)');

link.style.backgroundColor= "#EF476F";
link.style.padding = "12px";
link.style.fontWeight ="bold";
console.log(link);


*/

/// getElementByClassName

// const links = document.getElementsByClassName('link');
// links[0].style.backgroundColor = "#EF476F";
// links[0].textContent = "To have a startup company"
// console.log(links[3]);



const links  = document.querySelector('#primary').getElementsByClassName('link');


console.log(links);










