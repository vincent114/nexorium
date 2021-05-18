import React from 'react';
import ReactDOM from 'react-dom';

import './Main.css';


// ***** Root *****
// ****************

const TAG_AppRoot = () => {}
export const AppRoot = (props) => {

	// Render
	// ==================================================================================================

	return (
		<div>
			Nexorium (from React.js)
		</div>
	)
}

// DOM Ready
// --------------------------------------------------------------------------------------------------------------------------------------------

window.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<AppRoot></AppRoot>,
		document.getElementById("react-root")
	);
});
