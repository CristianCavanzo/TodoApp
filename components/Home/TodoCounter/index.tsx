import React from 'react';
import styled from 'styled-components';
const TodoCounterComponent = styled.div`
	&.TodoCounterComponent__loading {
		opacity: 0.5;
	}
	background: #000;
	border-radius: 12px;
	color: #fff;
	padding: 16px;
	display: flex;
	flex-direction: column;
	row-gap: 40px;
	.TodoCounterComponent__loading {
		background: blue;
	}
	.todoCounter_text--secondary {
		color: #969696;
		font-size: 13px;
	}
	.todoCounter_progress {
		font-size: 20px;
		font-weight: 600;
	}
	.todoCounter_bottom--percentage {
		font-weight: bold;
		font-size: 52px;
	}
	.todoCounter_bottom--percentageContainer {
		width: 100%;
		height: 40px;
		background: #fff;
		border-radius: 8px;
	}
`;
const Percentage = styled.div<{ $width?: number }>`
	border-radius: 8px;
	height: 100%;
	width: calc(${(props) => props.$width}% + 2px);
	background: #2f39ff;
	margin-left: -1px;
	margin-right: -1px;
`;

const TodoCounter = ({ completedTodos, totalTodos, loading }) => {
	const formatDay = new Intl.DateTimeFormat('es-CO', {
		day: 'numeric',
		month: 'long',
		weekday: 'long',
	}).format(new Date());
	const percentage = Number(((completedTodos / totalTodos) * 100).toFixed(2)) || 0;
	return (
		<TodoCounterComponent className={`${loading && 'TodoCounterComponent__loading'}`}>
			<div className="todoCounter_top">
				<p className="todoCounter_day todoCounter_text--secondary">{formatDay}</p>
				<p className="todoCounter_progress">Progreso del dia</p>
			</div>
			<div className="todoCounter_bottom">
				<p className="todoCounter_bottom--task todoCounter_text--secondary">{`${completedTodos}/${totalTodos} tareas`}</p>
				<div className="todoCounter_bottom--percentage">{`${percentage}%`}</div>
				<div className="todoCounter_bottom--percentageContainer">
					<Percentage $width={percentage || -2} />
				</div>
			</div>
		</TodoCounterComponent>
	);
};
export { TodoCounter };
