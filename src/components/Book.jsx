import { React, useEffect, useState } from "react";
import userParams from "react-router-dom";
import Container from "@mui/material/Container";
// import Image from "@mui/icons-material/Image";
import { BookScheme } from "../bookScheme";
import axios from "axios";

const API_URL = "https://example-data.draftbit.com/books?_limit=150";

export default function Book(props) {
  const { name } = userParams();

  const [book, setBook] = useState(props.book);

  useEffect(() => {
    if (props.book == NaN) {
      axios
        .get(API_URL)
        .then((res) => {
          const books = res.data;
          var g = books.forEach((book) => {
            if (book[BookScheme.name] == name) return book;
          });
          console.log(book);
          setBook(g);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return <Container maxWidth="sm">{book[BookScheme.name]}</Container>;
}
