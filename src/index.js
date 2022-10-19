import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/reset.css";
import './styles/index.css';
import "./styles/style.scss";
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header />
		<Main />
		<Footer />
	</React.StrictMode>
);