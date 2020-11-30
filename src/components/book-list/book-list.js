import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import withBookstoreService from "../hoc";
import { booksLoaded, booksRequested, booksError } from "../../actions";
import { compose } from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }
    if (this.props.error) {
      return <ErrorIndicator />;
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

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      bookstoreService
        .getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
    },
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
