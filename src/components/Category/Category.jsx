import React from 'react';
import { NavLink } from 'react-router-dom';
import vodkaLogo from '../../assets/vodka.png';
import ginLogo from '../../assets/gin.png';
import whiskeyLogo from '../../assets/whiskey.png';
import tequila from '../../assets/tequila.png';
import styles from './styles.module.scss';
const Category = () => {
	return (
		<div className={styles.container}>
			<NavLink to={'/category/vodka'}>
				<img src={vodkaLogo} alt="" />
				<h4>Vodka</h4>
			</NavLink>

			<NavLink to={'/category/gin'}>
				<img src={ginLogo} alt="" />
				<h4>Gin</h4>
			</NavLink>

			<NavLink to={'/category/whiskey'}>
				<img src={whiskeyLogo} alt="" />
				<h4>Whiskey</h4>
			</NavLink>

			<NavLink to={'/category/tequila'}>
				<img src={tequila} alt="" />
				<h4>Tequila</h4>
			</NavLink>
		</div>
	);
};

export default Category;
