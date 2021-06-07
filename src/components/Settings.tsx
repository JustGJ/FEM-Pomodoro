import React, { useState } from 'react';
import iconSettings from '../assets/icon-settings.svg';
import iconClose from '../assets/icon-close.svg';
import test1 from '../assets/icon-arrow-up.svg';
import test2 from '../assets/icon-arrow-down.svg';

const Settings = () => {
	const [isOpen, setIsOpen] = useState(false);

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
						<img
							src={iconClose}
							alt="icon close"
							onClick={() => setIsOpen(false)}
						/>
					</div>
					{/* TIME */}
					<div className="settings__content__time">
						<span className="settings__content__category--title">
							TIME (MINUTES)
						</span>
						<div className="settings__content__time__content">
							<div className="settings__content__time__content__input-wrapper">
								<label>pomodoro</label>
								<input type="number" min="1" />
							</div>
							<div className="settings__content__time__content__input-wrapper">
								<label>short break</label>
								<input type="number" min="1" />
							</div>
							<div className="settings__content__time__content__input-wrapper">
								<label>long break</label>
								<input type="number" min="1" />
							</div>
						</div>
					</div>
					{/* FONT */}
					<div className="settings__content__font">
						<span className="settings__content__category--title">FONT</span>
						<div className="settings__content__font__content">
							<button>Aa</button>
							<button>Aa</button>
							<button>Aa</button>
						</div>
					</div>
					{/* COLOR */}
					<div className="settings__content__color">
						<span className="settings__content__category--title">COLOR</span>
						<div className="settings__content__color__content">
							<button></button>
							<button></button>
							<button></button>
						</div>
					</div>
					{/* APPLY */}
					<div className="settings__content__apply">
						<button>Apply</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Settings;
