import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoHead } from './TodoHead';

const defaultTodos = [
	{ text: 'Cortar cebolla', completed: false },
	{ text: 'Tomar el curso de intro a React', completed: false },
	{ text: 'Llorar con la llorona', completed: false },
	{ text: 'LALALA', completed: false },
	{ text: 'LALALA', completed: false },
];

const Home = () => {
	return (
		<>
			<TodoHead />
			<TodoSearch />
			<TodoCounter totalTodos={5} completed={2} />
			<TodoList>
				{defaultTodos.map((todo, key) => (
					<TodoItem text={todo.text} completed={todo.completed} key={`TodoItem_${key}`} />
				))}
			</TodoList>
			<CreateTodoButton />
		</>
	);
};

export default Home;
