import {useState, useRef} from "react";
import "./Inputbar.css";

const Inputbar = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const inputValue = inputRef.current.value;
    if (inputValue.trim() !== '') {
      setTodos(prev => [...prev, { name: inputValue, isEdited: false, id: Date.now()}]);
    }
    inputRef.current.value = '';
   
    setTodo("");

    
  }

  function handleChange(e) {
    setTodo(e.target.value);
  }

  return (
    <div className="input-wrapper">
      <form onSubmit={handleSubmit}>
        <input
        ref={inputRef}
        required
          type="text"
          onChange={handleChange}
          value={todo}
          placeholder="Enter your todo here"
          className="todo-input"
        />
        <button className="todo-button" type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default Inputbar;
