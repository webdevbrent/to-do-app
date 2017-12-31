function onReady(){
  // Array to hold To-Do's
  let toDos = [];
  let id = 0;

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
      complete: false,
      id: id
    });

    newToDoText.value = '';
    id++;
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

      checkbox.addEventListener('click', event => {
        if (checkbox.checked){
          toDos.complete = true;
        }else {
          toDos.complete = false;
        }

        console.log(toDos.complete);
      });

      const delButton = document.createElement('button');
      delButton.innerText = "Delete";

      delButton.addEventListener('click', () => {
        deleteToDo(toDo.id);
        renderTheUI();
      });

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(delButton);
    });

    function deleteToDo(id){
      toDos = toDos.filter(item => item.id !== id);
    }

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
