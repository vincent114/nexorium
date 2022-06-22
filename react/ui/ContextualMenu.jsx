import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import {
	MenuDivider,
	MenuItem,
	Menu
} from 'nexus/layout/menu/Menu';
import { PortalMenuItem } from 'nexus/contexts/portal/Portal';
import { HomeMenuItem } from 'nexus/contexts/home/Home';
import { SearchMenuItem } from 'nexus/contexts/search/Search';
import { NewslettersMenuItem } from 'nexus/contexts/newsletters/Newsletters';
import { AboutMenuItem } from 'nexus/contexts/about/About';
import { PreferencesMenuItem } from 'nexus/contexts/preferences/Preferences';
import { AdminMenuItem } from 'nexus/contexts/admin/Admin';
import { PlaygroundMenuItem } from 'nexus/contexts/playground/Playground';
import {
	LoginMenuItem,
	LogoutMenuItem,
} from 'nexus/contexts/auth/Auth';
import { AccountMenuItem } from 'nexus/contexts/account/Account';
import { Icon } from 'nexus/ui/icon/Icon';

import { BlogMenuItem } from 'nexorium/contexts/blog/Blog';
import { ProjectsMenuItem } from 'nexorium/contexts/projects/Projects';
import { CvMenuItem } from 'nexorium/contexts/cv/Cv';
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

	const staticMode = app.staticMode;
	const breakPoint650 = app.breakPoint650;

	// Render
	// ==================================================================================================

	return (
		<React.Fragment>

			{!staticMode && <PortalMenuItem />}
			<HomeMenuItem />
			{!staticMode && <SearchMenuItem />}

			{breakPoint650 && <MenuDivider />}

			{!staticMode && <BlogMenuItem />}
			{!staticMode && <NewslettersMenuItem />}

			{!staticMode && <MenuDivider />}

			{!staticMode && <ProjectsMenuItem />}
			<CvMenuItem />

			<MenuDivider />

			<PlaygroundMenuItem />
			{!staticMode && <DocsMenuItem />}

			<MenuDivider />

			<AboutMenuItem />
			{!staticMode && <PreferencesMenuItem />}
			{!staticMode && <AdminMenuItem />}

			{breakPoint650 && <MenuDivider />}

			{!staticMode && <LoginMenuItem />}
			{!staticMode && <AccountMenuItem />}
			{!staticMode && <LogoutMenuItem />}

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
