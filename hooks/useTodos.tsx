import { useLocalStorage } from '@hooks/useLocalStorage';
import { Todos } from '@types';
import React, { useState } from 'react';
interface Context {
	search: string;
	totalTodos: number;
	completedTodos: number;
	searchedTodos: Todos[];
	loading: boolean;
	error: boolean;
	openModal: boolean;
	sincronizedItem: boolean;
	/* eslint-disable no-unused-vars */
	handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
	completeTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
	handleModal: () => void;
	createItem: (newItem: unknown) => void;
	sincronize: () => void;
	/* eslint-enable no-unused-vars */
}

const useTodos = (): Context => {
	const nameTodos = 'TODOS_V1';
	const initialValue: Todos[] = [];

	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
		createItem,
		sincronize,
		sincronizedItem,
	} = useLocalStorage(nameTodos, initialValue);

	const [search, setSearch] = useState('');
	const [openModal, setOpenModal] = useState(false);

	const handleModal = () => {
		setOpenModal(!openModal);
	};

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

	return {
		loading,
		error,
		handleSearch,
		completedTodos,
		totalTodos,
		searchedTodos,
		completeTodo,
		deleteTodo,
		search,
		openModal,
		handleModal,
		createItem,
		sincronize,
		sincronizedItem,
	};
};

export { useTodos };
