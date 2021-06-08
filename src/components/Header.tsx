import React from 'react';
import { Mode } from '../types/enum';
interface IProps {
	currentMode: Mode;
	setCurrentMode: (arg: Mode) => void;
}

const Header = ({ currentMode, setCurrentMode }: IProps) => {
	const btnClassName = (mode: Mode) => {
		return `header__button ${currentMode === mode ? 'header__button--active' : ''}`;
	};

	return (
		<div className="header">
			<h1>pomodoro</h1>
			<div className="header__buttons">
				<button
					className={btnClassName(Mode.POMODORO)}
					onClick={() => setCurrentMode(Mode.POMODORO)}>
					pomodoro
				</button>
				<button
					className={btnClassName(Mode.SHORT_BREAK)}
					onClick={() => setCurrentMode(Mode.SHORT_BREAK)}>
					short break
				</button>
				<button
					className={btnClassName(Mode.LONG_BREAK)}
					onClick={() => setCurrentMode(Mode.LONG_BREAK)}>
					long break
				</button>
			</div>
		</div>
	);
};

export default Header;
