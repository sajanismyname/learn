import { useState } from "react";

function todoItem({ todo, onDelete, onToggle, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text)

    function handleSaveTodo() {
        if (editText.trim() == "") return;
        onEdit(todo.id, editText);
        setIsEditing(false);
    }

    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />

            {isEditing ? (
                <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e)=>{
                        if(e.key==="Enter") handleSaveTodo()
                    }}
                />
            ) : (
                <span
                    style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                    }}
                >
                    {todo.text}
                </span>
            )}

            {isEditing ? (
                <button onClick={handleSaveTodo}>Save</button>
            ):(
                <button onClick={()=>setIsEditing(true)}>Edit</button>
            )}

            <button onClick={()=> onDelete(todo.id)}>Delete</button>
        </li>
    )
}


export default todoItem;