import React, { FC } from 'react';
import { PropsIcon } from '@types';

const TodoIcon: FC<PropsIcon> = ({
	width,
	height,
	color,
	className,
	viewBox,
	children,
	...other
}) => {
	console.log(other);
	return (
		<span className={className} {...other}>
			<svg viewBox={viewBox} width={width} height={height} fill={color}>
				{children}
			</svg>
		</span>
	);
};

export { TodoIcon };
