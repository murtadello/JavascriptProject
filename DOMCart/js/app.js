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
// const links  = document.getElementById('#primary').getElementsByClassName('link');
// console.log(links);




///getElementByTagName


// const images = document.getElementsByTagName('img');

// imagesArray = Array.from(images);

// imagesArray.forEach(function (image) {
//     console.log(image);
    
// });




// const cards = document.querySelectorAll('.card h4');

// const coursesArray = Array.from(cards)

// coursesArray.forEach(function (course){
//     console.log(course.textContent);
    
// })




/*
 const oddLinks = document.querySelectorAll('#primary a:nth-child(odd)');


 oddLinks.forEach(function(odd){
     odd.style.backgroundColor = "#EF476F";
     odd.style.color = "#000"
     
 });


 const evenLinks = document.querySelectorAll('#primary a:nth-child(even)');


 evenLinks.forEach(function(even){
     even.style.backgroundColor = "blue"
     even.style.color = "black"
 })

*/

//change the add to cart button
/*
const addCartBtns = document.querySelectorAll('.add-to-cart');

addCartBtns.forEach(function(button){
    button.textContent = 'Something New'
})
console.log(addCartBtns);



const price = document.querySelectorAll('.u-pull-right');


price.forEach(function(price){
    price.textContent = '200$'
})


*/


/// Traversing 
/*
const coursesList = document.querySelector('#courses-list');
let element;


element = coursesList.children[1].children[1].children[0].children[1].lastElementChild;
element = coursesList.children[1].children[1].children[0].children[1].firstElementChild;

//1 = Element
// 2 = Attribute
// 3 = Text Node
// 8 = comment
// 9 = document
// 10 = doctype
console.log(element);


*/

//Traversing from the child to parent

// const carBtn = document.querySelector('.add-to-cart');
// let element;
//Parent Node
// element = carBtn;
// element = carBtn.parentNode;
// element = carBtn.parentElement.parentElement.children;




///Sibling Node

// element = carBtn.parentNode;
// element = carBtn.previousElementSibling;
// console.log(element);


//Next Sibling

// element = carBtn;

// console.log(element.nextElementSibling);

//creating Element
/*
const newLink = document.createElement('a');

newLink.className = 'link';
newLink.href = '#';

newLink.appendChild(document.createTextNode('New Link'));

document.querySelector('#primary').appendChild(newLink);

*/
/*
const newHeading = document.createElement('h2');
newHeading.id ='heading';

newHeading.appendChild(document.createTextNode('The Best courses'));

const oldHeading = document.querySelector('#heading');


const coursesList= document.querySelector('#courses-list');

coursesList.replaceChild(newHeading, oldHeading);


console.log(newHeading);
*/

/*

const cards = document.querySelectorAll('.card');
cards[11].remove();
console.log(cards);



const navigation = document.querySelector('#primary');
const links = document.querySelectorAll('#primary .link');


navigation.removeChild(links[4]);
console.log(links);

console.log(navigation);
*/


const links = document.querySelector('.link');



let element = links;
element= links.className;

element = links.classList;
console.log(element);
