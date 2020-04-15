//Variable
const tweetList = document.getElementById('tweet-list');
//Event Listener
eventListener();
function eventListener (){
    document.querySelector('#form').addEventListener('submit', newTweet);
    //Remove tweet from the list
    tweetList.addEventListener('click',removeTweet);
    //Document
    document.addEventListener('DOMContentLoaded', localStorageOnload);
}
//Functions
function newTweet(e){
    e.preventDefault();
    //Read the textarea value
    const tweet = document.getElementById('tweet').value;
    //Create the remove button

    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    //create list
    const li = document.createElement('li');
    li.textContent = tweet;
    tweetList.appendChild(li);


    //Add the remove button to each tweet
    li.appendChild(removeBtn);

    //Add to the list
    tweetList.appendChild(li);
    //Add to local storage
    addTweetLocalStorage(tweet);
    
}

//Remove tweet from the dom

function removeTweet(e)
{
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove();
        
    }
    //Remove From storage
    removeTweetLocalStorage(e.target.parentElement.textContent);
    
}

//Adds the tweet into local storage

function addTweetLocalStorage(tweet){
  let tweets = getTweetFromStorage();
  //Add the tweet into the array
  tweets.push(tweet)
  //convert tweet array into string
  localStorage.setItem('tweets', JSON.stringify(tweets))
  
}

function getTweetFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    //Get the values, if null is returned then we create an empty array
    if(tweetsLS === null){
        tweets = [];
    }else{
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}

//Prints local storage tweets on load

function localStorageOnload(){
    let tweets = getTweetFromStorage();

    //loop through storage and then print the value
    tweets.forEach(function(tweet){
        //Create the remove button

    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    //create list
    const li = document.createElement('li');
    li.textContent = tweet;
    //Add the remove button to each tweet
    li.appendChild(removeBtn);
    //Add to the list
    tweetList.appendChild(li);
    });
}



//Remove the tweet from the local storge

function removeTweetLocalStorage(tweet){
    let tweets = getTweetFromStorage();
    console.log(tweets);
    
    //Remove X from the tweet
    const tweetDelete = tweet.substring(0, tweet.length -1);
    // Loop through the tweet and remove the tweet that is equal
    tweets.forEach(function(tweetLS, index){
        if(tweetDelete === tweetLS){
            tweets.splice(index, 1);
            
        }
        //
        console.log(tweets);
        

    })
    
}