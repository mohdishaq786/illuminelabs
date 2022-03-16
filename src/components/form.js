//import { ref } from 'firebase/database'; ///add
import React, { useState } from 'react';
//import { database } from '../firebase';
import firebase from './fireconf';
import { EditOutlined } from '@ant-design/icons';
//import CreateTodo from './createtodo';

const Form = () => {
  

    const [title, setTitle] = useState('');
    const [search,setSearch]=useState("");

    const handleOnChange = (e) => {
  
     
    
      setTitle(e.target.value); //?MEANS BUT MERA HISAB SE YE TARGET VALUE KO ACCESS KR RHE HAI


    };
    
    const createTodo = () => {
  //    const todoRef =ref(database,'Todo'); //new version method
       
      const todoRef = firebase.database().ref('Todo');//CORECT METHOD live project we use this
      const todo = {
       
        title,
        complete: false,
        
      };
      if(todo.title==="")
       {
         //console.log(todo.title)
         alert("Enter your task");
         return false;
       }
       else
       {
       todoRef.push(todo);
        setTitle('');
       }
        //INSERT PUSH SAME AS hai but isme  push auto unique key generate krti hai
    };
    
  // const SearchItem =(e)=>{
  //   e.preventDefault();   //cancels the event if it is cancelable, ??
  //   setTitle(title.filter((i)=>
  //      i.title.tolowerCase().includes(search.toLocaleLowerCase())
  //   ));
  // };

 


  return (
    <div>
      
       <input placeholder ="Enter your Task" type ="text" onChange={handleOnChange} value={title} />{'\n'}
       <button onClick={createTodo}><EditOutlined style={{color:"#66788a"}}/></button>
       
       <br/>
       
          
      
      
    </div>
  );
}

export default Form;