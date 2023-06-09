import React from 'react';
import styled from 'styled-components';
const TodoHeaderComponent = styled.header`
	display: grid;
	row-gap: 12px;
`;

const TodoHeader = ({ children }) => {
	return <TodoHeaderComponent>{children}</TodoHeaderComponent>;
};

export { TodoHeader };
