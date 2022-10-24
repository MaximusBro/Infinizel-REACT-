import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { About } from './components/header/about/About';
import { Team } from './components/header/team/Team';
import { Routes, Route } from "react-router-dom";


const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/about' element={<About />} />
				<Route path='/team' element={<Team />} />
				<Route path='*' element={<Main />} />
			</Routes>
			<Footer />


		</>
	)
}
export default App;