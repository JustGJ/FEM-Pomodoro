import React, { useState } from 'react';

const Timer = () => {
	const [count, setCount] = useState('25:00');

	return (
		<button className="timer">
			<svg>
				<circle
					cx="50%"
					cy="50%"
					r="170"
					strokeDasharray="1164"
					strokeDashoffset="0"
				/>
			</svg>
			<div className="timer__content">
				<span className="timer__content__count">{count}</span>
				<span className="timer__content__action">PAUSE</span>
			</div>
		</button>
	);
};

export default Timer;
