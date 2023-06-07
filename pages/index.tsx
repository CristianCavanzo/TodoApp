import React, { useState } from 'react';
import { TodoCounter } from '@components/TodoCounter';
import { TodoSearch } from '@components/TodoSearch';
import { TodoList } from '@components/TodoList';
import { CreateTodoButton } from '@components/CreateTodoButton';
import { TodoItem } from '@components/TodoItem';
import { TodoHead } from '@components/TodoHead';
import { useLocalStorage } from '@hooks/useLocalStorage';

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
	const initialValue: Todos[] = [];
	// localStorage.getItem('TODOS_V1', defaultTodos)
	// localStorage.removeItem('TODOS_V1');
	const { item: todos, saveItem: saveTodos } = useLocalStorage(nameTodos, initialValue);

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
		<>
			<TodoHead />
			<TodoSearch searchValue={search} setSearchValue={handleSearch} />
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
