import React, { useState } from 'react';
import iconSettings from '../assets/icon-settings.svg';
import iconClose from '../assets/icon-close.svg';
import { Color, Font } from '../types/enum';
import { Count } from '../types/types';

interface IProps {
	timer: Count;
	currentFont: string;
	currentColor: string;
	setTimer: (arg: Count) => void;
	setCurrentFont: (arg: Font) => void;
	setCurrentColor: (arg: any) => void;
}

const Settings = ({
	timer,
	setTimer,
	currentFont,
	currentColor,
	setCurrentFont,
	setCurrentColor,
}: IProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [newColor, setNewColor] = useState(currentColor);
	const [newTimer, setNewTimer] = useState({
		pomodoro: timer.pomodoro,
		shortBreak: timer.shortBreak,
		longBreak: timer.longBreak,
	});
	const btnClassNameFont = (font: Font) => {
		return `${currentFont === font ? 'active' : ''}`;
	};

	const btnClassNameColor = (color: Color) => {
		return `${newColor === color ? 'active' : ''}`;
	};

	const handleClose = () => {
		setIsOpen(false);
		setNewTimer({
			pomodoro: timer.pomodoro,
			shortBreak: timer.shortBreak,
			longBreak: timer.longBreak,
		});
		setNewColor(currentColor);
	};

	const handleChangeTimer = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTimer({
			pomodoro: parseInt(e.target.value),
			shortBreak: parseInt(e.target.value),
			longBreak: parseInt(e.target.value),
		});
	};

	const handleApply = () => {
		setIsOpen(false);
		setTimer(newTimer);
		setCurrentColor(newColor);
	};

	return (
		<div className="settings">
			{/* ICON */}
			<img src={iconSettings} alt="icon settings" onClick={() => setIsOpen(true)} />

			{/* Modal  */}
			{isOpen && (
				<div className="settings__content">
					{/* HEADER */}
					<div className="settings__content__header">
						<h3>Settings</h3>
						<img src={iconClose} alt="icon close" onClick={handleClose} />
					</div>
					{/* TIME */}
					<div className="settings__content__time">
						<span className="settings__content__category--title">
							TIME (MINUTES)
						</span>
						<div className="settings__content__time__content">
							<div className="settings__content__time__content__input-wrapper">
								<label>pomodoro</label>
								<input
									name="pomodoro"
									type="number"
									min="1"
									value={newTimer.pomodoro}
									onChange={handleChangeTimer}
								/>
							</div>
							<div className="settings__content__time__content__input-wrapper">
								<label>short break</label>
								<input
									name="shortbreak"
									type="number"
									min="1"
									value={newTimer.shortBreak}
									onChange={handleChangeTimer}
								/>
							</div>
							<div className="settings__content__time__content__input-wrapper">
								<label>long break</label>
								<input
									name="longbreak"
									type="number"
									min="1"
									value={newTimer.longBreak}
									onChange={handleChangeTimer}
								/>
							</div>
						</div>
					</div>
					{/* FONT */}
					<div className="settings__content__font">
						<span className="settings__content__category--title">FONT</span>
						<div className="settings__content__font__content">
							<button
								className={btnClassNameFont(Font.KUMHB_SANS)}
								onClick={() => setCurrentFont(Font.KUMHB_SANS)}>
								Aa
							</button>
							<button
								className={btnClassNameFont(Font.ROBOTO_SLAB)}
								onClick={() => setCurrentFont(Font.ROBOTO_SLAB)}>
								Aa
							</button>
							<button
								className={btnClassNameFont(Font.SPACE_MONO)}
								onClick={() => setCurrentFont(Font.SPACE_MONO)}>
								Aa
							</button>
						</div>
					</div>
					{/* COLOR */}
					<div className="settings__content__color">
						<span className="settings__content__category--title">COLOR</span>
						<div className="settings__content__color__content">
							<button
								className={btnClassNameColor(Color.SALMON)}
								onClick={() => setNewColor(Color.SALMON)}></button>
							<button
								className={btnClassNameColor(Color.CYAN)}
								onClick={() => setNewColor(Color.CYAN)}></button>
							<button
								className={btnClassNameColor(Color.PURPLE)}
								onClick={() => setNewColor(Color.PURPLE)}></button>
						</div>
					</div>
					{/* APPLY */}
					<div className="settings__content__apply">
						<button onClick={handleApply}>Apply</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Settings;
