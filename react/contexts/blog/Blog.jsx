import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { Helper } from 'nexus/ui/helper/Helper';
import { HeaderTitle } from 'nexus/layout/header/Header';
import { MenuItem } from 'nexus/layout/menu/Menu';

import './Blog.css';


// Models
// -------------------------------------------------------------------------------------------------------------

// ***** BlogStore *****
// *********************

const TAG_BlogStore = () => {}
export const BlogStore = types
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

// ***** BlogHeaderLeft *****
// **************************

const TAG_BlogHeaderLeft = () => {}
export const BlogHeaderLeft = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// ...

	// Render
	// ==================================================================================================

	return (
		<HeaderTitle
			title="Blog"
			titleStyle={{
				marginLeft: '10px',
			}}
		/>
	)
})

// ***** BlogHeaderRight *****
// ***************************

const TAG_BlogHeaderRight = () => {}
export const BlogHeaderRight = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// ...

	// Render
	// ==================================================================================================

	return null;
})

// ***** BlogMenuItem *****
// ************************

const TAG_BlogMenuItem = () => {}
export const BlogMenuItem = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const menu = app.menu;

	// ...

	const blogContext = app.blogContext;

	// Events
	// ==================================================================================================

	const handleMenuItemClick = () => {
		app.navigateTo(blogContext);
		app.menu.close();
	}

	// Render
	// ==================================================================================================

	return (
		<MenuItem
			iconName="forum"
			label="Blog"
			activeContexts={[blogContext]}
			callbackClick={handleMenuItemClick}
		/>
	)
})

// ***** BlogPage *****
// ********************

const TAG_BlogPage = () => {}
export const BlogPage = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// Renderers
	// ==================================================================================================

	const renderHelper = () => {

		// Render :: Helper
		// ---

		return (
			<Helper
				iconName="forum"
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
