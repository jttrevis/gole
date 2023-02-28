import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Drinks from './pages/Drinks/Drinks';
import Searched from './pages/Searched/Searched';
import Cocktail from './pages/Cocktail/Cocktail';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Category from './components/Category/Category';
import { BackToTopButton } from './components/BackToTopButton/BackToTopButton';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Category />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/category/:type" element={<Drinks />} />
				<Route path="/searched/:search" element={<Searched />} />
				<Route path="/cocktail/:name" element={<Cocktail />} />
			</Routes>
			<Footer />
			<BackToTopButton />
		</BrowserRouter>
	);
}

export default App;
