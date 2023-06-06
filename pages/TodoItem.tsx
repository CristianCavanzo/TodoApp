import React from 'react';
import styled from 'styled-components';
const List = styled.li`
	display: flex;
	background: #fff;
	border-radius: 8px;
	padding: 18px 32px;
	column-gap: 12px;
	position: relative;
	font-size: 16px;
	span {
		font-weight: bold;
	}
	.todoItem_delete {
		position: absolute;
		top: -8px;
		right: 32px;
	}
`;
interface Props {
	text: string;
	completed: boolean;
}
const TodoItem: React.FC<Props> = ({ text }) => {
	return (
		<List>
			<span>V</span>
			<p>{text}</p>
			<span className="todoItem_delete">X</span>
		</List>
	);
};
export { TodoItem };
