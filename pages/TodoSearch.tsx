import React, { FC } from 'react';
import styled from 'styled-components';
import { montserrat } from './_app';

const Input = styled.input`
	width: 100%;
	border-radius: 100px;
	border: none;
	outline-color: #2f39ff;
	border: 1px solid #000;
	padding: 12px 22px;
	text-align: center;
	font-weight: 500;
`;
interface Props {
	searchValue: string;
	// eslint-disable-next-line
	setSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const TodoSearch: FC<Props> = ({ searchValue, setSearchValue }) => {
	return (
		<Input
			onInput={setSearchValue}
			type="text"
			value={searchValue}
			placeholder="Cortar cebolla"
			className={montserrat.className}
		/>
	);
};
export { TodoSearch };
