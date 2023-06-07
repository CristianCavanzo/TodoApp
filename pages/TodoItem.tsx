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
	.icon_delete {
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
				width={16}
				height={16}
				className="icon_completed"
				color="#737572"
			/>
			<p>{text}</p>
			<DeleteIcon
				onClick={handleDelete}
				onKeyDown={handleDelete}
				className="icon_delete"
				width={16}
				height={16}
				color="#737572"
			/>
		</List>
	);
};
export { TodoItem };
