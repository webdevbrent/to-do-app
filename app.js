function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;
    // create a new li
    let newLi = document.createElement('li');
    // create a new input
    let checkbox = document.createElement('input');
    // create a delete button for each input
    let delButton = document.createElement('button');
    // add text to Delete Button
    delButton.innerHTML = ('Delete');
    // delete button onclick method
    delButton.addEventListener('click', () =>{
      toDoList.removeChild(newLi);
    });

    // set the input's type to checkbox
    checkbox.type = "checkbox";
    checkbox.addEventListener('click', () =>{
        newLi.style.setProperty('text-decoration', 'line-through');
    });
    //set the title
    newLi.textContent = title;
    // attach the checkbox to the li
    newLi.appendChild(checkbox);
    newLi.appendChild(delButton);
    // attach the li to the ul
    toDoList.appendChild(newLi);
    // empty the input
    newToDoText.value = '';
  });
}

window.onload = function(){
  console.log("The window has loaded!");
  onReady();
};
