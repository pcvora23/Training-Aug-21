import React, { Component } from "react";
import Book from "./Book";
import booksData from "./bookData";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { books: booksData };
  }

  handleDelete =(id)=>
  {
    const sortedBooks =this.state.books.filter((item)=>item.id !== id);
    this.setState({books:sortedBooks});
  }
  render() {
    // const books = this.state.books.map((item)=>item.book);
    // console.log(books);
    return (
      <section>
        {this.state.books.map((item, index) => (
          <Book key={index} info={item} handleDelete = {this.handleDelete}></Book>
        ))}
      </section>
    );
  }
}
