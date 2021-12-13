import React, { Component } from "react";
import "./formdemo.css";
class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    people: [],
  };
  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value});
  };
handleSubmit =(e)=>
{
  e.preventDefault();
  const firstName = this.state.firstName;
  const lastName = this.state.lastName;

  if(firstName.length >0 && lastName.length > 0)
  {
    const person =`${firstName} ${lastName}`;
    this.setState(
      {
        people : [...this.state.people,person],
        firstName:"",
        lastName:""
      }
    )
  }
}

  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="FirstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            ></input>
            <input
              type="text"
              name="lastName"
              placeholder="Lastname"
              value={this.state.lastName}
              onChange={this.handleChange}
            ></input>
            <button type="submit">submit</button>
          </form>
        </article>
        <article>
          <h1>people</h1>
          <div>{this.state.people}</div>
        </article>
      </section>
    );
  }
}

class FormDemo extends Component {
  render() {
    return <Form></Form>;
  }
}
export default FormDemo;
