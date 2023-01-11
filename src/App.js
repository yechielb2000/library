import './App.css';
import SearchAppBar from './components/SearchAppBar';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
   <div className='app'>
	<SearchAppBar/>
		<Routes>
			<Route path="/" element='Hi'/>
			<Route path="/book/:id" element='Bye'/>
			<Route path="/favorites" element=''/>	
		</Routes>
   </div>
  );
}

export default App;
