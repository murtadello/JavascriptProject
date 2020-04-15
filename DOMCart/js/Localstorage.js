//Local Storage


/// Add to local storage

// localStorage.setItem('name', 'Murtaza');
//remove from the storage
// localStorage.removeItem('name');
//read the value
// const name = localStorage.getItem('name');


//clear the storage

// localStorage.clear();

// localStorage.setItem('name','Murtaza');

// localStorage.setItem('name','Walter white');


const localStorageContent = localStorage.getItem('names');


let names;

if(localStorageContent === null){
    names = [];
}else{
    names = JSON.parse(localStorageContent);
}

names.push('Farida');

localStorage.setItem('names', JSON.stringify(names));


