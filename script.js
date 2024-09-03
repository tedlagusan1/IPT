document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.style.marginRight = '5px'; 
        editBtn.addEventListener('click', function() {
            const newTaskText = prompt('Edit your task:', taskSpan.textContent);
            if (newTaskText !== null && newTaskText.trim() !== "") {
                taskSpan.textContent = newTaskText.trim();
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(taskSpan);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        document.getElementById('taskList').appendChild(li);
        taskInput.value = "";
    }
});
