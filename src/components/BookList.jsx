import { useEffect, useState } from 'react'
import axios from 'axios';
import Book from './Book';
import '../App';

export default function BookList() {

	const [books, setBooks] = useState([]);

	useEffect(() => {
		axios.get("https://example-data.draftbit.com/books?_limit=50")
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