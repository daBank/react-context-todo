import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import StateContext from "./context";

function Tasks(props) {
  return(
    <StateContext.Consumer>
      {({tasks}) => tasks.map((task, index) => <Task key={index} name={task}/>)}
    </StateContext.Consumer>
  );
}

function Task(props) {
  return(
    <div>Task: {props.name}</div>
   );
}

class NewTask extends Component {
  state = {
    name: ""
  };

	onChangeHandler = (event) => {
    this.setState({name: event.target.value});
  };
  
  render() {
    return(
    <StateContext.Consumer>
    {({onAddHandler}) => 
    		(
      		<div>
        		 <input type="text" name="name" onChange={this.onChangeHandler} />
             <button onClick={onAddHandler.bind(this, this.state.name)}  className="btn">Add Task</button>
        	</div>
    		)
    }
    </StateContext.Consumer>
  );
  }
}

class App extends Component {
  state = {
    tasks: ['task1','task2']
  };

  onAddHandler = (name) => {
    this.setState({
      tasks: [...this.state.tasks, name]
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Context APi v16.3.1</h1>
        </header>
        <StateContext.Provider value={{...this.state, onAddHandler: this.onAddHandler}}>
          <br/>
          <Tasks />
          <br/>
          <NewTask />
        </StateContext.Provider>
      </div>
    );
  }
}
export default App;