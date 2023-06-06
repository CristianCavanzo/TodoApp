import React from 'react';
interface Props {
	text: string;
	completed: boolean;
}
const TodoItem: React.FC<Props> = ({ text }) => {
	return (
		<li>
			<span>V</span>
			<p>{text}</p>
			<span>X</span>
		</li>
	);
};
export { TodoItem };
