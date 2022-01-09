import React from 'react';
import ReactDOM from 'react-dom';
import { types } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

import { NxAppStore, NxApp, makeInitSnapshot } from 'nexus/NxApp';
import { NewslettersStore, NewslettersPage } from 'nexus/contexts/newsletters/Newsletters';

import { ContextualHeader } from 'nexorium/ui/ContextualHeader';
import { ContextualMenu } from 'nexorium/ui/ContextualMenu';
import { HomePage } from 'nexorium/contexts/home/Home';
import { SearchStore, SearchPage } from 'nexorium/contexts/search/Search';
import { BlogStore, BlogPage } from 'nexorium/contexts/blog/Blog';
import { ProjectsStore, ProjectsPage } from 'nexorium/contexts/projects/Projects';
import { CvStore, CvPage } from 'nexorium/contexts/cv/Cv';
import { DocsStore, DocsPage } from 'nexorium/contexts/docs/Docs';

import './Main.css';


// Models
// -------------------------------------------------------------------------------------------------------------

// ***** RootStore *****
// *********************

const TAG_RootStore = () => {}
const RootStore = types
	.model({
		'app': types.optional(NxAppStore, {}),

		// Search
		// -

		'search': types.optional(SearchStore, {}),

		// ---

		// Blog
		// -

		'blog': types.optional(BlogStore, {}),

		// Newsletters
		// -

		'newsletters': types.optional(NewslettersStore, {}),

		// ---

		// Mes projets
		// -

		'projects': types.optional(ProjectsStore, {}),

		// Mon CV
		// -

		'cv': types.optional(CvStore, {}),

		// ---

		// Documentation
		// -

		'docs': types.optional(DocsStore, {}),

	})
	.views(self => ({

		get ajaxNexorium() {
			const app = self.app;
			const services = app.services;
			return services.getAjaxBase('nexorium');
		},

	}))
	.actions(self => ({

		update: (datas) => {

			// Nexorium-specific init datas
			// ---

			console.log(datas);
		},

		navigateTo: (navContext, contextId, contextUrl, contextExtras, callback) => {

			// Herald own navigation function
			// ---

			const app = self.app;
			const context = app.context;

			// -

			// Mes projects
			if (navContext == 'projects') {
				app.navigate('/projects', 'projects', [
					{"op": "replace", "path": "/projects/loaded", "value": false},
				]);
			}

			// Mon CV
			if (navContext == 'cv') {
				app.navigate('/cv', 'cv', [
					{"op": "replace", "path": "/cv/loaded", "value": false},
				]);
			}

			// -

			// Docs
			if (navContext == 'docs') {
				app.navigate('/docs', 'docs', [
					{"op": "replace", "path": "/docs/loaded", "value": false},
				]);
			}

		},

	}))


// Init
// -------------------------------------------------------------------------------------------------------------

// Contexts
// -

let contexts = {
	'home': HomePage,
	'search': SearchPage,

	'projects': ProjectsPage,
	'cv': CvPage,

	'docs': DocsPage,
}

// Popups
// -

let popups = {}

// Routes
// -

let routes = {
	'projects': '/projects',
	'cv': '/cv',

	'docs': '/docs',
}

// Store
// -

let initSnapshot = makeInitSnapshot(routes, {
	'app': {
		'theme': {
			'variant': 'light',
			'palette': {
				'default': {
					'main': '#000000',
					'contrastText': '#fff',
				},
				'primary': {
					'main': '#8c9eff',
					'contrastText': '#fff',
				},
				'secondary': {
					'main': '#607d8b',
					'contrastText': '#fff',
				},
			}
		}
	}
});

export const rootStore = RootStore.create(initSnapshot);
export const RootStoreContext = React.createContext(rootStore);

window.store = rootStore;
window.storeContext = RootStoreContext;

rootStore.app.init(
	(datas) => {
		rootStore.update(datas);
	},
	popups,
	{}
);


// Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------

// ***** Root *****
// ****************

const TAG_Root = () => {}
const Root = observer(() => {

	// Render
	// ==================================================================================================

	return (
		<RootStoreContext.Provider value={rootStore}>
			<NxApp
				header={ContextualHeader}
				menu={ContextualMenu}
				contexts={contexts}
				popups={popups}
			/>
		</RootStoreContext.Provider>
	)
})


// DOM Ready
// --------------------------------------------------------------------------------------------------------------------------------------------

window.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Root></Root>,
		document.getElementById("nx-root")
	);
});
