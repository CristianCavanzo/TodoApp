import React from 'react';
import { TodoCounter } from '@components/Home/TodoCounter';
import { TodoSearch } from '@components/Home/TodoSearch';
import { TodoList } from '@components/Home/TodoList';
import { CreateTodoButton } from '@components/Home/CreateTodoButton';
import { TodoItem } from '@components/Home/TodoItem';
import { TodoHead } from '@components/Home/TodoHead';
import { TodoLoading } from '@components/Home/TodoLoading';
import { TodoError } from '@components/Home/TodoError';
import { TodoEmpty } from '@components/Home/TodoEmpty';
import { Modal } from '@components/Modal';
import { TodoForm } from '@components/Home/TodoForm';
import { TodoHeader } from '@components/Home/TodoHeader';
import { useTodos } from '@hooks/useTodos';
import { Todos } from '@types';
import { ChangeAlert } from '@components/Home/ChangeAlert';

const Home = () => {
	const { state, stateUpdaters } = useTodos();
	const {
		loading,
		error,
		searchedTodos,
		search,
		completedTodos,
		totalTodos,
		openModal,
		sincronizedItem,
	} = state;

	const { completeTodo, deleteTodo, handleModal, handleSearch, createItem, sincronize } =
		stateUpdaters;

	return (
		<>
			<TodoHead />
			<TodoHeader loading={loading}>
				{/* @ts-ignore */}
				<TodoSearch handleSearch={handleSearch} search={search} />
				{/* @ts-ignore */}
				<TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
			</TodoHeader>

			<TodoList
				error={error}
				loading={loading}
				searchedTodos={searchedTodos}
				searchText={search}
				onError={() => <TodoError />}
				onLoading={() => (
					<>
						<TodoLoading />
						<TodoLoading />
						<TodoLoading />
					</>
				)}
				onEmpty={() => <TodoEmpty />}
				onEmptySearchResults={(name: string) => <p>Empieza a crear un TODO para {name} </p>}
			>
				{(todo: Todos, key: number) => (
					<TodoItem
						text={todo.text}
						completed={todo.completed}
						key={`TodoItem_${key}`}
						id={key}
						onComplete={completeTodo}
						onDelete={deleteTodo}
					/>
				)}
			</TodoList>
			<CreateTodoButton openModal={handleModal} />
			{openModal && (
				<Modal active={openModal}>
					<TodoForm handleModal={handleModal} createItem={createItem} />
				</Modal>
			)}
			<ChangeAlert loading={loading} sincronizedItem={sincronizedItem} sincronize={sincronize} />
		</>
	);
};

export default Home;
