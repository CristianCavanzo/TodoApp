import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

const defaultTodos = [
	{ text: 'Cortar cebolla', completed: false },
	{ text: 'Tomar el curso de intro a React', completed: false },
	{ text: 'Llorar con la llorona', completed: false },
	{ text: 'LALALA', completed: false },
	{ text: 'LALALA', completed: false },
];

const Home = () => {
	return (
		<div>
			<TodoCounter totalTodos={5} completed={0} />
			<TodoSearch />
			<TodoList>
				{defaultTodos.map((todo, key) => (
					<TodoItem text={todo.text} completed={todo.completed} key={`TodoItem_${key}`} />
				))}
			</TodoList>
			<CreateTodoButton />
		</div>
	);
};

export default Home;
