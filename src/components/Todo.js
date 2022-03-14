import React from 'react';
import firebase from './fireconf';
import { DeleteOutlined } from '@ant-design/icons'

import '../App.css';

 function Todo({ todo }) {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.remove();
  };
//   const completeTodo = () => {
//     const todoRef = firebase.database().ref('Todo').child(todo.id);
//     todoRef.update({
//       complete: !todo.complete,
//     });
  //};
  return (
      <>
        <ul>
            <li>
                {todo.addkaro}
                <button onClick={deleteTodo}> <DeleteOutlined style={{color:"#b80000"}}/> </button>
            </li>
        </ul>
      </>
    // <div>
    //   <h1>{todo.addkaro}</h1>
    //   <button onClick={deleteTodo}>Delete</button>
    //   {/* <button onClick={completeTodo}>Complete</button> */}
    // </div>
  );
  }

export default Todo;