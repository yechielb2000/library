import { useState } from "react";
import BookInfo from "./BookModal";
import { AddCard, BookmarkAddOutlined, DoneRounded } from "@mui/icons-material";
import {
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  IconButton,
  Card,
} from "@mui/material";
import { useNavigate } from "react-router";

export default function BookCard({ book }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <BookInfo open={open} handleClose={handleClose} book={book} />
      <Card
        sx={{
          width: 250,
          height: 350,
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            sx={{
              height: 280,
              objectFit: "fill",
            }}
            component="img"
            src={book.image_url}
            alt={book.title}
          />
          <CardContent
            sx={{
              marginTop: "10px",
              padding: "0px",
              textAlign: "center",
              fontWeight: 900,
            }}
          >
            {book.title}
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ padding: "5px" }}>
          <IconButton color="inherit" onClick={() => navigate(`#/book/${book.id}`)}>
            <BookmarkAddOutlined />
          </IconButton>
          <IconButton color="inherit" onClick={() => alert("hi")}>
            <DoneRounded />
          </IconButton>
          <IconButton color="inherit" onClick={() => alert("hi")}>
            <AddCard />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
