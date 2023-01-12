import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions, CardHeader } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { AddCard } from "@mui/icons-material";


export default function Book(props) {
  return (
    <Card sx={{ width: 250, height: 350, margin: '10px', display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'}}>
      <CardActionArea>
        <CardMedia
			sx={{ height: 276, objectFit: 'fill' }}
			component="img"
			src={ props.book["image_url"] }
			alt={ props.book["title"] }/>
        <CardContent sx={{ marginTop: '10px', padding: '0px', textAlign: "center", fontWeight: 900 }}>
            { props.book["title"] }
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ padding: '5px' }}>     
        <IconButton color="inherit">
          <AddCard />
        </IconButton>
      </CardActions>
    </Card>
  );
}
