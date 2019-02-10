import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
render() {
    const {items, handleDelete, handleEdit, clearList} = this.props
    return (
        <ul className="list-group my-3 ">
           {
               items.map(item=>{
                   return(
                       <TodoItem key={item.id} taskname={item.taskname} handleDelete={()=> handleDelete(item.id)} handleEdit={()=> handleEdit(item.id)}/>
                   )
               })
           }
        <button type="button" className="btn btn-danger btn-block mt-3 text-capitalize" onClick={clearList}>Clear List
        </button>
        </ul>
        );
    }
}
