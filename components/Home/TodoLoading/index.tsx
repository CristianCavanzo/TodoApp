import React from 'react';
import styled from 'styled-components';
const Loading = styled.li`
	width: 100%;
	height: 56px;
	border-radius: 8px;
	position: relative;
	display: flex;
	.maskLoading {
		animation-duration: 7s;
		animation-fill-mode: forwards;
		animation-iteration-count: infinite;
		animation-name: placeHolderShimmer;
		animation-timing-function: linear;
		background-color: #f6f7f8;
		background: linear-gradient(to right, #e3e6e6 8%, #d1d1d1 38%, #e3e6e6 43%);
		background-size: 800px 104px;
		position: absolute;
		z-index: 2;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 8px;
		box-shadow: 0 0 6px 1px #c1c1c1;
	}
	@keyframes placeHolderShimmer {
		0% {
			background-position: -800px 0;
		}
		100% {
			background-position: 800px 0;
		}
	}
`;

const TodoLoading = () => {
	return (
		<Loading>
			<div className="maskLoading"></div>
		</Loading>
	);
};

export { TodoLoading };
