import React from 'react';

function WithStorageListener(WrappedComponent) {
	return function WrappedComponentWithStorageListener({ sincronize, sincronizedItem }) {
		return <WrappedComponent sincronize={sincronize} sincronizedItem={sincronizedItem} />;
	};
}

export { WithStorageListener };
