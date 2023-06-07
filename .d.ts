import { DOMAttributes } from 'react';

export interface PropsIcon extends DOMAttributes<HTMLSpanElement> {
	width: number;
	height: number;
	type: 'complete' | 'delete';
	color?: string;
	className?: string;
	viewBox: string;
	children: ReactNode;
}

const prueba: DOMAttributes<'span'> = onclick;
