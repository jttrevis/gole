import React from 'react';
import Popular from '../../components/Popular/Popular';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';
import { AiOutlineArrowDown } from 'react-icons/ai';
const Home = () => {
	return (
		<motion.div
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<section className={styles.container}>
				<div className={styles.content}>
					<div className={styles.headContent}>
						<h1>Cocktails</h1>
						<h2>the best choices</h2>
						<h3>Welcome to Gole!</h3>
					</div>
					<div className={styles.bodyContent}>
						<p>
							Our website is dedicated to providing you with the best cocktail
							recipes for any occasion. From classic drinks to trendy new
							concoctions, we've got you covered. Our easy-to-follow recipes
							come with detailed instructions and ingredient lists, so you can
							make the perfect drink every time. Whether you're a seasoned
							mixologist or a beginner, our cocktails are sure to impress. So
							why wait? Start exploring our collection of delicious cocktail
							recipes and become a master mixologist in no time. Cheers!
						</p>
					</div>
					<div className={styles.arrowContainer}>
						<h3>Check our popular drinks</h3>
						<AiOutlineArrowDown size={40} className={styles.arrow} />
					</div>
				</div>
			</section>
			<Popular />
		</motion.div>
	);
};

export default Home;
