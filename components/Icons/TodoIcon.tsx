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
	return (
		<span tabIndex={0} role="button" className={`${className} cursor_pointer`} {...other}>
			<svg viewBox={viewBox} width={width} height={height} fill={color}>
				{children}
			</svg>
		</span>
	);
};

export { TodoIcon };
