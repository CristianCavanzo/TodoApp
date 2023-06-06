import React, { ReactNode } from 'react';
const TodoList = ({ children }: { children: ReactNode }) => {
	return <ul>{children}</ul>;
};
export { TodoList };
