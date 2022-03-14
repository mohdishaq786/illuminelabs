import React, { Component } from 'react'
import { database } from '../firebase';
import { ref, onValue, update, push, child, set, remove} from "firebase/database";
import Row from './row'
//import Button from './button';
class Table extends Component {

    constructor(props) {
        super(props)

        // Set initial state
        this.state = { visited: true, data: [] };

       this .updateState=this.updateState.bind(this);
        // Binding this keyword
        
        
    }
    
    componentDidMount() {
        
        // const tableRef = ref(database, 'tables');
        // onValue(tableRef, (snapshot) => {
        //     const rows = snapshot.val();
        //     const data = Object.values(rows).map((x) => {
        //         return [x.name, x.email];
        //     })
        //     // console.log(data);
        //     this.setState(({visited}) => ({visited, data}));
        // });

        // const newKey = push(child(ref(database), 'tables')).key;
        // set(ref(database,  +newKey), {
        //     name: "setsdf",
        //     email: "set&xasdf"
        // })


        // remove(ref(database, 'tables/-MxoLrxQkShN_VbGeXpC/emAIL'));

        
        // Get a key for a new user.
        // const newPostKey = push(child(ref(database), 'tables')).key;
        
        // update(ref(database, 'tables'), {
        //     [newPostKey]: {
        //         name: "new_jadu",
        //         email: "new@ad.c"
        //     },
        //     [newPostKey+"jadu2"]: {
        //         name: "new_jadu2",
        //         email: "new@ad.c"
        //     }
        // });

        // update(ref(database, 'tables'), {
        //     "-MxoQ3kLgTrhUpXP-5rM": {
        //         other: "somethin"
        //     },
        //     "-MxoNkNj5I_2W68FBudt/email": {
        //         name: "new_jadu2",
        //         email: "new@ad.c"
        //     }
        // });
    }
    
    updateState() {
        // Changing state{ name: "Abc", email: 'email', phone: 6789, address: 'abc' }
        this.setState(({ visited }) => {
            if (visited) {
                return {
                    visited: !visited,    //visited  graph dfs ki tara visted node le lo
                    data: [
                        [
                             'Programming ',
                             '@gmail',
                             '30',
                             'ghhhj'
                        ],
                        [
                             'Programming ',
                             'gmail',
                             '30',
                             'ghhhj'
                        ]
                        
                    ]
                }

            }
            else {
                return { visited: true, data: [[  "Abc", 'email',  6789,  'abc' ], [ "Abc",  'email', 6789,  'abc' ]] };
            }

        })//function pss
    }


    render() {
        
        const { data } = this.state    //saket sir say  do this way
        return (
            <div>
                <h2>Table</h2>
                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>

                    </tr>
                    {
                        data.map((d) => (  
                           <Row values={d} key={d[1]}/>)) //...email=emailvalue
                    }
                    </tbody>
                </table>

                <span>
                    {/* <button onClick={() => this.clickState(name)}>Edit</button>
              <button onClick={() => this.clickState(name)}>Delete</button> */}
                    <button onClick={this.updateState}>show table </button> 
                      {/* <Button onButtonClick={() => this.updateStateclickState('show Table')}/> */}
                    
                </span>



            </div>
        )
    }
}

export default Table;
