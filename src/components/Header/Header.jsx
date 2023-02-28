import React from 'react';
import styles from './styles.module.scss';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import logo from '../../assets/logo.png';
const Header = () => {
	return (
		<header className={styles.header}>
			<nav>
				<div className={styles.logoContainer}>
					{/* <AiOutlineMenu /> */}
					<Link to={'/'}>
						<img src={logo} alt="" />
						gole
					</Link>
				</div>
				<div>
					<Search />
				</div>
			</nav>
		</header>
	);
};

export default Header;
