import React, { useState } from 'react';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { AppUI } from '@layouts/AppUI';
import { Todos } from '@types';

// const defaultTodos = [
// 	{ text: 'Cortar cebolla', completed: true },
// 	{ text: 'Tomar el curso de intro a React', completed: false },
// 	{ text: 'Llorar con la llorona', completed: false },
// 	{ text: 'LALALA', completed: false },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

const Home = () => {
	const nameTodos = 'TODOS_V1';
	const initialValue: Todos[] = [];
	// localStorage.getItem('TODOS_V1', defaultTodos)
	// localStorage.removeItem('TODOS_V1');
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage(nameTodos, initialValue);

	const [search, setSearch] = useState('');

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSearch(value);
	};

	const completedTodos = todos.filter((item) => item.completed).length;
	const totalTodos = todos.length;

	const searchedTodos = todos.filter((item) => {
		const text = item.text.toLowerCase();
		const searchLower = search.toLowerCase();
		return text.includes(searchLower);
	});

	const completeTodo = (id: number) => {
		const newTodos = [...todos];
		newTodos[id].completed = true;
		saveTodos(newTodos);
	};
	const deleteTodo = (id: number) => {
		const newTodos = [...todos];
		newTodos.splice(id, 1);
		saveTodos(newTodos);
	};

	return (
		<AppUI
			search={search}
			handleSearch={handleSearch}
			totalTodos={totalTodos}
			completedTodos={completedTodos}
			searchedTodos={searchedTodos}
			completeTodo={completeTodo}
			deleteTodo={deleteTodo}
			loading={loading}
			error={error}
		/>
	);
};

export default Home;
