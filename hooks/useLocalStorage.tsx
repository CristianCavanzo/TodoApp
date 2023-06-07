import { useEffect, useState } from 'react';

export function useLocalStorage<T>(itenName: string, initialValue: T) {
	const [item, setItem] = useState<T>(initialValue);
	useEffect(() => {
		// eslint-disable-next-line no-undef
		if (globalThis.window) {
			let parsedItem: T = JSON.parse(localStorage.getItem(itenName));
			if (!parsedItem) {
				localStorage.setItem(itenName, JSON.stringify([]));
				parsedItem = initialValue;
			}
			setItem(parsedItem);
		}
	}, []);

	const saveItem = (newItem: T) => {
		localStorage.setItem(itenName, JSON.stringify(newItem));
		setItem(newItem);
	};

	return { item, saveItem };
}
