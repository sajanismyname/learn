import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";


function TodoList({filter}){
    const [todos, setTodo]= useState ( ()=>{
        const saved=localStorage.getItem("savedText");
        return saved ? JSON.parse(saved) : [];
    })


    useEffect(()=>{
        localStorage.setItem("savedText", JSON.stringify(todos))
    },[todos])


    function deleteTodo(id){
        setTodo(todos.filter((todo)=> todo.id !== id));
    }

    function toggleTodo(id){
        setTodo(
            todos.map( (todo)=> 
            todo.id === id ? {...todo, completed: !todo.completed}: todo  )
        )
    }

    function editTodo(id, newText){
        setTodo( todos.map( (todo)=>
            todo.id === id ? {...todo, text: newText}: todo
        ))
    }

    const filteredTodos = todos.filter((todo)=>{
        if(filter === "active" ) return !todo.completed;
        if(filter === "completed") return todo.completed;
        return true;
    })

    return (
        <div>

                {
                    filteredTodos.length === 0 ?
                    (<p>No todos yet - add one above! </p>) : (
                        <ul>{
                        filteredTodos.map( (todo)=> (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onDelete={deleteTodo}
                                onToggle={toggleTodo}
                                onEdit={editTodo}
                            />
                        ))}
                        </ul>
                    )

                }
        </div>
    )
}

export default TodoList