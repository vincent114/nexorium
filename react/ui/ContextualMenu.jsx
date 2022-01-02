import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import {
	MenuDivider,
	MenuItem,
	Menu
} from 'nexus/layout/menu/Menu';
import { HomeMenuItem } from 'nexus/contexts/home/Home';
import { NewslettersMenuItem } from 'nexus/contexts/newsletters/Newsletters';
import { AboutMenuItem } from 'nexus/contexts/about/About';
import { AdminMenuItem } from 'nexus/contexts/admin/Admin';
import {
	LoginMenuItem,
	LogoutMenuItem,
} from 'nexus/contexts/auth/Auth';
import { AccountMenuItem } from 'nexus/contexts/account/Account';
import { Icon } from 'nexus/ui/icon/Icon';

import { SearchMenuItem } from 'nexorium/contexts/search/Search';
import { BlogMenuItem } from 'nexorium/contexts/blog/Blog';
import { ProjectsMenuItem } from 'nexorium/contexts/projects/Projects';
import { CvMenuItem } from 'nexorium/contexts/cv/Cv';
import { PlaygroundMenuItem } from 'nexorium/contexts/playground/Playground';
import { DocsMenuItem } from 'nexorium/contexts/docs/Docs';


// Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------

// ***** NexoriumMenuItems *****
// *****************************

const TAG_NexoriumMenuItems = () => {}
export const NexoriumMenuItems = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// From ... store

	const breakPoint650 = app.breakPoint650;

	// Render
	// ==================================================================================================

	return (
		<React.Fragment>

			<HomeMenuItem />
			<SearchMenuItem />

			<MenuDivider />

			<BlogMenuItem />
			<NewslettersMenuItem />

			<MenuDivider>
				Vincent Boni
			</MenuDivider>

			<ProjectsMenuItem />
			<CvMenuItem />

			<MenuDivider>
				NxApp
			</MenuDivider>

			<PlaygroundMenuItem />
			<DocsMenuItem />

			<MenuDivider />

			<AboutMenuItem />
			<AdminMenuItem />

			{breakPoint650 && <MenuDivider />}

			<LoginMenuItem />
			<AccountMenuItem />
			<LogoutMenuItem />

		</React.Fragment>
	)
})

// ***** ContextualMenu *****
// **************************

const TAG_ContextualMenu = () => {}
export const ContextualMenu = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const account = app.account;

	// From ... store

	const context = app.context;
	const name = account.name;

	// Render
	// ==================================================================================================

	// Items
	// -

	const contextualMenuItems = {}

	let menuItems = null;
	if (contextualMenuItems.hasOwnProperty(context)) {
		const ContextualMenuItems = contextualMenuItems[context];
		menuItems = <ContextualDrawerItems />
	} else {
		menuItems = <NexoriumMenuItems />
	}

	// -------------------------------------------------

	return (
		<Menu
			title={name}
			{...props}
		>
			{menuItems}
		</Menu>
	)
})
