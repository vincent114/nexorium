import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { Helper } from 'nexus/ui/helper/Helper';
import { HeaderTitle } from 'nexus/layout/header/Header';
import { MenuItem } from 'nexus/layout/menu/Menu';
import { Icon } from 'nexus/ui/icon/Icon';

import './Projects.css';


// Models
// -------------------------------------------------------------------------------------------------------------

// ***** ProjectsStore *****
// *************************

const TAG_ProjectsStore = () => {}
export const ProjectsStore = types
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

// ***** ProjectsHeaderLeft *****
// ******************************

const TAG_ProjectsHeaderLeft = () => {}
export const ProjectsHeaderLeft = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// ...

	// Render
	// ==================================================================================================

	return (
		<HeaderTitle
			title="Mes projets"
			titleStyle={{
				marginLeft: '10px',
			}}
		/>
	)
})

// ***** ProjectsMenuItem *****
// ****************************

const TAG_ProjectsMenuItem = () => {}
export const ProjectsMenuItem = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const menu = app.menu;

	// ...

	const projectsContext = 'projects';

	// Evènements
	// ==================================================================================================

	const handleMenuItemClick = () => {
		store.navigateTo(projectsContext);
		app.menu.close();
	}

	// Render
	// ==================================================================================================

	return (
		<MenuItem
			icon={<Icon name="work_outline" width="120px" />}
			label="Mes projets"
			activeContexts={[projectsContext]}
			callbackClick={handleMenuItemClick}
		/>
	)
})

// ***** RenderProjects *****
// **************************

const TAG_RenderProjects = () => {}
export const RenderProjects = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// From ... store


	// Renderers
	// ==================================================================================================

	return (
		<div>

		</div>
	)
})


// ***** ProjectsPage *****
// ************************

const TAG_ProjectsPage = () => {}
export const ProjectsPage = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// From ... store

	const initialized = app.initialized;

	// ...

	const showHelper = !initialized ? true : false;

	// Renderers
	// ==================================================================================================

	const renderPage = () => {

		// Render :: Page -> que quand l'app est intitialisée (pour useEffect)
		// ---

		let pageContent = null;
		if (initialized) {
			pageContent = <RenderProjects />
		}
		return pageContent;
	}

	const renderHelper = () => {

		// Render :: Helper
		// ---

		return (
			<Helper
				iconName="work_outline"
				show={showHelper}
			/>
		)
	}

	return (
		<div className="nx-page">
			{renderPage()}
			{renderHelper()}
		</div>
	)
})
