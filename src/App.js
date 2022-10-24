import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import About from './components/About/About';
import { Routes, Route } from "react-router-dom";


const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/about' element={<About />} />
			</Routes>
			<Footer />


		</>
	)
}
export default App;