import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
       super(props)
        this.state = {
           goven:123,
            parasha:[1,5,7]
        };

        setInterval(()=>{
          this.setState({
              goven: ++this.state.goven
          })
        },1000)

    }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
