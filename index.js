document.addEventListener('DOMContentLoaded', function() {
  const listExercise = document.getElementById("list-task");
  listExercise.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") { 
      event.target.parentNode.remove() 
    }
  });
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) { 
    event.preventDefault() 
    const input = event.target.querySelector('input')
    const newExercise = document.createElement("li");
    const removeButton = document.createElement('button')
    removeButton.textContent = 'remove exercise';
    removeButton.classList.add('remove'); 
    removeButton.style.marginLeft = '30px';
    newExercise.textContent = input.value;
    newExercise.appendChild(removeButton);
    listExercise.appendChild(newExercise);
    input.value = "";
  });
});

