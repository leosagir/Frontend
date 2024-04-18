/**Задание 1
По аналогии с занятием создайте программу todo list - список дел. 
Чтобы можно было добавить новое дело(задание). 
И чтобы можно было отметить задание как выполненное - перечеркнуть его. */


const formElement = document.getElementById("form");
const listElement = document.getElementById("note-list");
const clearBtnElement = document.getElementById("clear");
const clearOneBtnElement = document.getElementById("clear-one")

const notes = [];

const clearList = function(){
    while (listElement.hasChildNodes()){ 
        listElement.firstChild.remove();
}
};
const clearOne = function(){
    if(listElement.hasChildNodes()){
        listElement.firstChild.remove()
    }
};
function clearInputs(event){
    event.target.note.value = "";
}

function changeStatus(event){
    if(event.target.style.textDecoration === "line-through"){
        event.target.style.textDecoration ="none"
    }else{
        event.target.style.textDecoration = "line-through"
    }
}
clearBtnElement.addEventListener('click',clearList);
clearOneBtnElement.addEventListener('click',clearOne);

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = { name: event.target.note.value };
    notes.push(note);
    const liElement = document.createElement("li");
    liElement.textContent = note.name; 
    liElement.onclick = changeStatus;
    listElement.append(liElement);
    clearInputs(event);
});