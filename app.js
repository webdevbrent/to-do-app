function onReady(){
  // Array to hold To-Do's
  let toDos = [];

  // Set DOM elements
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  // Function to update Array of To-Do's
  function createNewToDo(){
    if (!newToDoText.value){ return; }
    // Add the new to-do to the toDos Array
    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';

    renderTheUI();
  }

  // Function to display the current state of the toDos Array
  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });


  }


  // Add Event Listener to the form
  // When form is submitted the createNewToDo function is executed
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    // Clear the value
    newToDoText.value = '';
  });

  // Execute the renderTheUI Function
  renderTheUI();

}

window.onload = function(){
  console.log("The window has loaded!");
  onReady();
};
