import React, { ReactNode } from 'react';
import styled from 'styled-components';
const TodoListComponent = styled.ul`
	display: grid;
	row-gap: 12px;
`;
const TodoList = ({ children }: { children: ReactNode }) => {
	return <TodoListComponent>{children}</TodoListComponent>;
};
export { TodoList };
