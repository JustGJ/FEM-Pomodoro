import React, { useState } from 'react';
import { Count } from '../types/types';
import { Mode } from '../types/enum';
interface IProps {
	timer: Count;
	currentMode: Mode;
}

const Timer = ({ timer, currentMode }: IProps) => {
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
				<span className="timer__content__count"></span>
				<span className="timer__content__action">PAUSE</span>
			</div>
		</button>
	);
};
export default Timer;
