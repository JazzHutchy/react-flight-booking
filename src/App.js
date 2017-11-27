import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a heading</h1>
        <Button title='Find Flights' primary={true} />
        <Button title='Sign Up' primary={true} />
        <Button title='Enter Competition' magic={true} />
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
        </ul>
      </div>
    )
  }
}

export default App
