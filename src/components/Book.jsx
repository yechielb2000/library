import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { AddCard } from "@mui/icons-material";


export default function Book(props) {
  return (
    <Card sx={{ maxWidth: 350, maxHeight: 400, margin: 2 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={ props.book["image_url"] } alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { props.book["title"] }
          </Typography>
          <Typography variant="body2" color="text.secondary">
		  { props.book["description"] }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>     
        <IconButton color="primary">
          <AddCard />
        </IconButton>
      </CardActions>
    </Card>
  );
}
