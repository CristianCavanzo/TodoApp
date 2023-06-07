import React from 'react';
import styled from 'styled-components';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
const List = styled.li`
	display: flex;
	background: #fff;
	border-radius: 8px;
	padding: 18px 32px;
	column-gap: 12px;
	position: relative;
	font-size: 16px;
	cursor: pointer;
	span {
		font-weight: bold;
	}
	.todoItem_delete {
		position: absolute;
		top: -8px;
		right: 32px;
	}
	.list_completed {
		background: blue;
	}
`;
interface Props {
	text: string;
	completed: boolean;
	id: number;
	// eslint-disable-next-line no-unused-vars
	onComplete: (id: number) => void;
	// eslint-disable-next-line no-unused-vars
	onDelete: (id: number) => void;
}
const TodoItem: React.FC<Props> = ({ text, completed, id, onComplete, onDelete }) => {
	const handleDelete = () => {
		onDelete(id);
	};
	const handleComplete = () => {
		onComplete(id);
	};
	return (
		<List className={`${completed && 'list_completed'}`}>
			<CompleteIcon
				onClick={handleComplete}
				onKeyDown={handleComplete}
				onFocus={() => console.log('hola')}
				width={16}
				height={16}
				color="blue"
			/>
			<span className="todoItem_completed" tabIndex={0} role="button">
				V
			</span>
			<p>{text}</p>
			<DeleteIcon
				onClick={handleDelete}
				onKeyDown={handleDelete}
				className="todoItem_delete"
				width={16}
				height={16}
				color="blue"
			/>
		</List>
	);
};
export { TodoItem };
