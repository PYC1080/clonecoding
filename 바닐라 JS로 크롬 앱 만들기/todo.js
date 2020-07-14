const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS="toDos";

let toDos=[];

function filterFn(toDo){
    return toDo.id === 1
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos))
}

function deleteTodo(){
    // console.log(event.target.parentNode)
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li)
    const cleanToDos = toDos.filter(function(toDo){
        console.log(toDo.id, parseInt(li.id));
        return toDo.id !== parseInt(li.id)
    })
    console.log(cleanToDos)
    toDos = cleanToDos
    saveToDos();
}

function paintTodo(text){
    // console.log(text);

    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span= document.createElement("span");
    const newId = toDos.length+1;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteTodo)
    span.innerText = text
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id=newId;
    toDoList.appendChild(li);
    const toDoObj={
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(e){
    e.preventDefault();
    const currentValue= toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedTodos = JSON.parse(loadedToDos)
        parsedTodos.forEach(function(toDo){
            paintTodo(toDo.text)
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();