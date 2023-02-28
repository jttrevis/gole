import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from './../../services/api';
import styles from './styles.module.scss';

const Drinks = () => {
	const [category, setCategory] = useState([]);
	const params = useParams();

	const getCategory = async (name) => {
		await api.get(`filter.php?i=${name}`).then((response) => {
			console.log(response.data.drinks);
			setCategory(response.data.drinks);
		});
	};

	useEffect(() => {
		getCategory(params.type);
		console.log(params.type);
	}, [params.type]);

	return (
		<>
			<motion.div
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				className={styles.mainContainer}
			>
				{category &&
					category.map((cat) => {
						return (
							<motion.div
								animate={{ opacity: 1 }}
								initial={{ opacity: 0 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								className={styles.cardContainer}
								key={cat.strDrink}
							>
								<Link to={'/cocktail/' + cat.idDrink}>
									<div className={styles.cards}>
										<h1>{cat.strDrink}</h1>
										<img src={cat.strDrinkThumb} alt="" />
									</div>
								</Link>
							</motion.div>
						);
					})}
			</motion.div>
		</>
	);
};

export default Drinks;
