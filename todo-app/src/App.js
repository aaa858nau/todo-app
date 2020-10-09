import React, {useState, useCallback, useEffect} from 'react';


//function App() {
  //return (
    //<div className="App">
      //<h1> Hello</h1>    
    //</div>
  //);
//}



const App = () => {
  // hooks!!
const [newTodo, setNewTodo] = useState('');
const [todos, setTodes] = useState([]);

const onNewTodoChange = useCallback(
  (event) => {
    // console.log(event.target.value);
    setNewTodo(event.target.value);
  }, []);

  const formSubitted = useCallback((event) => {
    event.preventDefault();
    setTodes([
      ...todos,
      {
        id: todos.length + 1,
        content: newTodo,
        done: false,
      }
    ]);
    setNewTodo('');
  }, [newTodo, todos]);

  // console.log('todos', todos);

  useEffect(() => {
  console.log('todos', todos);
  //return () => {
  //  console.log('component was un-mounted!');
  //}

  }, [todos]);

  return (
    <div>
      <form onSubmit={formSubitted}>
        <label htmlFor="newTodo">Enter a TODO:</label>
        <input 
          id="newTodo"
          name="newTodo"
          value={newTodo} 
          onChange={onNewTodoChange} 
        />
        <button>Add TODO</button>
      </form>
      <ul>
        
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
          
      </ul>      
    </div>
  );
};
export default App;
