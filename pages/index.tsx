import React, { useEffect, useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoHead } from './TodoHead';

interface Todos {
	text: string;
	completed: boolean;
}
// const defaultTodos = [
// 	{ text: 'Cortar cebolla', completed: true },
// 	{ text: 'Tomar el curso de intro a React', completed: false },
// 	{ text: 'Llorar con la llorona', completed: false },
// 	{ text: 'LALALA', completed: false },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

const Home = () => {
	const nameTodos = 'TODOS_V1';
	// localStorage.getItem('TODOS_V1', defaultTodos)
	// localStorage.removeItem('TODOS_V1');

	const [state, setState] = useState({
		search: '',
		todos: [],
	});
	useEffect(() => {
		// eslint-disable-next-line no-undef
		if (globalThis.window) {
			let parsedTodos: Todos[] = JSON.parse(localStorage.getItem(nameTodos));
			if (!parsedTodos) {
				localStorage.setItem('TODOS_V1', JSON.stringify([]));
				parsedTodos = [];
			}
			setState({
				...state,
				todos: parsedTodos,
			});
		}
	}, []);

	const saveTodos = (newTodos: Todos[]) => {
		localStorage.setItem(nameTodos, JSON.stringify(newTodos));
		setState({ ...state, todos: newTodos });
	};

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
		saveTodos(newTodos);
	};
	const deleteTodo = (id: number) => {
		const newTodos = [...state.todos];
		newTodos.splice(id, 1);
		saveTodos(newTodos);
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
