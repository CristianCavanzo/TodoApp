import React from 'react';
import Lottie from 'lottie-react';
import Fireworks from '@animations/fireworks.json';

const Complete = () => {
	return <Lottie animationData={Fireworks} className="completedTodos" readOnly={true} />;
};

export { Complete };
