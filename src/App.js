import axios from 'axios'
import React, { Component } from 'react'
//import { login } from './Token'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: 'arroyoalangel@gmail.com',
      password: 'cochinito123',
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  
  onSubmit(e){
    e.preventDefault()
    axios.post('/api/users', { user: this.state })
  }

  onChange(e){
    this.setState({ username: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input placeholder='username' value={this.state.username} type='email' />
        <input placeholder='username' value={this.state.password} type='password' />

        <button type='submit'>Log In</button>
      </form>
    )
  }
}

export default App