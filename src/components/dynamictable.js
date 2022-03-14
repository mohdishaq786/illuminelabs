import * as ReactBootStrap from "react-bootstrap"; 
import Form from 'react-bootstrap/Form'

function Table() {    ///es6 syntax;
  
  const fun2=(hello) =>{
    console.log('hello!');
  }
  const shoot = () => {
    alert("delete");
  }
  const shoot1 = () => {
    console.log("clicked");
    //alert("Great Shot!");
  //  let conf=confirm("Are you sure?");

  }

  
    
  const players=[
  {name:"ishaq",positon:"student",dept:"cse",edit:<button onClick={()=>{ alert('edit done'); }}>edit</button>,delete:<button onClick={shoot}>Delete!</button>},
  {name:"bhed",positon:"student",dept:"cse",edit:<button onClick={() => { alert('edit done'); }}>edit</button>,delete:<button onClick={shoot}>Delete!</button>},
  {name:"shiv",positon:"student",dept:"cse",edit:<button onClick={() => { alert('edit done'); }}>edit</button>,delete:<button onClick={shoot}>Delete!</button>},
  {name:"arshad",positon:"student",dept:"cse",edit:<button onClick={() => { alert('edit done'); }}>edit</button>,delete:<button onClick={shoot}>Delete!</button>},
  {name:"ishaq",positon:"student",dept:"cse",edit:<button onClick={()=>{ alert('edit done'); }}>edit</button>,delete:<button onClick={shoot}>Delete!</button>},
  {name:"ishaq",positon:"student",dept:"cse",edit:<button onClick={()=>{ alert('edit done'); }}>edit</button>,delete:<button onClick={shoot}>Delete!</button>}, 
    
  ]
   
  const renderPlayer =(player,index)=>{
    return (
      <tr key={index}>
        <td>{player.name}</td>
        <td>{player.positon}</td>
        <td>{player.dept}</td>
        <td>{player.edit}</td>
        <td>{player.delete}</td>
      </tr>
    )
  }
  return (
     <div className="App">
      <ReactBootStrap.Table striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Name</th>
      <th>postion</th>
      <th>dept</th>
      <th>edit</th>
      <th>delete</th>
    </tr>
  </thead>
  <tbody>
       {/* now here  we have map th table with array  */}
       {/* here map is just a loop in react */}
      {players.map(renderPlayer)}
  </tbody>
</ReactBootStrap.Table>

     </div>
     
     );
    }
    
        
export default Table;
