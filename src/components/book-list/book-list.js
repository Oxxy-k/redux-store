import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import withBookstoreService from "../hoc";
import { booksLoaded } from "../../actions";
import { compose } from "../../utils";
import Spinner from "../spinner";

import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    bookstoreService.getBooks().then((data) => {
      this.props.booksLoaded(data);
    });
  }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <ul className="book-list">
        {this.props.books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps = { booksLoaded };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
