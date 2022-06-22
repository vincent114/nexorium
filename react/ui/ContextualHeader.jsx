import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { Header } from 'nexus/layout/header/Header';
import { HomeHeaderMiddle } from 'nexus/contexts/home/Home';
import { SearchHeaderMiddle } from 'nexus/contexts/search/Search';

import {
	ProjectsHeaderLeft,
	ProjectsHeaderRight
} from 'nexorium/contexts/projects/Projects';
import {
	CvHeaderLeft,
	CvHeaderRight
} from 'nexorium/contexts/cv/Cv';
import {
	DocsHeaderLeft,
	DocsHeaderRight
} from 'nexorium/contexts/docs/Docs';


// Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------

// ***** ContextualHeader *****
// ****************************

const TAG_ContextualHeader = () => {}
export const ContextualHeader = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// From ... store

	const breakPoint650 = app.breakPoint650;
	const context = app.context;
	const staticMode = app.staticMode;
	const homeContext = app.homeContext;
	const authContext = app.authContext;

	// Render
	// ==================================================================================================

	let headerLeft = null;
	let headerMiddle = null;
	let headerRight = null;

	// -------------------------------------------------

	const renderHeaderHome = () => {

		if ([homeContext, authContext].indexOf(context) == -1 ) { return; }

		headerMiddle = <HomeHeaderMiddle />
	}

	const renderHeaderSearch = () => {

		if (staticMode || (breakPoint650 && context != 'search')) { return; }

		headerMiddle = <SearchHeaderMiddle />
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

	const renderHeaderDocs = () => {

		if (context != 'docs') { return; }

		headerLeft = <DocsHeaderLeft />
		headerRight = <DocsHeaderRight />
	}

	// -------------------------------------------------

	renderHeaderHome();
	renderHeaderSearch();

	renderHeaderProjects();
	renderHeaderCv();

	renderHeaderDocs();

	return (
		<Header
			left={headerLeft}
			right={headerRight}
			style={{
				backgroundColor: '#43a047',
			}}
		>
			{headerMiddle}
		</Header>
	)
})
