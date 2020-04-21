//Variabels
const courses = document.querySelector('#courses-list'),
      shoppingCartContent = document.querySelector('#cart-content tbody'),
      clearCartBtn = document.querySelector('#clear-cart');  

//Listeners
loadEventListeners();
function loadEventListeners(){
    //when a new course is added
    courses.addEventListener('click', buyCourse);
    //when a the remove button is clicked
    shoppingCartContent.addEventListener('click',removeCourse);
    //clear Cart Btn
    clearCartBtn.addEventListener('click', clearCart);
    //Document Ready
    document.addEventListener('DOMContentLoaded', getFromLocalStorage);
}
//Functions

function buyCourse(e){
    e.preventDefault();
    //use delegationn to find the course that was added
    if(e.target.classList.contains('add-to-cart')){
        
        const course = e.target.parentElement.parentElement;
        //read the value
        getCourseInfo(course);
        
    }
    
}

//Read the HTML information of the selected course

function getCourseInfo(course){
    const courseInfo = {
        image:course.querySelector('img').src,
        title:course.querySelector('h4'),
        price:course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')

    }
    addIntoCart(courseInfo);
}

function addIntoCart(course){
    //Create a <tr>
    const row = document.createElement('tr');

    row.innerHTML = `
    <tr>
        <td>
            <img src="${course.image}" width = 100>

        </td>
        <td>${course.title}</td>
        <td>${course.price}</td>
        <td>
            <a href ="#" class ="remove" data-id ="${course.id}">X</a>

        </td>
    </tr>
    
    `;
    //Add into the shopping cart
    shoppingCartContent.appendChild(row);
    //Add course into Storage

    saveIntoStorage(course);
}
//Add the course into the local storage

function saveIntoStorage(course){
    let courses = getCourseFromStorage();
    //Add the course into the array
    courses.push(course);
    //since storage only saves string we need to convert JSON into string
    localStorage.setItem('courses', JSON.stringify(courses));

}
//Get the content from the storage

function getCourseFromStorage(){
    let courses;

    //if something exist on storage then we get the value, otherwise we create an empty arrar
    if(localStorage.getItem('courses') === null){
        courses = [];
    }else{
        courses = JSON.parse(localStorage.getItem('courses'));
    }
    return courses;

}


//Remove course from the dom

function removeCourse(e){
    let course, courseId;
    //remove from the dom
    if(e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove();
        course = e.target.parentElement.parentElement;
        courseId = course.querySelector('a').getAttribute('data-id');
    }
    console.log(courseId);
    //remove from the loacal storage
    removeCourseLocalStorage(courseId);

}
//remove form local storage
function removeCourseLocalStorage(id){
    //get the local storage data
    let coursesLS = getCourseFromStorage();
    //loop through the array and find the index to remov
    coursesLS.forEach(function(courseLS, index){
        if(courseLS.id === id){
            coursesLS.splice(index, 1);
        }
    });
    //Add the rest of the arary
    localStorage.setItem('courses', JSON.stringify(coursesLS))
    

}

//clear the shopping cart


function clearCart(e){
    while(shoppingCartContent.firstChild){
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }
    //clear from loaca storage
    clearLocalStorage();

}

// clear the whole local storage

function clearLocalStorage(){
    localStorage.clear();
}


//Load when document is ready and print the course into shopping cart

function getFromLocalStorage(){
    let coursesLS = getCourseFromStorage();

    coursesLS.forEach(function (course){
        const row = document.createElement('tr');

        //print the content
        row.innerHTML = `
        <tr>
            <td>
                <img src="${course.image}" width = 100>

            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td>
                <a href ="#" class ="remove" data-id ="${course.id}">X</a>

            </td>
        </tr>
    
        `;
        shoppingCartContent.appendChild(row);
    });
}