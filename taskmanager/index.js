//Select all Element By ID
function getValue() {
  //Selecting the element
  var txtValue = document.getElementById("txt").value; //it take the value of input field
  var listTask = document.createTextNode(txtValue); //it creates a text node
  //get the value fo num input field
  var numValue = document.getElementById("num").value;
  var secondValue = document.createTextNode(numValue);
  ///Select the radio button and inputHour
  ///Create Elements
  var newList = document.createElement("li"); //create a list node
  var buttonItem = document.createElement("input"); //create a button node
  var timeSecond = document.createElement("p");
  buttonItem.type = "button"; //it defines the type of input field , that its type butt
  buttonItem.value = "Delete"; //it define the value of the button
  //append li and button to the node
  newList.append(listTask); //add task to to the list
  timeSecond.append(secondValue);
  newList.append(timeSecond);
  newList.append(buttonItem);

  //add button to the list
  //append li and button to the unorder list
  document.getElementById("taskList").appendChild(newList);
  //add an event listener to the button delete
  buttonItem.addEventListener("click", function() {
    newList.remove();
  });
  //set the an interval to the time
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
} //end of getvalue funciton
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
function addTask() {
  //get the value of input field
  var txtValue = document.getElementById("txt").value;
  var listTask = document.createTextNode(txtValue);

  //get the value hour field
  var hourValue = document.getElementById("timehour").value;
  var hourValueInput = document.createTextNode(hourValue);
  //create Element
  var newList = document.createElement("li"); //create a list node
  var buttonItem = document.createElement("input"); //create a button node
  var timeHour = document.createElement("p");
  buttonItem.type = "button"; //it defines the type of input field , that its type butt
  buttonItem.value = "Delete";

  //append to the list
  newList.append(listTask);
  timeHour.append(hourValueInput);
  newList.append(timeHour);
  newList.append(buttonItem);
  //add list to unorder list
  document.getElementById("taskList").appendChild(newList);
  // Delete button click event
  buttonItem.addEventListener("click", function() {
    newList.remove();
  });

//this is the end of gethour

} 
//end of the getHour Function
function showNotification() {
  var txtValue = document.getElementById("txt").value;
  const notification = new Notification(`${txtValue}`, {
    body: "Hey, continue with the next task",
    icon: "done.jpg"
  });
}
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
  if (document.getElementById("hour").checked == true) {
    // timers[currentTimerIndex] = getTimerObject();
    addTask();

    checkEverySecond = setInterval(() => {
      verifyTime();
    }, 1000);
    // timers[currentTimerIndex].id = checkEverySecond;
  } else {
    getValue();
  }

}



