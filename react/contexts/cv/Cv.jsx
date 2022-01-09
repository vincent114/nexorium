import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { Helper } from 'nexus/ui/helper/Helper';
import { HeaderTitle } from 'nexus/layout/header/Header';
import { MenuItem } from 'nexus/layout/menu/Menu';
import { Icon } from 'nexus/ui/icon/Icon';

import './Cv.css';


// Models
// -------------------------------------------------------------------------------------------------------------

// ***** CvStore *****
// *******************

const TAG_CvStore = () => {}
export const CvStore = types
	.model({
		loaded: false,
	})
	.actions(self => ({

		setField: (field, value) => {
			self[field] = value;
		},

		// -

		update: (raw) => {

		},

	}))


// Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------

// ***** CvHeaderLeft *****
// ************************

const TAG_CvHeaderLeft = () => {}
export const CvHeaderLeft = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// ...

	// Render
	// ==================================================================================================

	return (
		<HeaderTitle
			title="Mon CV"
			titleStyle={{
				marginLeft: '10px',
			}}
		/>
	)
})

// ***** CvHeaderRight *****
// *************************

const TAG_CvHeaderRight = () => {}
export const CvHeaderRight = observer((props) => {

	// const store = React.useContext(window.storeContext);
	// const app = store.app;

	// ...

	// Render
	// ==================================================================================================

	return null;
})

// ***** CvMenuItem *****
// **********************

const TAG_CvMenuItem = () => {}
export const CvMenuItem = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const menu = app.menu;

	// ...

	const cvContext = 'cv';

	// Evènements
	// ==================================================================================================

	const handleMenuItemClick = () => {
		store.navigateTo(cvContext);
		app.menu.close();
	}

	// Render
	// ==================================================================================================

	return (
		<MenuItem
			icon={<Icon name="school" width="120px" />}
			label="Mon CV"
			activeContexts={[cvContext]}
			callbackClick={handleMenuItemClick}
		/>
	)
})

// ***** CvPage *****
// ******************

const TAG_CvPage = () => {}
export const CvPage = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// Renderers
	// ==================================================================================================

	const renderHelper = () => {

		// Render :: Helper
		// ---

		return (
			<Helper
				iconName="school"
				show={true}
			/>
		)
	}

	return (
		<div className="nx-page">
			{renderHelper()}
		</div>
	)
})
