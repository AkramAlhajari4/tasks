function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("الرجاء إدخال نص المهمة");
        return;
    }

    var taskList = document.getElementById("taskList");

    var taskCard = document.createElement("div");
    taskCard.className = "task-card";

    var taskTextElement = document.createElement("div");
    taskTextElement.textContent = taskText;

    var updateButton = document.createElement("button");
    updateButton.textContent = "تعديل";
    updateButton.onclick = function () {
        var updatedText = prompt("قم بتعديل المهمة", taskText);
        if (updatedText !== null) {
            taskTextElement.textContent = updatedText;
        }
    };

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "حذف";
    deleteButton.onclick = function () {
        taskList.removeChild(taskCard);
    };

    taskCard.appendChild(taskTextElement);
    taskCard.appendChild(updateButton);
    taskCard.appendChild(deleteButton);

    taskList.appendChild(taskCard);

    taskInput.value = "";
}