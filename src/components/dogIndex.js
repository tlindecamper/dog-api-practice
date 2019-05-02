import React, { Component } from 'react';


export default class Dog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dogs: {}
        }
        this.editDog = this.editDog.bind(this)
    }
  
componentDidMount() {
    fetch("https://random.dog/woof.json")
    .then(res => res.json())
    .then((data) => {
        this.setState({ dogs: data})
    })
    .catch(console.log)
}   

editDog() {
    fetch("https://random.dog/woof.json")
    .then(res => res.json())
    .then((data) => {
        this.setState({ dogs: data})
    })
    .catch(console.log)
}



  render() {
    return (
      <div className='app'>
      <button onClick={this.editDog}>Show me the next amazing dog!!!</button>
        {console.log(this.state.dogs.url)}
        <img src={this.state.dogs.url} className="dog"></img>
      </div>
    );
  }
}