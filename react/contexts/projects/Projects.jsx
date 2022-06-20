import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { ProjectCard } from 'nexorium/components/cards/ProjectCard';

import { Helper } from 'nexus/ui/helper/Helper';

import { HeaderTitle } from 'nexus/layout/header/Header';
import { MenuItem } from 'nexus/layout/menu/Menu';
import { Row } from 'nexus/layout/row/Row';

import { Heading } from 'nexus/forms/heading/Heading';

import './Projects.css';


// Datas
// -------------------------------------------------------------------------------------------------------------

const PROJECTS_METAS = {

	// Support
	// -

	'nexus': {
		'completion': 50,
	},
	'cerberus': {
		'completion': 25,
	},

	// Vitrine
	// -

	'nexorium': {
		'completion': 15,
	},
	'nexora': {
		'completion': 15,
	},

	// Collections
	// -

	'gramophone_server': {
		'completion': 10,
	},
	'vgm': {
		'completion': 10,
	},
}


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

// ***** ProjectsHeaderRight *****
// *******************************

const TAG_ProjectsHeaderRight = () => {}
export const ProjectsHeaderRight = observer((props) => {

	// const store = React.useContext(window.storeContext);
	// const app = store.app;

	// ...

	// Render
	// ==================================================================================================

	return null;
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

	// Events
	// ==================================================================================================

	const handleMenuItemClick = () => {
		store.navigateTo(projectsContext);
		app.menu.close();
	}

	// Render
	// ==================================================================================================

	return (
		<MenuItem
			iconName="work_outline"
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
	const services = app.services;

	// From ... store


	// Renderers
	// ==================================================================================================

	const renderProjectsCards = (groupTitle, appKeys) => {

		// Render :: Project Card
		// ---

		let projectCards = [];
		for (const appKey of appKeys) {

			let serviceInfo = services.getServiceInfo(appKey);
			if (!serviceInfo) {
				continue;
			}

			// Project Metas
			let projectMetas = null;
			if (PROJECTS_METAS.hasOwnProperty(appKey)) {
				projectMetas = PROJECTS_METAS[appKey];
			}

			projectCards.push(
				<ProjectCard
					key={serviceInfo.app_id}
					serviceInfo={serviceInfo}
					projectMetas={projectMetas}
				/>
			)
		}
		return (
			<div>
				<Heading style={{
					marginBottom: '10px',
				}}>
					{groupTitle}
				</Heading>
				<div className="nm-projects-cards">
					{projectCards}
				</div>
			</div>
		);
	}

	return (
		<div>
			{renderProjectsCards("Support", [
				'nexus',
				'cerberus',
			])}
			{renderProjectsCards("Vitrine", [
				'nexorium',
				'nexora',
			])}
			{renderProjectsCards("Collections", [
				'gramophone',
				'vgm',
			])}
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
