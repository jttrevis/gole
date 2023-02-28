import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from './../../services/api';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

const Searched = () => {
	const [searchedCocktail, setSearchedCocktail] = useState([]);
	const params = useParams();

	const getSearched = async (name) => {
		await api.get(`search.php?s=${name}`).then((response) => {
			console.log(response.data.drinks);
			setSearchedCocktail(response.data.drinks);
		});
	};

	useEffect(() => {
		getSearched(params.search);
		console.log(params.search);
	}, [params.search]);
	return (
		<motion.div
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			{searchedCocktail &&
				searchedCocktail.map((item) => {
					return (
						<div className={styles.container}>
							<section className={styles.headSection}>
								<h1>{item.strDrink}</h1>
								<img src={item.strDrinkThumb} alt="" />
							</section>
							<section className={styles.bodySection}>
								<h1>How to make: </h1>
								<h3>{item.strInstructions}</h3>
								<div className={styles.ingredients}>
									<ul>
										<li>
											<span>{item.strIngredient1}</span>
											<span>{item.strMeasure1}</span>
										</li>
										<li>
											{item.strIngredient2 && (
												<li>
													<span>{item.strIngredient2} </span>
													<span>{item.strMeasure2} </span>
												</li>
											)}
										</li>
										<li>
											{item.strIngredient3 && (
												<li>
													<span>{item.strIngredient3}</span>
													<span>{item.strMeasure3}</span>
												</li>
											)}
										</li>
										<li>
											{item.strIngredient4 && (
												<li>
													<span>{item.strIngredient4}</span>
													<span>{item.strMeasure4}</span>
												</li>
											)}
										</li>
										<li>
											{item.strIngredient5 && (
												<li>
													<span>{item.strIngredient5}</span>
													<span>{item.strMeasure5}</span>
												</li>
											)}
										</li>
									</ul>
								</div>
							</section>
						</div>
					);
				})}
		</motion.div>
	);
};

export default Searched;
