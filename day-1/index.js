// const todoInput = document.getElementById("todoInput");
// const addButton = document.getElementById("addBtn");
// const todoList = document.getElementById("todoList");

// let list = JSON.parse(localStorage.getItem("todos")) || [];

// function saveTodos() {
//     localStorage.setItem("todos", JSON.stringify(list));
// }
// //Add todo

// function addTodo(){
//     const text=todoInput.value.trim();

//     if(text === ""){
//         alert("Text field is missing");
//         return
//     }

//     const todo={
//         id:Date.now(),
//         text:text,
//         completed: false
//     }

//     list.push(todo);
//     todoInput.value="";
//     saveTodos();
//     renderTodo();
// }

// function getFilteredTodos() {
//     if (currentFilter === "active") return list.filter(t => !t.completed);
//     if (currentFilter === "completed") return list.filter(t => t.completed);
//     return list;
// }

// function renderTodo(){
//     todoList.innerHTML="";

//     list.forEach( (todo)=>{
//         const li = document.createElement("li");

//         li.textContent=todo.text;

//         if(todo.completed){
//             li.style.textDecoration = "line-through";
//             li.style.opacity = "0.6";
//         }

//         li.addEventListener("click", ()=>toggleComplete(todo.id))

//         const deleteBtn = document.createElement("button");
//         deleteBtn.textContent="Delete";
//         deleteBtn.addEventListener("click", (e)=>{
//             e.stopPropagation();
//             deleteTodo(todo.id)
//         })

//         console.log(li.textContent)

//         const editBtn = document.createElement("button");
//         editBtn.textContent="Delete";
//         editBtn.addEventListener("click", ()=>{
            
//         })


//         li.appendChild(deleteBtn);

//         todoList.appendChild(li);
//     })
// }

// function deleteTodo(id){
//     list = list.filter((todo)=>todo.id !== id);
//     renderTodo()
// }

// // Toggle completed state
// function toggleComplete(id){
//     list = list.map( (todo) =>
//         todo.id===id ? {...todo, completed:!todo.completed} :todo
//     )
//     renderTodo()
// }


// // Event listeners
// addButton.addEventListener("click", addTodo);

// todoInput.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//         addTodo();
//     }
// });

const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let list = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all"; // "all" | "active" | "completed"

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(list));
}

function addTodo() {
    const text = todoInput.value.trim();

    if (text === "") {
        alert("Text field is missing");
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    list.push(todo);
    todoInput.value = "";
    saveTodos();
    renderTodo();
}

function getFilteredTodos() {
    if (currentFilter === "active") return list.filter(t => !t.completed);
    if (currentFilter === "completed") return list.filter(t => t.completed);
    return list;
}

function renderTodo() {
    todoList.innerHTML = "";

    getFilteredTodos().forEach((todo) => {
        const li = document.createElement("li");

        // Text span instead of raw li.textContent, so it can go contentEditable
        const textSpan = document.createElement("span");
        textSpan.textContent = todo.text;

        if (todo.completed) {
            textSpan.style.textDecoration = "line-through";
            textSpan.style.opacity = "0.6";
        }

        textSpan.addEventListener("click", () => toggleComplete(todo.id));

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            deleteTodo(todo.id);
        });

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            startEdit(textSpan, todo.id);
        });
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.addEventListener("change", () => toggleComplete(todo.id));

        li.appendChild(checkbox);
        li.appendChild(textSpan);

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });
}

function startEdit(span, id) {
    span.contentEditable = "true";
    span.style.textDecoration = "none"; // easier to edit without strikethrough
    span.focus();

    // put cursor at the end
    const range = document.createRange();
    range.selectNodeContents(span);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    function finishEdit() {
        span.contentEditable = "false";
        const newText = span.textContent.trim();
        editTodo(id, newText);
        span.removeEventListener("blur", finishEdit);
        span.removeEventListener("keydown", onKeyDown);
    }

    function onKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            span.blur(); // triggers finishEdit
        }
        if (e.key === "Escape") {
            span.textContent = list.find(t => t.id === id).text; // revert
            span.blur();
        }
    }

    span.addEventListener("blur", finishEdit);
    span.addEventListener("keydown", onKeyDown);
}

function editTodo(id, newText) {
    if (newText === "") {
        deleteTodo(id); // or choose to just revert instead
        return;
    }
    list = list.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
    );
    saveTodos();
    renderTodo();
}

function deleteTodo(id) {
    list = list.filter((todo) => todo.id !== id);
    saveTodos();
    renderTodo();
}

function toggleComplete(id) {
    list = list.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos();
    renderTodo();
}

function setFilter(filter) {
    currentFilter = filter;
    renderTodo();
}

// Event listeners
addButton.addEventListener("click", addTodo);

todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});

// Wire up filter buttons if present in HTML, e.g.:
// <button data-filter="all">All</button>
// <button data-filter="active">Active</button>
// <button data-filter="completed">Completed</button>
document.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => setFilter(btn.dataset.filter));
});

renderTodo();