import React, { Component } from "react";

class Row extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return <tr>
            {
                //i index of 
                this.props.values.map((value,i)=>(
                    <td key={i}>{value}</td>
                ))

                //del me km nai krg ga
            }

        </tr>
    }
   
}
export default Row

/*
  0 1
  1 2
  2 3

  0 1
  1 3
*/