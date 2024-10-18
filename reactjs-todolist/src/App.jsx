import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState, useEffect } from 'react'

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}));
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodos(index){
    const newTodoList = [
      ...todos.slice(0, index),
      ...todos.slice(index+1)
    ]

    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodos(index){
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodos(index);
  }

  useEffect(() => {
    if (!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos');
    if (!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos}/>
    </>
  );
}


