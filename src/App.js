import { Route, Routes } from 'react-router-dom';
import SearchAppBar from './components/SearchAppBar';
import BookList from './components/BookList';
import Book from './components/Book';

function App() {
  return (
   <div>
	<SearchAppBar/>
		<Routes>
			<Route path="/" element={ <BookList/> }/>
			<Route path="/book/:id" element= { <Book/> }/>
			<Route path="/favorites" element= { <BookList/> }/>
			<Route path="/already-read" element= { <BookList/> }/>	
		</Routes>
   </div>
  );
}

export default App;
