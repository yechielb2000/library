import React, { useState, useEffect } from "react";
import BookCard from "../../components/Book/BookCard";
import { Box, Grid } from "@mui/material";
import { getRequest } from "../../api/requests";
import { useLoaderData } from "react-router";

export default function LibraryPage() {
  const books = useLoaderData();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Grid>
    </Box>
  );
}
