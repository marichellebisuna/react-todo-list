import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    const{item, handleChange, handleSubmit, editItem} = this.props
    return (
    <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
                </div>
            </div>
            <input type="text" value={item} onChange={handleChange} placeholder="Enter task" className="form-control text-capitalize"></input>
        </div> 
        <button type="submit"  
        className={editItem ? "btn btn-block btn-primary mt-3" : "btn btn-block btn-success mt-3" }>{editItem ? "Edit Item" : "Add Task"}</button>
        </form>
    </div>  
    )
  }
}
