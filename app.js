// app.js
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
  
    // Ajouter une tâche
    addTaskButton.addEventListener("click", () => {
      const task = taskInput.value.trim();
      if (task) {
        const li = document.createElement("li");
  
        // Créer une case à cocher
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
          if (checkbox.checked) {
            taskText.style.textDecoration = "line-through";
            taskText.style.color = "#00d4ff";
          } else {
            taskText.style.textDecoration = "none";
            taskText.style.color = "";
          }
        });
  
        // Texte de la tâche
        const taskText = document.createElement("span");
        taskText.textContent = task;
  
        // Bouton pour modifier la tâche
        const editButton = document.createElement("button");
        editButton.innerHTML = `<i class="fas fa-edit"></i>`;
        editButton.addEventListener("click", () => {
          // Permettre à l'utilisateur de modifier la tâche
          const newTask = prompt("Modifier la tâche", taskText.textContent);
          if (newTask !== null && newTask.trim() !== "") {
            taskText.textContent = newTask;
          }
        });
  
        // Bouton pour supprimer la tâche
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
        deleteButton.addEventListener("click", () => {
          taskList.removeChild(li);
        });
  
        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
  
        // Réinitialiser l'entrée
        taskInput.value = "";
      }
    });
  
    // Ajout via la touche "Entrée"
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTaskButton.click();
      }
    });
  });