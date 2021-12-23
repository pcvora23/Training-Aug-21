import React, { Component } from "react";

export default class StudentForm extends Component {
  render() {
    
    const { handleSubmit, handleChange, student, editForm, isvalid } =
    this.props;
    const { id, firstName, lastName, image, collegeName, collegeLogo } =
      student;
    return (
      <div className="container rounded my-5">
        <div className="card student-form">
          <h1 className="text-center text-capitalize card-header text-white bg-secondary ">
            add student
          </h1>
          <div className="card-body student-form-body mt-3">
            <form onSubmit={handleSubmit}>
              <div className="form-group row">
                <label htmlFor="id" className="col-md-3 col-form-label">
                  ID
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="id"
                    className="form-control"
                    placeholder="ID"
                    value={id}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>

              <div className="form-group row mt-3">
                <label htmlFor="firstName" className="col-md-3 col-form-label">
                  FirstName
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>

              <div className="form-group row mt-3">
                <label htmlFor="lastName" className="col-md-3 col-form-label">
                  LastName
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>

              <div className="form-group row mt-3">
                <label htmlFor="image" className="col-md-3 col-form-label">
                  image
                </label>
                <div className="col-md-9">
                  <input
                    type="file"
                    name="image"
                    className="form-control  pl-1"
                    onChange={handleChange}
                  ></input>
                  {image && (
                    <div className="row m-3">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="form-student-image mx-auto rounded-circle">
                          <img
                            className="rounded-circle"
                            width="175"
                            src={image}
                            alt="student"
                          ></img>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group row mt-3">
                <label
                  htmlFor="collegeName"
                  className="col-md-3 col-form-label"
                >
                  collegeName
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="collegeName"
                    className="form-control"
                    placeholder="collegeName"
                    value={collegeName}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>

              <div className="form-group row mt-3">
                <label
                  htmlFor="collegeLogo"
                  className="col-md-3 col-form-label"
                >
                  collegeLogo
                </label>
                <div className="col-md-9">
                  <input
                    type="file"
                    name="collegeLogo"
                    className="form-control border-white pl-1"
                    onChange={handleChange}
                  ></input>

                  {collegeLogo && (
                    <div className="row m-4">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="form-collegeLogo-image mx-auto">
                          <img src={collegeLogo} alt="college logo"></img>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group row mb-0">
                <div className="col-md-3"></div>
                <div className="col-md-9">
                  <button
                    disabled={isvalid ? false : true}
                    type="submit"
                    className={
                      editForm
                      ? "btn btn-dark btn-block w-50 mx-auto mt-4 text-uppercase"
                        : "btn btn-success btn-block w-50 mx-auto mt-4 text-uppercase"
                    }
                  >
                    {editForm?"edit":"add"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
