import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Settings from './components/Settings';
import Timer from './components/Timer';
import { Color, Font, Mode } from './types/enum';
import { Count } from './types/types';

function App() {
	const htmlTag: any | string = document.body.parentNode;
	const [currentMode, setCurrentMode] = useState(Mode.POMODORO);
	const [currentFont, setCurrentFont] = useState(Font.KUMHB_SANS);
	const [currentColor, setCurrentColor] = useState(Color.SALMON);
	const [timer, setTimer] = useState<Count>({
		pomodoro: 10,
		shortBreak: 5,
		longBreak: 15,
	});

	useEffect(() => {
		htmlTag.setAttribute('data-font', currentFont);
		htmlTag.setAttribute('data-color', currentColor);
	}, [htmlTag, currentFont, currentColor]);

	return (
		<div className="App">
			<Header currentMode={currentMode} setCurrentMode={setCurrentMode} />
			<Timer timer={timer} currentMode={currentMode} />
			<Settings
				timer={timer}
				setTimer={setTimer}
				currentFont={currentFont}
				setCurrentFont={setCurrentFont}
				currentColor={currentColor}
				setCurrentColor={setCurrentColor}
			/>
		</div>
	);
}

export default App;
