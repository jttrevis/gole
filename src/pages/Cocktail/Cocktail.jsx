import React, { useEffect, useState } from 'react';
import { api } from './../../services/api';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

const Cocktail = () => {
	const [details, setDetails] = useState({});
	const params = useParams();
	const getDetails = async () => {
		await api.get(`lookup.php?i=${params.name}`).then((response) => {
			console.log(response.data.drinks);
			setDetails(response.data.drinks[0]);
		});
	};

	useEffect(() => {
		getDetails();
	}, [params.name]);

	return (
		<motion.div>
			<motion.div
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				className={styles.container}
			>
				<section className={styles.headSection}>
					<h1>{details.strDrink}</h1>
					<img src={details.strDrinkThumb} alt="" />
				</section>
				<section className={styles.bodySection}>
					<h1>How to make: </h1>
					<h3>{details.strInstructions}</h3>
					<div className={styles.ingredients}>
						<ul>
							<li>
								<span>{details.strIngredient1}</span>
								<span>{details.strMeasure1}</span>
							</li>
							<li>
								{details.strIngredient2 && (
									<li>
										<span>{details.strIngredient2} </span>
										<span>{details.strMeasure2} </span>
									</li>
								)}
							</li>
							<li>
								{details.strIngredient3 && (
									<li>
										<span>{details.strIngredient3}</span>
										<span>{details.strMeasure3}</span>
									</li>
								)}
							</li>
							<li>
								{details.strIngredient4 && (
									<li>
										<span>{details.strIngredient4}</span>
										<span>{details.strMeasure4}</span>
									</li>
								)}
							</li>
							<li>
								{details.strIngredient5 && (
									<li>
										<span>{details.strIngredient5}</span>
										<span>{details.strMeasure5}</span>
									</li>
								)}
							</li>
						</ul>
					</div>
				</section>
			</motion.div>
		</motion.div>
	);
};

export default Cocktail;
