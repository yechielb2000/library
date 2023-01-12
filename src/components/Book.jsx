import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { CardActionArea, CardActions } from "@mui/material";
import { AddCard, DoneRounded } from "@mui/icons-material";
import { BookScheme } from "../bookScheme";


export default function Book(props) {
  return (
    <Card sx= {{ 	
		width: 250,
		height: 380,
		margin: '10px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'space-around' }}>
      	<CardActionArea>
			<CardMedia
				sx={{ 
					height: 280,
					objectFit: 'fill' 
				}}
				component="img"
				src={ props.book[BookScheme.image_url] }
				alt={ props.book[BookScheme.title] }/>
			<CardContent sx={{ 
				marginTop: '10px',
				padding: '0px',
				textAlign: "center",
				fontWeight: 900 }}>
				{ props.book[BookScheme.title] }
        	</CardContent>
      	</CardActionArea>
		<CardActions sx={{ padding: '5px' }}>     
			<IconButton color="inherit" defaultChecked>
				<DoneRounded />
			</IconButton>
			<IconButton color="inherit">
				<AddCard />
			</IconButton>
		</CardActions>
    </Card>
  );
}