import React from 'react';
import ReactDOM from 'react-dom';
import { types } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

import { NxAppStore, NxApp, makeInitSnapshot } from 'nexus/NxApp';

import { ContextualHeader } from 'nexorium/ui/ContextualHeader';
import { ContextualMenu } from 'nexorium/ui/ContextualMenu';
import { HomePage } from 'nexorium/contexts/home/Home';
import { AdminPage } from 'nexorium/contexts/admin/Admin';

import './Main.css';


// Models
// -------------------------------------------------------------------------------------------------------------

// ***** RootStore *****
// *********************

const TAG_RootStore = () => {}
const RootStore = types
	.model({
		'app': types.optional(NxAppStore, {}),
	})
	.views(self => ({

		get ajaxNexorium() {
			const app = self.app;
			// return app.getAjaxBase('nexorium');
			return '/';
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

			// A propos
			// if (navContext == 'about') {
			// 	app.navigate(app.aboutUrl, 'about');
			// }

		},

	}))


// Init
// -------------------------------------------------------------------------------------------------------------

// Contexts
// -

let contexts = {
	'home': HomePage,
	'admin': AdminPage,
}

// Popups
// -

let popups = {}

// Routes
// -

let routes = {
	'home': '/',
	'admin': '/admin',
}

// Store
// -

let initSnapshot = makeInitSnapshot(routes, {
	'app': {
		'theme': {
			'variant': 'light',
			'palette': {
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
