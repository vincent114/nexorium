import React from 'react';
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { Helper } from 'nexus/ui/helper/Helper';

import './Home.css';


// Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------

// ***** HomePage *****
// ********************

const TAG_HomePage = () => {}
export const HomePage = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// Renderers
	// ==================================================================================================

	const renderHelper = () => {

		// Render :: Helper
		// ---

		return (
			<Helper
				icon={<img className="nx-helper-icon" src="/static/favicons/android-icon-192x192.png" />}
				title="Bienvenue sur le Nexorium !"
				subtitle="Votre portail d'accès sur l'écosystème NxApp servant également de site portfolio."
				show={true}
				style={{
					maxWidth: '400px',
				}}
			/>
		)
	}

	return (
		<div className="nx-page">
			{renderHelper()}
		</div>
	)
})
