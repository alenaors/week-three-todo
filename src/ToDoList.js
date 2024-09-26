import { Component } from "react";
import squirrel from "./squirrel.webp";

class ToDoList extends Component {
    state = {
      userInput:"",
      toDoList:[]
    }

    onChangeEvent(e) {
        this.setState({userInput:e})
    }
    addItem(input) {
        if (input==="") {
            alert("Please enter an item")
        }


        else {
        let listArray = this.state.toDoList;
        listArray.push(input);
        this.setState({toDoList:listArray,
        userInput:""})
        }
       

    }
    crossedWord(e) {
        const li = e.target;
        li.classList.toggle("crossed");
    }
   deleteAll() {
    let listArray = this.state.toDoList;
    listArray = [];
    this.setState({toDoList: listArray})
   }
   deleteItem(index) {
    let listArray = this.state.toDoList;
    listArray.splice(index, 1);
    this.setState({ toDoList: listArray });
}
   onFormSubmit(e) {
    e.preventDefault()
   }
    render() {
        return (
            <div>
                <form onSubmit = {this.onFormSubmit}>
            <div className="container">
              <input type="text" placeholder="What do you want to do?" 
              onChange={(e) => {this.onChangeEvent(e.target.value)}}
              value={this.state.userInput}/>

            </div>
            <div className="container">
               <button onClick = {() => this.addItem(this.state.userInput)} className = "add btn">Add</button>
            </div>
            <ul>
                {this.state.toDoList.map((item, index) => (<li 
                onClick = {this.crossedWord} 
                onDoubleClick={() => this.deleteItem(index)}
                key = {index}> 
                <img src={squirrel} width ="35px" alt="squirrel"/>
                 {item}</li>))}
            </ul>
            <div className="container">
                <button onClick = {()=> this.deleteAll()} className = "delete btn">Delete All</button>
            </div>
            </form>
            </div>
        )
    }
}
export default ToDoList;