import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { Helper } from 'nexus/ui/helper/Helper';
import { HeaderTitle } from 'nexus/layout/header/Header';
import { MenuItem } from 'nexus/layout/menu/Menu';
import { Icon } from 'nexus/ui/icon/Icon';

import './Playground.css';


// Models
// -------------------------------------------------------------------------------------------------------------

// ***** PlaygroundStore *****
// ***************************

const TAG_PlaygroundStore = () => {}
export const PlaygroundStore = types
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

// ***** PlaygroundHeaderLeft *****
// ********************************

const TAG_PlaygroundHeaderLeft = () => {}
export const PlaygroundHeaderLeft = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// ...

	// Render
	// ==================================================================================================

	return (
		<HeaderTitle
			title="Playground"
			titleStyle={{
				marginLeft: '10px',
			}}
		/>
	)
})

// ***** PlaygroundMenuItem *****
// ******************************

const TAG_PlaygroundMenuItem = () => {}
export const PlaygroundMenuItem = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const menu = app.menu;

	// ...

	const playgroundContext = 'playground';

	// Evènements
	// ==================================================================================================

	const handleMenuItemClick = () => {
		store.navigateTo(playgroundContext);
		app.menu.close();
	}

	// Render
	// ==================================================================================================

	return (
		<MenuItem
			icon={<Icon name="science" width="120px" />}
			label="Playground"
			activeContexts={[playgroundContext]}
			callbackClick={handleMenuItemClick}
		/>
	)
})

// ***** PlaygroundPage *****
// **************************

const TAG_PlaygroundPage = () => {}
export const PlaygroundPage = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// Renderers
	// ==================================================================================================

	const renderHelper = () => {

		// Render :: Helper
		// ---

		return (
			<Helper
				iconName="science"
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
