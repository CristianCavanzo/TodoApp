import React from 'react';
import styled from 'styled-components';
import { montserrat } from '@font';

const Input = styled.input`
	width: 100%;
	border-radius: 100px;
	border: none;
	outline-color: #2f39ff;
	border: 1px solid #000;
	padding: 12px 22px;
	text-align: center;
	font-weight: 500;
	:disabled {
		opacity: 0.5;
	}
`;

const TodoSearch = ({ handleSearch, search, loading }) => {
	return (
		<Input
			onInput={handleSearch}
			type="text"
			value={search}
			placeholder="Cortar cebolla"
			className={montserrat.className}
			disabled={loading}
		/>
	);
};
export { TodoSearch };
