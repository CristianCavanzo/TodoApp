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
`;
const CreateTodoButton = () => {
	const handleCreate = () => {};
	return (
		<Button onClick={handleCreate} className={montserrat.className}>
			+
		</Button>
	);
};
export { CreateTodoButton };
