import React from 'react';
import Button from './UI/Button';

const FoodItem = ({ image, name, price, description }) => {
	return (
		<li className='meal-item'>
			<article>
				<img src={`http://localhost:3000/${image}`} alt={name} />
				<div>
					<h3>{name}</h3>
					<p className='meal-item-price'>{price}$</p>
					<p className='meal-item-description'>{description}</p>
				</div>
        <p className='meal-item-actions'>
          <Button styles='button'>Add to Cart</Button>
        </p>
			</article>
		</li>
	);
};

export default FoodItem;
