import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { AddCard } from "@mui/icons-material";

export default function Book() {
  return (
    <Card sx={{ width: 350, height: 400 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image="" alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
