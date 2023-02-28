import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { api } from './../../services/api';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const Popular = () => {
	const [popularDrinks, setPopularDrinks] = useState([]);

	const getPopularDrinks = async () => {
		const checkLocalStorage = localStorage.getItem('popularDrinks');

		if (checkLocalStorage) {
			setPopularDrinks(JSON.parse(checkLocalStorage));
		} else {
			await api.get('search.php?f=a').then((response) => {
				console.log(response.data);
				localStorage.setItem(
					'popularDrinks',
					JSON.stringify(response.data.drinks)
				);
				setPopularDrinks(response.data.drinks);
			});
		}
	};

	useEffect(() => {
		getPopularDrinks();
	}, []);
	return (
		<section className={styles.mainContainer}>
			<h5>Popular Drinks</h5>
			<Splide
				className={styles.container}
				options={{
					perPage: 2,
					rewind: true,
					gap: '1rem',
				}}
			>
				{popularDrinks &&
					popularDrinks.map((drink) => {
						return (
							<SplideSlide key={drink.idDrink} className={styles.cardContainer}>
								<div className={styles.card}>
									<Link to={'/cocktail/' + drink.idDrink}>
										<img src={drink.strDrinkThumb} alt="" />
									</Link>
								</div>
							</SplideSlide>
						);
					})}
			</Splide>
		</section>
	);
};

export default Popular;
