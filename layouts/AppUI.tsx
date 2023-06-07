import React, { FC } from 'react';
import { TodoCounter } from '@components/Home/TodoCounter';
import { TodoSearch } from '@components/Home/TodoSearch';
import { TodoList } from '@components/Home/TodoList';
import { CreateTodoButton } from '@components/Home/CreateTodoButton';
import { TodoItem } from '@components/Home/TodoItem';
import { TodoHead } from '@components/Home/TodoHead';
import { Todos } from '@types';

interface Props {
	search: string;
	totalTodos: number;
	completedTodos: number;
	searchedTodos: Todos[];
	loading: boolean;
	error: boolean;
	/* eslint-disable no-unused-vars */
	handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
	completeTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
	/* eslint-enable no-unused-vars */
}

const AppUI: FC<Props> = ({
	search,
	handleSearch,
	totalTodos,
	completedTodos,
	searchedTodos,
	completeTodo,
	deleteTodo,
	loading,
	error,
}) => {
	return (
		<>
			<TodoHead />
			<TodoSearch searchValue={search} setSearchValue={handleSearch} />
			<TodoCounter totalTodos={totalTodos} completed={completedTodos} />
			{loading && 'Estamos cargando..'}
			{error && 'Ay no'}
			{!loading && !searchedTodos.length && 'Crea algún TODO'}
			<TodoList>
				{searchedTodos.map((todo, key) => (
					<TodoItem
						text={todo.text}
						completed={todo.completed}
						key={`TodoItem_${key}`}
						id={key}
						onComplete={completeTodo}
						onDelete={deleteTodo}
					/>
				))}
			</TodoList>
			<CreateTodoButton />
		</>
	);
};

export { AppUI };
