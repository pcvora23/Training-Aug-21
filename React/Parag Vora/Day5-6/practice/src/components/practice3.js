import React from "react";

export default class Practice3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { FirstName: "", LastName: "" };
  }

  handleSubmit = (event) => {
    alert(
      "A name was submitted as :" +
        this.state.FirstName +
        " " +
        this.state.LastName
    );
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          FirstName:<input type="text" value={this.state.FirstName} name='FirstName' onChange={this.handleChange}></input>
          <br />
          LastName:<input type="text" value={this.state.LastName} name='LastName' onChange={this.handleChange}></input>
          <br />
        </label>
        <button type="submit">click me</button>
        <hr></hr>
      </form>
    );
  }
}
