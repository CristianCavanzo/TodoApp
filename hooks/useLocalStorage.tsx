import { useEffect, useState } from 'react';

export function useLocalStorage<T>(itenName: string, initialValue: T[]) {
	const [item, setItem] = useState(initialValue);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [sincronizedItem, setSincronizedItem] = useState(true);
	useEffect(() => {
		console.log('me llamo');
		// eslint-disable-next-line no-undef
		if (globalThis.window) {
			window.addEventListener('storage', (change) => {
				if (change.key === 'TODOS_V1') {
					setSincronizedItem(false);
				}
			});
		}
	}, [sincronizedItem]);

	useEffect(() => {
		// eslint-disable-next-line no-undef
		if (globalThis.window) {
			try {
				const random = Math.floor(Math.random() * 10);
				const time = Number(`1${random}00`);
				setTimeout(() => {
					let parsedItem: T[] = JSON.parse(localStorage.getItem(itenName));
					if (!parsedItem) {
						localStorage.setItem(itenName, JSON.stringify([]));
						parsedItem = initialValue;
					}

					setItem(parsedItem);
					setLoading(false);
					setSincronizedItem(true);
				}, time);
			} catch {
				setLoading(false);
				setError(true);
			}
		}
	}, [loading]);

	const sincronize = () => {
		setLoading(true);
		setSincronizedItem(false);
	};

	const saveItem = (newItem: T[]) => {
		localStorage.setItem(itenName, JSON.stringify(newItem));
		setItem(newItem);
	};

	const createItem = (newItem: T) => {
		const parsedItem: T[] = JSON.parse(localStorage.getItem(itenName));
		parsedItem.push(newItem);
		saveItem(parsedItem);
	};

	return { item, saveItem, loading, error, createItem, sincronize, sincronizedItem };
}
