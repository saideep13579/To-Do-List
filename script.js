document.addEventListener("DOMContentLoaded", () => {
    const taskContainer = document.getElementById('task-container');
    const addDateBtn = document.getElementById('add-date-btn');
    let dateCounter = 1;
  
    addDateBtn.addEventListener('click', () => {
      const newDateRow = document.createElement('div');
      newDateRow.classList.add('date-row');
      newDateRow.innerHTML = `<span class="date">Date ${dateCounter++}</span>`;
      
      const addTaskBtn = document.createElement('button');
      addTaskBtn.textContent = 'Add Task';
      addTaskBtn.classList.add('add-btn');
      addTaskBtn.onclick = () => addTask(newDateRow);
      newDateRow.appendChild(addTaskBtn);
      
      taskContainer.appendChild(newDateRow);
      repositionAddDateButton();
    });
  
    function addTask(dateRow) {
      const newTask = document.createElement('div');
      newTask.classList.add('info-box');
      newTask.textContent = 'Task';
      newTask.onclick = () => openTaskModal(newTask);
      dateRow.insertBefore(newTask, dateRow.lastChild);
      repositionAddTaskButton(dateRow);
    }
  
    function repositionAddDateButton() {
      const lastDateRow = taskContainer.lastElementChild;
      if (lastDateRow) {
        addDateBtn.style.position = 'absolute';
        addDateBtn.style.bottom = '-40px';
        addDateBtn.style.right = '10px';
        lastDateRow.appendChild(addDateBtn);
      }
    }
  
    function repositionAddTaskButton(dateRow) {
      const addTaskBtn = dateRow.querySelector('.add-btn');
      addTaskBtn.style.position = 'absolute';
      addTaskBtn.style.bottom = '-40px';
      addTaskBtn.style.right = '10px';
    }
  
    function openTaskModal(task) {
      const modal = document.getElementById('taskModal');
      modal.style.display = 'block';
      
      document.getElementById('saveTask').onclick = () => {
        const taskInputName = document.getElementById('taskInputName').value;
        const taskInputTime = document.getElementById('taskInputTime').value;
        task.textContent = `${taskInputName} (${taskInputTime})`;
        modal.style.display = 'none';
      };
    }
  
    document.querySelector('.close').onclick = () => {
      document.getElementById('taskModal').style.display = 'none';
    };
  });
  