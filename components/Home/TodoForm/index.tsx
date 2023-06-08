import React, { useContext, useState } from 'react';
import { montserrat } from '@font';
import styled from 'styled-components';
import { TodoContext } from '@context/TodoContext';
import { Todos } from '@types';

const CreateTodo = styled.form`
	background: #fff;
	padding: 20px;
	border-radius: 16px 16px 0 0;
	max-width: 700px;
	width: 100vw;
	display: grid;
	row-gap: 8px;
	h3 {
		text-align: center;
	}
	textarea {
		border: 1px solid #2f39ff;
		outline: none;
		padding: 8px;
		min-height: 80px;
	}
	.createTodo_buttons {
		display: flex;
		justify-content: space-between;
	}
	.createTodo_buttons button {
		border: none;
		padding: 8px 24px;
		cursor: pointer;
		font-size: 16px;
	}
	.createTodo_buttons--create {
		background: #2f39ff;
		color: #fff;
		font-weight: 600;
	}
`;

const TodoForm = () => {
	const { handleModal, createItem } = useContext(TodoContext);
	const [value, setValue] = useState('');

	const createTODO = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleModal();
		const TODO: Todos = {
			completed: false,
			text: value,
		};
		createItem(TODO);
	};

	const handleValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value;
		setValue(value);
	};
	return (
		<CreateTodo onSubmit={createTODO}>
			<h3>Escribe tu nuevo TODO</h3>
			<textarea
				value={value}
				onChange={handleValue}
				className={`${montserrat.className}`}
				placeholder="Cortar cebolla"
			/>
			<div className="createTodo_buttons">
				<button
					onClick={handleModal}
					type="button"
					className={`createTodo_buttons--cancel ${montserrat.className}`}
				>
					Cancelar
				</button>
				<button type="submit" className={`createTodo_buttons--create ${montserrat.className}`}>
					Crear
				</button>
			</div>
		</CreateTodo>
	);
};

export { TodoForm };
