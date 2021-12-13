import React, { Component } from 'react'

export default class UncontrolledInput extends Component {

    handleSubmit =(e) =>
    {
        e.preventDefault();
        const name = this.refs.myName;
        const email = this.email.value;
        const text = this.refs.myText;
        const textVal = text.textContent;
        text.style.color = 'red';
        console.log(name.value,email,textVal);
    }
    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <input typr='text' ref='myName'></input>
                    <input typr='email' ref={(orange)=>this.email = orange}></input>
                    <button type='submit'>submit</button>
                </form>
                <p ref='myText'>hello world</p>
            </section>
        )
    }
}
