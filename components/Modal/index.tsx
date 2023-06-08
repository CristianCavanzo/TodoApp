import { montserrat } from '@font';
import React, { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';
interface Props {
	children: ReactNode;
	active: boolean;
}
const Modal: FC<Props> = ({ children, active }) => {
	if (typeof document === 'undefined') {
		return <></>;
	}
	return ReactDOM.createPortal(
		<div className={`Modal ${active && 'modal_active'} ${montserrat.className}`}>{children}</div>,
		document.getElementById('modal')
	);
};

export { Modal };
