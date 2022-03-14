//import { ref } from 'firebase/database'; ///add
import React, { useState } from 'react';
//import { database } from '../firebase';
import firebase from './fireconf';
import { EditOutlined } from '@ant-design/icons';
const Form = () => {
  

    const [addkaro, setAddkaro] = useState('');

    const handleOnChange = (e) => {
      setAddkaro(e.target.value); //?MEANS BUT MERA HISAB SE YE TARGET VALUE KO ACCESS KR RHE HAI
    };
    const createTodo = () => {
  //    const todoRef =ref(database,'Todo'); 
      const todoRef = firebase.database().ref('Todo');//CORECT METHOD
      const todo = {
        addkaro,
        complete: false,
      };
  
      todoRef.push(todo);  //INSERT PUSH SAME AS NORMAL VECTOR IT 
    };




  return (
    <div>
       <input type="text" onChange={handleOnChange} value={addkaro} />
      <button onClick={createTodo}><EditOutlined style={{color:"#66788a"}}/></button>
    </div>
  );
}

export default Form;