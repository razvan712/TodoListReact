import { useState } from 'react';
import './App.css';
import Inputbar from './components/inputbar/Inputbar';
import UncheckedItems from './components/unchecked-items/UncheckedItems';
import CheckedItems from './components/checked-items/CheckedItems';
import EditItems from './components/edit-items/EditItems';

function App() {


const [todos, setTodos] = useState([]);
const [checked, setChecked] = useState([]);

const [editItem, setEditItem] = useState(null);

function handleEdit(todo) {
  setEditItem(todo);
}



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}









  return (<>
  <div className='todo-wrapper'>
    <h1 style={{color: 'white'}}>Todo List</h1>

    <Inputbar todos={todos} setTodos={setTodos} />
    <div className='items-wrapper'>
      <div className='unchecked-items'>
    <UncheckedItems   handleEdit={handleEdit} shuffleArray={shuffleArray}   todos={todos} setTodos={setTodos} checked={checked} setChecked={setChecked} />
      </div>
      <div className='checked-items'>
    <CheckedItems  handleEdit={handleEdit}  shuffleArray={shuffleArray}   todos={todos} setTodos={setTodos} checked={checked} setChecked={setChecked}  />
   </div>
    </div>
    {editItem && <EditItems setChecked={setChecked} todo={editItem} setTodos={setTodos} setEditItem={setEditItem} />}
    </div>
    </>
  );
}

export default App;
