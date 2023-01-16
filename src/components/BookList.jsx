import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Book from './Book';

const API_URL = "https://example-data.draftbit.com/books?_limit=150"

export default function BookList() {

	const [books, setBooks] = useState([]);

	useEffect(() => {
		axios.get(API_URL)
		.then(res => setBooks(res.data))
		.catch(err => console.log(err))
	}, [])
  
	return (
		<Grid 
		    container
			direction="row"
			justifyContent="space-evenly"
			alignItems="flex-start">
			{ books.map( book => <Book book={ book } /> ) }
		</Grid>
	)
}