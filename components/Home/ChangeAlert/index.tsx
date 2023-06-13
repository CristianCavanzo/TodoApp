import React from 'react';

const ChangeAlert = ({
	sincronize,
	sincronizedItem,
	loading,
}: {
	sincronize: () => void;
	sincronizedItem: boolean;
	loading: boolean;
}) => {
	if (!sincronizedItem && !loading) {
		return (
			<div>
				<p>Hubo cambios</p>
				<button onClick={sincronize}>Volver a cargar la informacion</button>
			</div>
		);
	}
	return <></>;
};

export { ChangeAlert };
