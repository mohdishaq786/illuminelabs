import React from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/TodoList';

// import Table from './components/table';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>"ToDo List"</h1>
        {/* <Table/> */}
        <Form/>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
