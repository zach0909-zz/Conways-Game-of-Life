import React, { Component } from 'react';
import {buildGrid} from '../buildGrid';
import {checkStatus} from '../checkStatus';
import Button from './button';
import 'bootstrap/dist/css/bootstrap.css';


class Table extends Component {
    state = {
        grid: [],
        status: 'off'
    }

    componentDidMount()
    {
        this.setState({grid: buildGrid()})
    }

    getColor = (cell) => {
      return {
          background: cell === 1 ? 'black' : 'white'
      }
    }

    changeGrid = () => {
        this.setState(state => {
            return {
            grid: checkStatus(state.grid)}});
    }

    handleClick = () => {
        const {status} = this.state;
        const newStatus = status === 'on' ? 'off' : 'on';
        this.setState({status: newStatus})
        
        if (status === 'off'){
            this.interval = setInterval(() => this.changeGrid(), 1000);
        } else {
            clearInterval(this.interval);
        }
    }

    

    render() {
        const {grid, status} = this.state;

        return ( <>
            <table className="table-sm table-bordered">
                <tbody>
                 {grid.map((row,index) => (
                     <tr key={index}>
                         {row.map((cell, index) => (
                             <td key={index} style={this.getColor(cell)}></td>
                         ))}
                     </tr>
                 ))}
                 </tbody>
            </table>
            
            <Button onClick={this.handleClick} status={status} />
            </>
        )}
}
 
export default Table;