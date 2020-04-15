function addTask(){
  var txtValue = document.getElementById("txt").value; //it take the value of input field
  var listTask = document.createTextNode(txtValue);

  var numValue = document.getElementById("num").value;
  var secondValue = document.createTextNode(numValue);

  var hourValue = document.getElementById("timehour").value;
  var hourValueInput = document.createTextNode(hourValue);

  var newList = document.createElement("li"); //create a list node
  var buttonItem = document.createElement("input"); //create a button node
  var timeSecond = document.createElement("p");
  buttonItem.type = "button"; //it defines the type of input field , that its type butt
  buttonItem.value = "Delete"; 
  newList.append(listTask);
   //add task to to the list
  if(numValue.checked){
    timeSecond.append(secondValue);
  }else{
    timeSecond.append(hourValueInput);
  }
  newList.append(timeSecond);
  newList.append(buttonItem)
  //append li and button to the unorder list
  document.getElementById("taskList").appendChild(newList);
  eventListenerDeleteButton();
}
//Set counter for the Second 
var countTimer = setInterval(function() {
  numValue--;
  if (numValue <= 0) {
    timeSecond.innerHTML = "Finished";
    if (numValue == 0) {
      showNotification();
      timeSecond.style.color ="yellow";
      newList.style.backgroundColor ="#3772ff";
      newList.style.borderRadius = "5px";
      newList.style.padding = "5px";
    }
  } else {
    timeSecond.innerHTML = numValue + " seconds remaining";
  }

}, 1000);

//EventListener Function For button Delete
function eventListenerDeleteButton(){
  buttonItem.addEventListener('click', function(){
    newList.remove();
  })
}
window.addEventListener(
  "keypress",
  function(e) {
    if (e.keyCode == 13) {
      getValue();
    }
  },
  false
);
//Enter keypressed function
document.getElementById("timehour").disabled = true;
// to disable the unselected field
function seccheck() {
  if ((document.getElementById("sec").checked = true)) {
    document.getElementById("timehour").disabled = true;
    document.getElementById("num").disabled = false;
  }
}
function hourcheck() {
  if ((document.getElementById("hour").checked = true)) {
    document.getElementById("num").disabled = true;
    document.getElementById("timehour").disabled = false;
  }
}
///Function for Hour input field

//end of the getHour Function
function showNotification() {
  var txtValue = document.getElementById("txt").value;
  const notification = new Notification(`${txtValue}`, {
    body: "Hey, continue with the next task",
    icon: "done.jpg"
  });
}
//Function For checking the time of the task with current time
function verifyTime(){
  var hourValue = document.getElementById("timehour").value;
  const hourTime = new Date();
  hourTime.setHours(hourValue.split(':')[0]); // 12
  hourTime.setMinutes(hourValue.split(':')[1]); //30
  hourTime.setSeconds(0);
  const now = new Date();
  const currentTime = now.getTime();
  if(hourTime < currentTime){
    showNotification();
    clearInterval(checkEverySecond);
    console.log('Show Notification ');
  }else{
    console.log('Dont show any notifiaction');
  }
}
function finalTime() {
  addTask();
    checkEverySecond = setInterval(() => {
      verifyTime();
    }, 1000);
    // timers[currentTimerIndex].id = checkEverySecond;
}



