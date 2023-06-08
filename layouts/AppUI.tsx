import React, { useContext } from 'react';
import { TodoCounter } from '@components/Home/TodoCounter';
import { TodoSearch } from '@components/Home/TodoSearch';
import { TodoList } from '@components/Home/TodoList';
import { CreateTodoButton } from '@components/Home/CreateTodoButton';
import { TodoItem } from '@components/Home/TodoItem';
import { TodoHead } from '@components/Home/TodoHead';
import { TodoLoading } from '@components/Home/TodoLoading';
import { TodoError } from '@components/Home/TodoError';
import { TodoEmpty } from '@components/Home/TodoEmpty';
import { TodoContext } from '@context/TodoContext';
import { Modal } from '@components/Modal';
import { TodoForm } from '@components/Home/TodoForm';

const AppUI = () => {
	const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, handleModal } =
		useContext(TodoContext);
	return (
		<>
			<TodoHead />
			<TodoSearch />
			<TodoCounter />

			{loading && (
				<>
					<TodoLoading />
					<TodoLoading />
					<TodoLoading />
				</>
			)}
			{error && <TodoError />}
			{!loading && !searchedTodos.length && <TodoEmpty />}
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

			<CreateTodoButton openModal={handleModal} />
			{openModal && (
				<Modal active={openModal}>
					<TodoForm />
				</Modal>
			)}
		</>
	);
};

export { AppUI };
