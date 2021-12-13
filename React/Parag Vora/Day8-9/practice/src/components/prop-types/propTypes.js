import React, { Component } from "react";
import PropTypes from  'prop-types';
const Person = ({person:{ img, name, age,info }}) => {
  // const {img,name,age,info} = Props.person;
  return(
  <article>
    <img src={img} alt="person"></img>
    <h4>name:{name}</h4>
    <h4>age:{age}</h4>
    <h4>info:{info || "some info "}</h4>
  </article>
  )
};
Person.propTypes =
{
  person : PropTypes.shape(
    {
      img:PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      age:PropTypes.number.isRequired,
      info:PropTypes.string.isRequired
    }
  )
}
Person.defaultProps =
{

}

class PersonList extends Component {
  state={
  people:[
    {
      id:1,
      img:"https://randomuser.me/api/portraits/thumb/men/75.jpg",
      name:"john",
      age:27
    },
    {
      id:2,
      img:"https://randomuser.me/api/portraits/thumb/men/34.jpg",
      name:"bob",
      age:22
    },
    {
      id:3,
      img:"https://randomuser.me/api/portraits/thumb/men/23.jpg",
      name:"alice",
      age:23,
      info:"some info about alice"
    }
  ]
}
  render() {
    return (
      <section>
        {this.state.people.map((person)=>(
          <Person key={person.id} person={person}></Person>
        ))}
        <hr></hr>
      </section>
    );
  }
}

export default class PropTypesDemo extends Component {
    render() {
      return <PersonList></PersonList>;
    }
  }