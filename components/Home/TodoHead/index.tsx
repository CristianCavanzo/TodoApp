import React from 'react';
import styled from 'styled-components';
const Head = styled.div`
	.todoHead_title {
		display: flex;
		flex-direction: column;
		font-size: 24px;
		line-height: 22px;
	}
`;

const TodoHead = () => {
	return (
		<Head>
			<p className="todoHead_title">
				<b>Buenos</b> dias
			</p>
		</Head>
	);
};

export { TodoHead };
