import React, { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import { CartContext } from '../store/CartContext';

const Header = () => {

  const cartCtx = useContext(CartContext)

  const totalCartItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)
	return (
		<header id='main-header'>
			<div id='title'>
				<img src={logo} alt='Logo' />
				<h1>KatoFood</h1>
			</div>
			<nav>
				<Button styles='text-button'>Cart ({totalCartItems})</Button>
			</nav>
		</header>
	);
};

export default Header;
