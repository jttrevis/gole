import styles from './styles.module.scss';
import jrLogo from '../../assets/JuniorLogo1.png';
import copyLogo from '../../assets/copy.svg';
import React from 'react';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.logo}>
				<img src={jrLogo} alt="" />
			</div>
			<img src={copyLogo} alt="" />
			JR.TREVIS Web Developer.All rights reserved.
		</div>
	);
};

export default Footer;
