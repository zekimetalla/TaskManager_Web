var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

fetch('https://localhost:7220/api/Task', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        
    },
})
.then(response => response.json())
.then(data => {
    // Handle the response data here
})
.catch(error => {
    // Handle errors here
});

// ---------------------------------
// ---------------------------------
const postData = {
  key1: 'value1',
  key2: 'value2'
};


function createTask() {
  // Capture task input from the input field
  const taskInput = document.getElementById("myInput").value;

  // Check if the input is empty
  if (taskInput.trim() === "") {
      alert("Please enter a task.");
      return;
  }

  const taskData = {
      title: taskInput,
      isComplete: false, 
  };

  
  fetch('https://localhost:7220/api/Task', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
  })
  .then(response => response.json())
  .then(data => {
      
      console.log('New Task:', data);

      
      document.getElementById("myInput").value = "";
  })
  .catch(error => {
      
      console.error('Error:', error);
  });
}