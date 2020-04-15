

//EventListener in Javascript
/*
const clearCartBtn = document.getElementById('clear-cart');


clearCartBtn.addEventListener('click', clearBtnFunction);


function clearBtnFunction(event){
    //target
    let element;
    element = event;

    //read the targe

    element = event.target;
    element = event.target.id;
    element = event.target.className;
    element = event.target.innerText;
    element = event.target.innerText = 2+2;



    console.log(element);
    
    
}
*/

//MouseEvent
/*
const heading = document.querySelector('#heading');
const links = document.querySelector('nav');
const clearCartBtn = document.querySelector('#clear-cart');

//click Mouse Event

//clearCartBtn.addEventListener('click',printEvent);
// clearCartBtn.addEventListener('dblclick',printEvent);
// clearCartBtn.addEventListener('mouseenter',printEvent);
// clearCartBtn.addEventListener('mouseleave',printEvent);
// clearCartBtn.addEventListener('mouseover',printEvent);
clearCartBtn.addEventListener('mouseleave',printEvent);
function printEvent(e){
    console.log(`The Event is ${e.type}`);
    
}

*/
/*
const searchForm = document.getElementById('search'),
      searchInput = document.getElementById('search-course');


//Events for Form

// searchForm.addEventListener('submit', printEvent);
// searchInput.addEventListener('keydown', printEvent);
// searchInput.addEventListener('keyup', printEvent);
// searchInput.addEventListener('focus', printEvent);
searchInput.addEventListener('cut', printEvent);
function printEvent(e){
    // e.preventDefault();
    console.log(searchInput.value);
    console.log(`Type: ${e.type}`);
    
}

*/
//Stoppropagation
/*
const card = document.querySelector('.card'),
     inforCards = document.querySelector('.info-card'),
     addCardBtn = document.querySelector('.add-to-cart');





card.addEventListener('click', function(e){
    console.log('you clicked the card');
    e.stopPropagation();
    
});
inforCards.addEventListener('click', function(e){
    console.log('you clicked the Infocard');
    e.stopPropagation();
    
});
addCardBtn.addEventListener('click', function(e){
    console.log('you clicked the add to btn');
    e.stopPropagation();
    
});
*/

/*

const shoppingCart = document.querySelector('#shopping-cart');

function removeProductFromCart(e){
    // console.log(e.target.classList);
    if(e.target.classList.contains('remove')){
         
         e.target.parentElement.parentElement.remove();
         
    }else{
        
    }
    
}
*/

/*
const courseList = document.querySelector('#courses-list');

courseList.addEventListener('click', addToCart);
    
function addToCart(e){
    if(e.target.classList.contains('add-to-cart')){
        
        
    }
}
*/     