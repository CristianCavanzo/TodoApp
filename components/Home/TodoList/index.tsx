import { Todos } from '@types';
import React, { FC, ReactNode } from 'react';
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
	searchText: string;
	onError: () => React.JSX.Element;
	onLoading: () => React.JSX.Element;
	onEmpty: () => React.JSX.Element;
	/* eslint-disable no-unused-vars */
	children?: (todo: Todos, key: number) => React.JSX.Element;
	onEmptySearchResults: (name: string) => React.JSX.Element;
	render?: (todo: Todos, key: number) => React.JSX.Element;
	/* eslint-enable no-unused-vars */
}

const TodoList: FC<Props> = ({
	error,
	onError,
	onLoading,
	onEmpty,
	loading,
	searchedTodos,
	render,
	onEmptySearchResults,
	searchText,
	children,
}) => {
	const content = render || children;
	return (
		<Section>
			{error && onError()}
			{loading && onLoading()}
			{!searchedTodos.length && searchText && onEmptySearchResults(searchText)}
			{!loading && !searchText && !searchedTodos.length && onEmpty()}
			<TodoListComponent>{searchedTodos.map(content)}</TodoListComponent>
		</Section>
	);
};
export { TodoList };
