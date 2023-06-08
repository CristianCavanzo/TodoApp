import { useLocalStorage } from '@hooks/useLocalStorage';
import { Todos } from '@types';
import React, { ReactNode, createContext, useState } from 'react';
interface Context {
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

const TodoContext = createContext<Context>({
	search: '',
	totalTodos: 0,
	completedTodos: 0,
	searchedTodos: [],
	loading: true,
	error: false,
	/* eslint-disable no-unused-vars */
	handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => {},
	completeTodo: (id: number) => {},
	deleteTodo: (id: number) => {},

	/* eslint-enable no-unused-vars */
});

const TodoProvider = ({ children }: { children: ReactNode }) => {
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
		<TodoContext.Provider
			value={{
				loading,
				error,
				handleSearch,
				completedTodos,
				totalTodos,
				searchedTodos,
				completeTodo,
				deleteTodo,
				search,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export { TodoContext, TodoProvider };
