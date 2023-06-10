import React from 'react';
import { WithStorageListener } from './withStorageListener';

const ChangeAlert = ({
	sincronize,
	sincronizedItem,
}: {
	sincronize: () => void;
	sincronizedItem: boolean;
}) => {
	if (!sincronizedItem) {
		return (
			<div>
				<p>Hubo cambios</p>
				<button onClick={sincronize}>Volver a cargar la informacion</button>
			</div>
		);
	}
	return <></>;
};

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
