import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { Header } from 'nexus/layout/header/Header';
import { HomeHeaderMiddle } from 'nexus/contexts/home/Home';
import { AboutHeaderLeft } from 'nexus/contexts/about/About';
import { AdminHeaderLeft } from 'nexus/contexts/admin/Admin';
import { AccountHeaderLeft } from 'nexus/contexts/account/Account';

import { SearchHeaderMiddle } from 'nexorium/contexts/search/Search';
import { BlogHeaderLeft } from 'nexorium/contexts/blog/Blog';
import { ProjectsHeaderLeft } from 'nexorium/contexts/projects/Projects';
import { CvHeaderLeft } from 'nexorium/contexts/cv/Cv';
import { PlaygroundHeaderLeft } from 'nexorium/contexts/playground/Playground';


// Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------

// ***** ContextualHeader *****
// ****************************

const TAG_ContextualHeader = () => {}
export const ContextualHeader = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// From ... store

	const context = app.context;

	// Render
	// ==================================================================================================

	let headerLeft = null;
	let headerMiddle = null;
	let headerRight = null;

	// -------------------------------------------------

	const renderHeaderHome = () => {

		if ([app.homeContext, 'login'].indexOf(context) == -1 ) { return; }

		headerMiddle = <HomeHeaderMiddle />
	}

	const renderHeaderSearch = () => {

		if (context != 'search') { return; }

		headerMiddle = <SearchHeaderMiddle />
	}

	// -------------------------------------------------

	const renderHeaderBlog = () => {

		if (context != 'blog') { return; }

		headerLeft = <BlogHeaderLeft />
	}

	// -------------------------------------------------

	const renderHeaderProjects = () => {

		if (context != 'projects') { return; }

		headerLeft = <ProjectsHeaderLeft />
	}

	const renderHeaderCv = () => {

		if (context != 'cv') { return; }

		headerLeft = <CvHeaderLeft />
	}

	// -------------------------------------------------

	const renderHeaderPlayground = () => {

		if (context != 'playground') { return; }

		headerLeft = <PlaygroundHeaderLeft />
	}

	// -------------------------------------------------

	const renderHeaderAbout = () => {

		if (context != app.aboutContext) { return; }

		headerLeft = <AboutHeaderLeft />
	}

	const renderHeaderAdmin = () => {

		if (context != app.adminContext) { return; }

		headerLeft = <AdminHeaderLeft />
	}

	// -------------------------------------------------

	const renderHeaderAccount = () => {

		if (context != app.accountContext) { return; }

		headerLeft = <AccountHeaderLeft />
	}

	// -------------------------------------------------

	renderHeaderHome();
	renderHeaderSearch();

	renderHeaderBlog();

	renderHeaderProjects();
	renderHeaderCv();

	renderHeaderPlayground();

	renderHeaderAbout();
	renderHeaderAdmin();

	renderHeaderAccount();

	return (
		<Header
			left={headerLeft}
			right={headerRight}
		>
			{headerMiddle}
		</Header>
	)
})
