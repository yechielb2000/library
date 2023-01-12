import { useEffect, useState } from 'react'
import axios from 'axios';
import Book from './Book';
import '../App';

const API_URL = "https://example-data.draftbit.com/books?_limit=150"

export default function BookList() {

	const [books, setBooks] = useState([]);

	useEffect(() => {
		axios.get(API_URL)
		.then(res => { 
			console.log(res.data)
			setBooks(res.data)
		})
		.catch(err => {
			console.log(err)
		})
	}, [])

	return (
		<div className='book-list'>
			{ books.map( book => <Book book={ book } /> ) }
		</div>
	)
}