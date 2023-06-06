import React, { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoHead } from './TodoHead';

const defaultTodos = [
	{ text: 'Cortar cebolla', completed: true },
	{ text: 'Tomar el curso de intro a React', completed: false },
	{ text: 'Llorar con la llorona', completed: false },
	{ text: 'LALALA', completed: false },
];

const Home = () => {
	const [state, setState] = useState({
		search: '',
		todos: defaultTodos,
	});
	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setState({
			...state,
			search: value,
		});
	};

	const completedTodos = state.todos.filter((item) => item.completed).length;
	const totalTodos = state.todos.length;

	const searchedTodos = state.todos.filter((item) => {
		const text = item.text.toLowerCase();
		const search = state.search.toLowerCase();
		return text.includes(search);
	});

	const completeTodo = (id: number) => {
		const newTodos = [...state.todos];
		newTodos[id].completed = true;
		setState({
			...state,
			todos: newTodos,
		});
	};
	const deleteTodo = (id: number) => {
		const newTodos = [...state.todos];
		newTodos.splice(id, 1);
		setState({
			...state,
			todos: newTodos,
		});
	};

	return (
		<>
			<TodoHead />
			<TodoSearch searchValue={state.search} setSearchValue={handleSearch} />
			<TodoCounter totalTodos={totalTodos} completed={completedTodos} />
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

export default Home;
