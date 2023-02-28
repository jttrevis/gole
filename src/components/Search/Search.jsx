import React, { useState } from 'react';
import styles from './styles.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Search = () => {
	const [input, setInput] = useState('');
	const navigate = useNavigate();
	const submitHandler = (e) => {
		e.preventDefault();
		navigate('/searched/' + input);
		setInput('');
	};

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<AiOutlineSearch />
			<input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				type="text"
				placeholder="Search"
			/>
		</form>
	);
};

export default Search;
