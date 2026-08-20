import { useState } from "react";
import './TodoList.css';
//set an empty state/list


function TodoList() {
    const [todos, setTodo] = useState([]);
    const [newTaskText, setNewTaskText] = useState("");

    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    function handleInputChange(event) {
        setNewTaskText(event.target.value);
    }
    //add each item to the list
    function addTodo(event) {
        event.preventDefault();//stop from reloading the text
        if (newTaskText.trim() !== "") { //ignore empty/whitespace-only input
            const newTodo = { id: Date.now(), text: newTaskText } //initializing newTodo
            setTodo(prevTodo => [...prevTodo, newTodo])// assigning value to list immutably
            setNewTaskText("");//clear input field
        }
    }

    function deleteTodoList(id) {
        const updatedTodo = todos.filter(todo => todo.id !== id)
        setTodo(updatedTodo)
    }

    function startEditing(todo) {
        setEditingId(todo.id)
        setEditText(todo.text)
    }

    function cancelEdit() {
        setEditingId(null);
        setEditText("");
    }

    function saveEdit(id) {
        if (editText.trim() !== "") {
            setTodo(prevTodo =>
                prevTodo.map(todo => todo.id === id ? { ...todo, text: editText } : todo
                )
            )
            setEditingId(null)
            setEditText("")
        }
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...todos];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTodo(updatedTasks);
        }
    }

    // function moveTaskDown(index) {
    //     if (index < todos.length) {
    //         const updatedTasks = [...todos];
    //         [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
    //         setTodo(updatedTasks);
    //     }
    // }

    function moveTaskDown(index) {
        if (index < todos.length - 1) {
            const updatedTasks = [...todos];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTodo(updatedTasks);
        }
    }


    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <form onSubmit={addTodo}>

                <input
                    type="text"
                    value={newTaskText}
                    onChange={handleInputChange}
                    placeholder="Enter a text"
                />
                <button type="submit" className="add-button">Add</button>
            </form>

            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id}>

                        {editingId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button className="save-button" type="button" onClick={() => saveEdit(todo.id)}>
                                    Save
                                </button>
                                <button className="cancel-button" type="button" onClick={cancelEdit}>
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <span>{todo.text}</span>
                                <button className="edit-button" type="button" onClick={() => startEditing(todo)}>
                                    Edit
                                </button>
                            </>
                        )}

                        <button
                        className="delete-button"
                            type="button"
                            aria-label="Delete button"
                            onClick={() => deleteTodoList(todo.id)}
                        >
                            Delete
                        </button>

                        <button
                        className="up-button"
                            type="button"
                            aria-label="Move up button"
                            onClick={() => moveTaskUp(index)}
                        >
                            Move up
                        </button>

                        <button
                        className="down-button"
                            type="button"
                            aria-label="Move down button"
                            onClick={() => moveTaskDown(index)}
                        >
                            Move down
                        </button>
                    </li>
                ))
                }
            </ul>
        </div>
    )




}

export default TodoList;