import { Route, Routes } from 'react-router-dom';
import Bar from './components/Bar';
import BookList from './components/BookList';
import Book from './components/Book';

function App() {
  return (
   <>
	<Bar/>
		<Routes>
			<Route path="/" element={ <BookList/> }/>
			<Route path="/book/:id" element= { <Book/> }/>
			<Route path="/favorites" element= { <BookList/> }/>
			<Route path="/already-read" element= { <BookList/> }/>	
		</Routes>
   </>
  );
}

export default App;
