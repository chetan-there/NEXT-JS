
    // Add new task
    function addTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();

      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      // Create new list item (li)
      const li = document.createElement("li");
      li.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;

      // Append the li to the UL
      document.getElementById("taskList").appendChild(li);

      // Clear input
      input.value = "";
    }

    // Delete a specific task
    function deleteTask(button) {
      const li = button.parentElement;
      li.parentElement.removeChild(li);
    }