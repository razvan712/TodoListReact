import { useState, useEffect, useRef } from "react";
import './EditItems.css'
const EditItems = ({ todo, setTodos, setEditItem, setChecked }) => {
  const [newName, setNewName] = useState(todo.name);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((prev) =>
      prev.map((item) =>
        item.id === todo.id ? { ...item, name: newName } : item
      )
    );
    setChecked((prev) =>
      prev.map((item) =>
        item.id === todo.id ? { ...item, name: newName } : item
      )
    );
    setEditItem(null);
  }

  return (
   <div className="edit-container">
    <form  onSubmit={handleSubmit}>
      <input type="text" value={newName} onChange={handleChange} ref={inputRef} />
      <button type="submit">Save</button>
      <button type="button" onClick={() => setEditItem(null)}>
        Cancel
      </button>
    </form>
    </div >
  );
};

export default EditItems;
