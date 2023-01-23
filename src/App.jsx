import { Route, Routes } from 'react-router-dom';
import Bar from './components/Bar';
import BookList from './components/BookList';
import Book from './components/BookCard';

function App() {
  return (
   <>
	<Bar/>
		<Routes>
			<Route path="/" element={ <BookList/> }/>
			<Route path="/book/:name" element= { <Book/> }/>
			<Route path="/favorites" element= { <BookList/> }/>
			<Route path="/done" element= { <BookList/> }/>	
		</Routes>
   </>
  );
}

export default App;
