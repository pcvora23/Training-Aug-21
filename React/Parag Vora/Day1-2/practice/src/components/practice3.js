import React from "react";

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function App() {
    return (
      <div>
        <Welcome name="ravindra" />
        <Welcome name="kohli" />
        <Welcome name="dhoni" />
      </div>
    );
  }

export default App;
