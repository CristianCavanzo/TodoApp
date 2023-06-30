import { useEffect, useReducer } from 'react';

interface State<T> {
	item: T;
	loading: boolean;
	error: boolean;
	sincronizedItem: boolean;
}

type actionTypes = 'ERROR' | 'SUCCESS' | 'SAVE' | 'SINCRONIZE' | 'SINCRONIZED';

interface Reducer<T> {
	state: State<T>;
	action: {
		type: actionTypes;
		payload?: any;
	};
}

const initialState = <T,>(initialValue: T) => ({
	item: initialValue,
	loading: true,
	error: false,
	sincronizedItem: true,
});

const reducerObject = <T,>(state: T, payload: any) => ({
	ERROR: {
		...state,
		error: true,
	},
	SUCCESS: {
		...state,
		error: false,
		loading: false,
		sincronizedItem: true,
		item: payload,
	},
	SINCRONIZE: {
		...state,
		sincronizedItem: false,
		loading: true,
	},
	SINCRONIZED: {
		...state,
		sincronizedItem: false,
	},
	SAVE: {
		...state,
		item: payload,
	},
});

const reducer = <T,>(state: Reducer<T>['state'], action: Reducer<T>['action']) =>
	reducerObject(state, action.payload)[action.type] || state;

export function useLocalStorage<T>(itenName: string, initialValue: T[]) {
	const [state, dispatch] = useReducer(reducer<T[]>, initialState(initialValue));
	const { item, loading, error, sincronizedItem } = state;
	const onError = () => {
		dispatch({
			type: 'ERROR',
		});
	};
	const onSuccess = (parsedItem) => {
		dispatch({
			type: 'SUCCESS',
			payload: parsedItem,
		});
	};
	const onSave = (newItem: T[]) => {
		dispatch({
			type: 'SAVE',
			payload: newItem,
		});
	};
	const onSincronize = () => {
		dispatch({
			type: 'SINCRONIZE',
		});
	};
	const onSincronized = () => {
		dispatch({
			type: 'SINCRONIZED',
		});
	};

	useEffect(() => {
		// eslint-disable-next-line no-undef
		if (globalThis.window) {
			window.addEventListener('storage', (change) => {
				if (change.key === 'TODOS_V1') {
					onSincronized();
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
					onSuccess(parsedItem);
				}, time);
			} catch (e) {
				onError();
			}
		}
	}, []);

	const sincronize = () => {
		onSincronize();
	};

	const saveItem = (newItem: T[]) => {
		localStorage.setItem(itenName, JSON.stringify(newItem));
		onSave(newItem);
	};

	const createItem = (newItem: T) => {
		const parsedItem: T[] = JSON.parse(localStorage.getItem(itenName));
		parsedItem.push(newItem);
		saveItem(parsedItem);
	};

	return { item, saveItem, loading, error, createItem, sincronize, sincronizedItem };
}
