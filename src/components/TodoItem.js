import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
      const {taskname, handleEdit, handleDelete}= this.props
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between">
        <h6>{taskname}</h6>
        <div className="task-icon">
            <span className="mx-2 text-success" onClick={handleEdit}>
                <i className="fas fa-pen"></i>
            </span>
            <span className="mx-2 text-danger" onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </span>
        </div>
      </li>
    )
  }
}
