import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TodoForm(){
    const [text, setText] = useState("");
    const navigate=useNavigate()

    function handleSubmit(event){

        event.preventDefault();

        if(text.trim() == "") return;

        const saved=localStorage.getItem("savedText")
        const todos=saved ? JSON.parse(saved) : []

        const newTodo = {
            id: Date.now(),
            text,
            completed:false
        }
        localStorage.setItem("savedText", JSON.stringify([...todos,newTodo]))

        setText("");
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                placeholder="Add a new todo"
            />

            <button type="submit">Add</button>
        </form>
    )

}

export default TodoForm;