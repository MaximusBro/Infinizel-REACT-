import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { About } from './components/header/about/About';
import { Team } from './components/header/team/Team';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { Modal } from './components/modal/Modal';


const App = () => {

	const [name, setName] = useState('');
	const [value, setValue] = useState({});
	const [email, setEmail] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name.length > 3 && email.match("@")) {

			e.target.reset();
		}
	};
	const [modalActive, setModalActive] = useState(false)
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
				<form action="#" className='modal__contact'
					id="contact"
					onSubmit={handleSubmit}>
					<input type="text"
						name="name"
						id="contactName"
						placeholder='Your name'
						onChange={(e) => setName(e.target.value)}
					/>
					<input type="email"
						name="email"
						id="contactEmail"
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input type="submit"
						value="Submit"
					/>
				</form>
			</Modal>

		</>
	)
}
export default App;