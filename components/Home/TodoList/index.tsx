import { Todos } from '@types';
import React, { FC } from 'react';
import styled from 'styled-components';
const TodoListComponent = styled.ul`
	display: grid;
	row-gap: 12px;
`;
const Section = styled(TodoListComponent).attrs(() => ({ as: 'section' }))``;
interface Props {
	error: boolean;
	loading: boolean;
	searchedTodos: Todos[];
	onError: () => React.JSX.Element;
	onLoading: () => React.JSX.Element;
	onEmpty: () => React.JSX.Element;
	// eslint-disable-next-line no-unused-vars
	render: (todo: Todos, key: number) => React.JSX.Element;
}

const TodoList: FC<Props> = ({
	error,
	onError,
	onLoading,
	onEmpty,
	loading,
	searchedTodos,
	render,
}) => {
	return (
		<Section>
			{error && onError()}
			{loading && onLoading()}
			{!loading && !searchedTodos.length && onEmpty()}
			<TodoListComponent>{searchedTodos.map(render)}</TodoListComponent>
		</Section>
	);
};
export { TodoList };
