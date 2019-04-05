import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//retrieve the tickets from the Mongoose/Mongo database, and display them
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data: [],
    };
    this.loadAllTheData();
  }
  //this function pulls in the info from the ticket model
  loadAllTheData(){
    fetch('/tickets')
        .then(data =>
        {
          console.log(data);
          // console.log(data.json());
          return data.json();
        })
        .then(returnedData => this.setState({data: returnedData}));
  }
  //this function renders each element from the ticket database onto a page, separated by horizontal rule
  render() {
    // console.log(this.state.data);
    const dataMapping = this.state.data.map((eachElement, index)=>{
      return(<div key={index}>
        <p>{eachElement.person_reporting}</p>
        <p>{eachElement.problem_description}</p>
        <p>{eachElement.date}</p>
        <hr/>
      </div>)
    });
    return (
        <div className="App">
          <h1>Ticket database</h1>
          {dataMapping}
        </div>
    );
  }
}

export default App;
