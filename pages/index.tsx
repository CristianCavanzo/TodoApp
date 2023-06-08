import React from 'react';
import { AppUI } from '@layouts/AppUI';
import { TodoProvider } from '@context/TodoContext';
// const defaultTodos = [
// 	{ text: 'Cortar cebolla', completed: true },
// 	{ text: 'Tomar el curso de intro a React', completed: false },
// 	{ text: 'Llorar con la llorona', completed: false },
// 	{ text: 'LALALA', completed: false },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

const Home = () => {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
};

export default Home;
