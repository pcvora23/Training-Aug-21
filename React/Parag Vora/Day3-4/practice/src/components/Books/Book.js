import React, { Component } from "react";
// import Buttons from "./Buttons";
export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1, showInfo: true };
  }

  handleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    // console.log(this.props);
    const { id, img, title, author } = this.props.info;
    const checkInfo = (info) => {
      if (this.state.showInfo === true) {
        return <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
          suscipit?
        </p>;
      } else {
        return null
      }
    };

    return (
      <article className="book">
        <img src={img} width="150" alt="book"></img>
        <div>
          <h4>Title: {title}</h4>
          <h5>Author: {author}</h5>
          <button type="button" onClick={this.handleInfo}>
            toggleinfo
          </button>
          {checkInfo(this.state.showInfo)}
          {/* Ternary */}
          {/* {this.state.showInfo ?<p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
              suscipit?
            </p>:null } */}

          {/* AND */}
          {/* {this.state.showInfo && (
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
              suscipit?
            </p>
          )} */}
        </div>
      </article>
    );
  }
}
