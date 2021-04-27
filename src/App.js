import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      textButton: 'START'
    };

    let timer = null;
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
  }

  start() {
    let state = this.state
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null
      state.textButton = 'START'
    } else {
      this.timer = setInterval(() => {
        let state = this.state
        state.numero += .1
        this.setState(state)
      }, 100)
      state.textButton = 'PAUSE'
    }
    this.setState(state)
  }

  stop() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null
    }

    let state = this.state;
    state.numero = 0;
    state.textButton = 'START'
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="buttons">
          <Button onClick={this.start} variant="outlined" color="primary">{this.state.textButton}</Button>
          <Button onClick={this.stop} className="stop" variant="outlined" color="Secondary">STOP</Button>
        </div>
      </div>
    )
  }
}

export default App;
