import React, { Component } from "react";

export default class StudentIDCard extends Component {
  constructor(props) {
    super(props);
    this.state = { showInfo: true };
  }

  handleToggle = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    const { student, college, children, handleDelete } = this.props;

    return (
      <section>
        {this.state.showInfo ? (
          <section className="text-center col-md-4">
            <div className="IdCard rounded p-4 mx-auto my-5 bg-white">
              <Image image={student.studImage}></Image>
              <Personal student={student}></Personal>
              {children}
              <College college={college}></College>
              <DeleteButton
                handleDelete={handleDelete}
                ID={student.ID}
              ></DeleteButton>
              <div className="mt-2">
                <ToggleButton handleToggle={this.handleToggle} student ={student}></ToggleButton>
              </div>
            </div>
          </section>
        ) : (
          <ToggleButton handleToggle={this.handleToggle} student ={student}></ToggleButton>
        )}
      </section>
    );
  }
}

const Image = (props) => {
  return (
    <article>
      <img
        className="rounded-circle"
        width="140"
        src={props.image}
        alt="student"
      ></img>
    </article>
  );
};

const Personal = (props) => {
  const { ID, FirstName, LastName, Dob } = props.student;
  return (
    <article className="mt-3">
      <p>{ID}</p>
      <p>
        {FirstName} {LastName}
      </p>
      <p>{Dob}</p>
    </article>
  );
};

const College = (props) => {
  const { collegeLogo, collegeName, CollegeAddress } = props.college;
  return (
    <article>
      <img className="mb-3" width="70" src={collegeLogo} alt="logo"></img>
      <p className="text-uppercase">{collegeName}</p>
      <p>{CollegeAddress}</p>
    </article>
  );
};

const DeleteButton = (props) => {
  return (
    <button
      className="delete-button btn btn-sm btn-danger"
      type="button"
      onClick={() => props.handleDelete(props.ID)}
    >
      Delete Card
    </button>
  );
};

const ToggleButton = (props) => {
  const {FirstName,LastName} = props.student;
  return (
    <button
      className="toggle-button btn btn-sm btn-primary"
      type="button"
      onClick={props.handleToggle}
    >
      Toggle Card for {FirstName} {LastName}
    </button>
  );
};

