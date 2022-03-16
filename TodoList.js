import React, { useState, useEffect } from 'react';
import firebase from './fireconf';
import Todo from './Todo';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function TodoList() {
  const [todoList, setTodoList] = useState();
  const [mtodoList, setMtodoList] = useState();
  const [search,setSearch]=useState();
//similar to componentdidmount and componentdid update 
//but cpmponentunmount?? ka kya?
  useEffect(() => {
    const todoRef = firebase.database().ref('Todo');
    todoRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] }); ///current me jo hai
     
        
      }
        
      setTodoList(todoList);
      setMtodoList(todoList);
    });
  }, []);
  const SearchItem =(e)=>{
   e.preventDefault();   //cancels the event if it is cancelable, ??
    // setTodoList(todoList.filter((i)=>
    //    todoList.toLowerCase().includes(search.toLowerCase())
    // ));

    {/*in my method only one time we search in future use saket sir method */}
    // FilterAction.searchByKey = (list, key, value) => {



      // saket sir method
      let text = search
        .trim()
        .toLowerCase()
        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      let fval=[]
      if (!text || text === "") {
        // fval=mtodoList;
        alert("Enter todo to search");
         return false;

      } 
      else {
        debugger
        fval=mtodoList.filter((item) => {
          return item.title.toLowerCase().match(text);
        });
      }
      debugger
      setTodoList(fval);
      
       
    // };
  };
  

  return (
    <>
      <form onSubmit={(e)=>{SearchItem(e)}}>  
         <input placeholder='Search....' onChange={(e)=>{setSearch(e.target.value)}}/>
         <button type="submit"><SearchOutlined /></button>
       </form>
      {todoList ? todoList.map((todo, index) => <Todo todo={todo} key={index} />) 
        : ''}   
        {/* kuch nai hm bus ternary opertor if this then this */}
    </>
  );
}

export default TodoList;