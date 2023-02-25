import { memo, useState } from "react";
import "./CheckedItems.css";

const CheckedItems = memo(({ todos, setTodos, checked, setChecked, shuffleArray, handleEdit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  function handleChange(todo) {
    setTodos(prev => [...prev, todo]);
    setChecked(checked.filter((item) => item !== todo));
  }

  function handleFilterChange(e) {
    setSearchQuery(e.target.value);
  }

  const filteredChecked = checked.filter((item) => item.name.startsWith(searchQuery));

  return (<>
    <div className="checked-container">
    <h2>Checked Items</h2>
      <div className="checked-tools">
      <form>
        <input  className="search-input" required type="text" placeholder="Search" onChange={handleFilterChange} />
      </form>
    <button className="shuffle-button" onClick={() => setChecked(shuffleArray([...checked]))}>Shuffle</button>
    </div>
    <div className="checked-list">
      {filteredChecked.map((todo, index) => {
        return (
          <div key={index} className='item'>
            {todo.name}
            <label className="input-container">
              <input
                key={index}
                type="checkbox"
                onChange={() => handleChange(todo)}
              />
              <span className="checkmark">&#10004;</span>
            
            <div className='item-tools'>
            <button className="shuffle-button" onClick={() => handleEdit(todo)}>edit</button>
            <button className="shuffle-button" onClick={() => {
               setChecked(checked.filter((item) => item !== todo));
              }}>x</button>
              </div>
              </label>
          </div>
        );
      })}
    </div>
    </div>
    </>
  );
});

export default CheckedItems;