import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { Helper } from 'nexus/ui/helper/Helper';
import { HeaderTitle } from 'nexus/layout/header/Header';
import { MenuItem } from 'nexus/layout/menu/Menu';
import { Icon } from 'nexus/ui/icon/Icon';

import './Search.css';


// Models
// -------------------------------------------------------------------------------------------------------------

// ***** SearchStore *****
// ***********************

const TAG_SearchStore = () => {}
export const SearchStore = types
	.model({

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

// ***** SearchHeaderMiddle *****
// ******************************

const TAG_SearchHeaderMiddle = () => {}
export const SearchHeaderMiddle = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// ...

	// Render
	// ==================================================================================================

	return (
		<HeaderTitle
			title="Rechercher"
		/>
	)
})

// ***** SearchMenuItem *****
// **************************

const TAG_SearchMenuItem = () => {}
export const SearchMenuItem = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const menu = app.menu;

	// ...

	const searchContext = 'search';

	// Evènements
	// ==================================================================================================

	const handleMenuItemClick = () => {
		store.navigateTo(searchContext);
		app.menu.close();
	}

	// Render
	// ==================================================================================================

	return (
		<MenuItem
			icon={<Icon name="search" width="120px" />}
			label="Rechercher"
			activeContexts={[searchContext]}
			callbackClick={handleMenuItemClick}
		/>
	)
})

// ***** HomePage *****
// ********************

const TAG_SearchPage = () => {}
export const SearchPage = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// Renderers
	// ==================================================================================================

	const renderHelper = () => {

		// Render :: Helper
		// ---

		return (
			<Helper
				iconName="search"
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
