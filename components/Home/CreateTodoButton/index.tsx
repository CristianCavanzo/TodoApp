import React from 'react';
import styled from 'styled-components';
import { montserrat } from '@font';
const Button = styled.button`
	width: 50px;
	height: 50px;
	background: #2f39ff;
	border-radius: 100%;
	outline: none;
	border: none;
	color: #fff;
	font-weight: bold;
	font-size: 22px;
	position: absolute;
	bottom: -20px;
	right: 40px;
	transition: rotate 150ms ease-out;
	cursor: pointer;
	:hover {
		transition: rotate 100ms ease-in;
		rotate: 45deg;
	}
`;
const CreateTodoButton = ({ openModal }: { openModal: () => void }) => {
	return (
		<Button onClick={openModal} className={montserrat.className}>
			+
		</Button>
	);
};
export { CreateTodoButton };
