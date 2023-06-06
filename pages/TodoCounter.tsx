import React from 'react';
interface Props {
	totalTodos: number;
	completed: number;
}
const TodoCounter: React.FC<Props> = ({ totalTodos, completed }) => {
	return (
		<h1>
			Has completado {completed} de {totalTodos} TODOS
		</h1>
	);
};
export { TodoCounter };
