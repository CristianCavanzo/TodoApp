import { useEffect, useState } from 'react';

export function useLocalStorage<T>(itenName: string, initialValue: T) {
	const [item, setItem] = useState<T>(initialValue);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		// eslint-disable-next-line no-undef
		if (globalThis.window) {
			try {
				const random = Math.floor(Math.random() * 10);
				const time = Number(`1${random}00`);
				setTimeout(() => {
					let parsedItem: T = JSON.parse(localStorage.getItem(itenName));
					if (!parsedItem) {
						localStorage.setItem(itenName, JSON.stringify([]));
						parsedItem = initialValue;
					}
					setItem(parsedItem);
					setLoading(false);
				}, time);
			} catch {
				setLoading(false);
				setError(true);
			}
		}
	}, []);

	const saveItem = (newItem: T) => {
		localStorage.setItem(itenName, JSON.stringify(newItem));
		setItem(newItem);
	};

	return { item, saveItem, loading, error };
}
