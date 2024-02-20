import React from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';

const Header = () => {
	return (
		<header id='main-header'>
			<div id='title'>
				<img src={logo} alt='Logo' />
				<h1>KatoFood</h1>
			</div>
			<nav>
				<Button styles='text-button'>Cart (3)</Button>
			</nav>
		</header>
	);
};

export default Header;
