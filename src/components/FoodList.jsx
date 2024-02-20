import React, { useEffect, useState } from 'react';
import useHttp from '../hooks/useHttp';
import FoodItem from './FoodItem';

const FoodList = () => {
	const [items, setItems] = useState([]);
	const { error, isLoading, sendRequest } = useHttp();

	useEffect(() => {
		const fetchFood = meals => {
			setItems(meals);
		};
		sendRequest({ url: 'http://localhost:3000/meals/' }, fetchFood);
	}, [sendRequest]);

	return (
		<>
			<ul id='meals'>
				{error && <h2>{error}</h2>}
				{isLoading && <h2>Loading</h2>}
				{!error &&
					!isLoading &&
					items.map(item => {
						return <FoodItem
							key={item.id}
							meal={item}
						/>;
					})}
			</ul>
		</>
	);
};

export default FoodList;
