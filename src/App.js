import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { About } from './components/header/about/About';
import { Team } from './components/header/team/Team';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { Modal } from './components/modal/Modal';


const App = () => {


	const [modalActive, setModalActive] = useState(true)
	return (
		<>

			<Header setActive={setModalActive} stateModal={modalActive} />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/about' element={<About />} />
				<Route path='/team' element={<Team />} />
				<Route path='*' element={<Main />} />
			</Routes>
			<Footer />
			<Modal active={modalActive} setActive={setModalActive}>
				<form action="#" className='modal__contact' id="contact">
					<input type="text" name="name" id="contactName" placeholder='Your name' />
					<input type="email" name="email" id="contactEmail" placeholder='Email' />
					<input type="submit" value="Submit" />
				</form>
			</Modal>

		</>
	)
}
export default App;