import './App.css';
import WeatherText from './WeatherText';
import React,{ Component } from 'react';


const Message = (props) => {
  return (
      <h2>The counter is {props.counter}</h2>
  )
}


const Message1 = (props) => {
  return (
      <h2>Wow {props.counter}</h2>
  )
}

class Counter extends Component {

  state = {
      counter: 0
  }

  changeCounter = () => {
      this.setState(({counter}) => ({
          counter: counter + 1
      }))
  }

  render() {
      return (
          <>
              <button
                  onClick={this.changeCounter}>
                  Click me
              </button>
              {this.props.some(this.state.counter)} 
              {this.props.sren(this.state.counter+5)} 
          </>
      )
  }
}


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Counter some={counter => (
        <Message counter={counter}/>
      )} sren={counter => (
        <Message1 counter={counter}/>
      )}/>
        <WeatherText/>
      </header>
    </div>
  );
}

export default App;



