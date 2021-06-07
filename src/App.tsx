import React, { useState } from 'react';
import Header from './components/Header';
import Settings from './components/Settings';
import Timer from './components/Timer';

function App() {
	return (
		<div className="App">
			<Header />
			<Timer />
			<Settings />
		</div>
	);
}

export default App;
