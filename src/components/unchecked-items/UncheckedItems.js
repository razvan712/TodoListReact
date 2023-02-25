import { useState } from "react";
import "./UncheckedItems.css";

const UncheckedItems = ({
  todos,
  setTodos,
  checked,
  setChecked,
  shuffleArray,
  handleEdit,
}) => {
  const [filter, setFilter] = useState("");

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  function startsWithExactLetters(str, prefix) {
    if (prefix === "") {
      return true;
    }
    if (str === "") {
      return false;
    }
    if (str[0] === prefix[0]) {
      return startsWithExactLetters(str.slice(1), prefix.slice(1));
    }
    return false;
  }

  return (
    <>
      <div className="unchecked-container">
        <h2>Unchecked Items</h2>
        <div className="unchecked-tools">
          <form>
            <input
               className="search-input"
              required
              type="text"
              placeholder="Search"
              onChange={handleFilterChange}
            />
          </form>
          <button className="shuffle-button" onClick={() => setTodos(shuffleArray([...todos]))}>
            Shuffle
          </button>
        </div>
        <div className="unchecked-list">
          {todos
            .filter((todo) => startsWithExactLetters(todo.name, filter))
            .map((todo, index) => {
              return (
                <div key={index} className="item">
                  {todo.name}
                  <label className="input-container">
                    <input
                      key={index}
                      type="checkbox"
                      onChange={() => {
                        setChecked((prev) => [...prev, todo]);
                        setTodos(todos.filter((item) => item !== todo));
                      }}
                    />
                    <span className="checkmark"></span>
                    <div className='item-tools'>
                    <button className="shuffle-button" onClick={() => handleEdit(todo)}>edit</button>
                    <button
                      onClick={() => {
                        setTodos(todos.filter((item) => item !== todo));
                      }}
                    >
                      x
                    </button>
                    </div>
                  </label>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default UncheckedItems;