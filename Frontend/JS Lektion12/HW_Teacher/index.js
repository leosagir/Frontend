const formElement = document.getElementById("todo-form");
const listElement = document.getElementById("todo-list");

const tasks = [];

const addTask = (event)=>{
    event.preventDefault();
// event.target             - эта вся форма
// event.target.title       - это инпут <input type="text" placeholder="title" name="title">
// event.target.title.value - это что пользователь ввел в инпут

const title = event.target.title.value;
const description = event.target.description.value;

//Очищаем поля
event.target.title.value ="";
event.target.description.value = "";
//Добавляем в массив новый task
tasks.push({title,description,done:false})
console.log(tasks);
//отображаем в html code
renderTasks();
};
function renderTasks(){
//очистим ul от всего 
while(listElement.hasChildNodes()){
    listElement.firstChild.remove();
}
//Добавим детей
tasks.forEach((task)=>{
    const li = document.createElement("li");
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.checked = task.done // этот атрибут отвечает за то отжата галочка  внутри квадрата  . true есть
    checkbox.onclick = ()=>{
    //меняем статус на противоположный
    task.done = !task.done
};
li.append(checkbox)
const textNode = document.createTextNode(
`${task.title} ${task.description}`);

li.append(textNode)
listElement.append(li)
});
}
formElement.addEventListener("submit", addTask)