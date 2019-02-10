import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
state ={
  items:[],
  item:'',
  id:uuid(),
  editItem:false
}
handleChange= (e) => {
  this.setState({
    item:e.target.value
  });
};
handleSubmit= (e) => {
  e.preventDefault();
  const newItem={
    taskname:this.state.item,
    id:this.state.id
  };
  const updatedItem = [...this.state.items, newItem];
  this.setState({
    items:updatedItem,
    item:'',
    id:uuid(),
    editItem:false
  });
};
clearList = () =>{
  this.setState({
    items:[]
  });
};

handleDelete = (id) =>{
  const filteredItems = this.state.items.filter(item=>item.id!==id);
  this.setState({
    items:filteredItems
  });
};

handleEdit = (id) =>{
 const filteredItems = this.state.items.filter(item=>item.id!==id);
 const selectedItem = this.state.items.find(item=>item.id===id);
 this.setState({
  items:filteredItems,
  item:selectedItem.taskname,
  id:this.state.id,
  editItem:true
 });
};
    render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-10 mx-auto mt-5 col-md-8">
              <div className="text-center text-capitalize">
              <h3>Todo Input</h3>
              </div>
              <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
              <div className="text-center text-capitalize">
              <h3>Todo List</h3>
              </div>
              <TodoList items={this.state.items} handleDelete={this.handleDelete} handleEdit={this.handleEdit} clearList={this.clearList} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
