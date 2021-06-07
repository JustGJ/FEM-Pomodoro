import React, { useEffect } from 'react';

const Header = () => {
	const htmlTag: any | string = document.body.parentNode;

	useEffect(() => {
		htmlTag.setAttribute('data-color', 'salmon');
		htmlTag.setAttribute('data-font', 'kumbh-sans');
		console.log(htmlTag);
	}, [htmlTag]);

	return (
		<div className="header">
			<h1>pomodoro</h1>
			<div>
				<button>pomodoro</button>
				<button>short break</button>
				<button>long break</button>
			</div>
		</div>
	);
};

export default Header;
