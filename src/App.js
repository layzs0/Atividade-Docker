import { useEffect, useState } from 'react';
import logo from './logo.jpg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error('Erro ao buscar todos:', err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lista de Tarefas</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.titulo}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
