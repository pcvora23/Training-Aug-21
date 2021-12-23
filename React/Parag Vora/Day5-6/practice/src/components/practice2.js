import React from "react";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", FirstName: "", LastName: "" };
    // this.handleChange1 = this.handleChange1.bind(this);
    // this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /*  handleChange1(event) {
      this.setState({ FirstName: event.target.value });
    }
    handleChange2(event) {
      this.setState({ LastName: event.target.value });
    }  */

  handleChange1 = (event) => {
    this.setState({ FirstName: event.target.value });
  };
  handleChange2 = (event) => {
    this.setState({ LastName: event.target.value });
  };

  
  handleSubmit(event) {
    alert(
      "A name was submitted: " +
        this.state.FirstName +
        " " +
        this.state.LastName
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          firstName:
          <input
            type="text"
            value={this.state.FirstName}
            onChange={this.handleChange1}
          ></input>
        </label>
        <label>
          LastName:
          <input
            type="text"
            value={this.state.LastName}
            onChange={this.handleChange2}
          ></input>
        </label>
        <button type="submit">click me</button>
        <hr></hr>
      </form>
    );
  }
}


