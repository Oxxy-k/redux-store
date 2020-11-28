import React from "react";
import BookList from "../book-list";

const HomePage = () => {
  const books = [
    {
      id: 1,
      title: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "",
    },
    {
      id: 2,
      title: "JavaScript & JQuery: Interactive Front-End Web Development",
      author: "Jon Duckett",
    },
    {
      id: 3,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
    },
  ];
  return <BookList books={books} />;
};

export default HomePage;
