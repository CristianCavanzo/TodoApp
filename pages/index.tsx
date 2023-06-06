import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

const Home = () => {
	return (
		<div>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
			</TodoList>
			<CreateTodoButton />
		</div>
	);
};

export default Home;
