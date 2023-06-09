import React, { Children, cloneElement } from 'react';
import styled from 'styled-components';

const TodoHeaderComponent = styled.header`
	display: grid;
	row-gap: 12px;
`;

const TodoHeader = ({ children, loading }) => {
	return (
		<TodoHeaderComponent>
			{Children.map(children, (itm) => cloneElement(itm, { loading }))}
		</TodoHeaderComponent>
	);
};

export { TodoHeader };
