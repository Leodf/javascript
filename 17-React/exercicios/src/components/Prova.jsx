
import React from "react";
import { ReactDOM } from "react";

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
export default class ContactForm extends React.Component {
    state = {
      firstName: this.props.firstName,
      age: this.props.age,
      email: this.props.email
    }
  
    constructor(props) {
      super(props)
      
      this.setFirstName = this.setFirstName.bind(this)
      this.setAge = this.setAge.bind(this)
      this.setEmail = this.setEmail.bind(this)
    }
  
    setFirstName(e) {
      this.setState({ firstName: e.target.value })
    }
  
    setAge(e) {
      this.setState({ age: e.target.value })
    }
  
    setEmail(e) {
      if (this.state.age >= 14) {
        this.setState({ email: e.target.email })
      } else {
        return
      }
    }

    render() {
      const { firstName, age, email } = this.state
      return (
        <div>
        <input type="text" value={firstName} onChange={this.setFirstName}/>
        <input type="text" value={age} onChange={this.setAge}/>
        <input type="text" value={email} onChange={this.setEmail}/>
        <h1>{firstName} {age} {email}</h1>
      </div>
      )
    }
  }