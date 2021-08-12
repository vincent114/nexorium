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
import { AboutMenuItem } from 'nexus/contexts/about/About';
import { AdminMenuItem } from 'nexus/contexts/admin/Admin';
import {
	LoginMenuItem,
	LogoutMenuItem,
} from 'nexus/contexts/login/Login';
import { AccountMenuItem } from 'nexus/contexts/account/Account';
import { Icon } from 'nexus/ui/icon/Icon';

import { SearchMenuItem } from 'nexorium/contexts/search/Search';
import { BlogMenuItem } from 'nexorium/contexts/blog/Blog';
import { ProjectsMenuItem } from 'nexorium/contexts/projects/Projects';
import { CvMenuItem } from 'nexorium/contexts/cv/Cv';
import { PlaygroundMenuItem } from 'nexorium/contexts/playground/Playground';


// Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------

// ***** ContextualMenu *****
// **************************

const TAG_ContextualMenu = () => {}
export const ContextualMenu = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// From ... store

	const context = app.context;
	const breakPoint650 = app.breakPoint650;

	// Render
	// ==================================================================================================

	// -------------------------------------------------

	// -------------------------------------------------

	return (
		<Menu>
			<HomeMenuItem />
			<SearchMenuItem />

			<MenuDivider />

			<BlogMenuItem />

			<MenuDivider />

			<ProjectsMenuItem />
			<CvMenuItem />

			<MenuDivider />

			<PlaygroundMenuItem />

			<MenuDivider />

			<AboutMenuItem />
			<AdminMenuItem />

			{breakPoint650 && <MenuDivider />}

			<LoginMenuItem />
			<AccountMenuItem />
			<LogoutMenuItem />

		</Menu>
	)
})
