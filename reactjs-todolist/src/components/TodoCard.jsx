import React from 'react'

export default function TodoInput(props){
  const {children, index, handleDeleteTodos, handleEditTodos} = props;
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'> 
        <button onClick={(e) => {handleEditTodos(index)}}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={(e) => {handleDeleteTodos(index)}}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
