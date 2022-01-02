import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { Helper } from 'nexus/ui/helper/Helper';
import { HeaderTitle } from 'nexus/layout/header/Header';
import { MenuItem } from 'nexus/layout/menu/Menu';
import { Icon } from 'nexus/ui/icon/Icon';

import './Docs.css';


// Models
// -------------------------------------------------------------------------------------------------------------

// ***** DocsStore *****
// *********************

const TAG_DocsStore = () => {}
export const DocsStore = types
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

// ***** DocsHeaderLeft *****
// **************************

const TAG_DocsHeaderLeft = () => {}
export const DocsHeaderLeft = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// ...

	// Render
	// ==================================================================================================

	return (
		<HeaderTitle
			title="Documentation"
			titleStyle={{
				marginLeft: '10px',
			}}
		/>
	)
})

// ***** DocsHeaderRight *****
// ***************************

const TAG_DocsHeaderRight = () => {}
export const DocsHeaderRight = observer((props) => {

	// const store = React.useContext(window.storeContext);
	// const app = store.app;

	// ...

	// Render
	// ==================================================================================================

	return null;
})

// ***** DocsMenuItem *****
// ************************

const TAG_DocsMenuItem = () => {}
export const DocsMenuItem = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const menu = app.menu;

	// ...

	const docsContext = 'docs';

	// Evènements
	// ==================================================================================================

	const handleMenuItemClick = () => {
		store.navigateTo(docsContext);
		app.menu.close();
	}

	// Render
	// ==================================================================================================

	return (
		<MenuItem
			icon={<Icon name="menu_book" width="120px" />}
			label="Documentation"
			activeContexts={[docsContext]}
			callbackClick={handleMenuItemClick}
		/>
	)
})

// ***** DocsPage *****
// ********************

const TAG_DocsPage = () => {}
export const DocsPage = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// Renderers
	// ==================================================================================================

	const renderHelper = () => {

		// Render :: Helper
		// ---

		return (
			<Helper
				iconName="menu_book"
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
