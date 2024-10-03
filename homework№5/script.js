const tasks = [];

function addTask(name) {
  if (name == "") {
    console.log("Имя задачи не может быть пустым!");
    return;
  }

  const newTask = {
    name: name,
    completed: false
  };

  tasks.push(newTask);
  console.log(`Задача "${name}" добавлена!`);
}

function completedTask(name) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].name == name) {
      tasks[i].completed = true;
      console.log(`Задача "${name}" отмечена как выполненная`);
      return;
    }
  }
  console.log(`Задача "${name}" не найдена`);
}

function deleteTask(name) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].name == name) {
      tasks.splice(i, 1);
      console.log(`Задача "${name}" удалена`);
      return;
    }
  }
  console.log(`Задача "${name}" не найдена`);
}

function showTasks() {
  if (tasks.length === 0) {
    console.log("Список задач пуст");
    return;
  }

  for (let i = 0; i < tasks.length; i++) {
    const status = tasks[i].completed ? "выполнена" : "не выполнена";
    console.log(`Задача "${tasks[i].name}", статус: ${status}`);
  }
}

addTask("Купить продукты.");
addTask("Выучить JS.");
addTask("Сделать ДЗ.");
showTasks();

completedTask("Купить продукты.");
deleteTask("Сделать ДЗ.");
showTasks();

