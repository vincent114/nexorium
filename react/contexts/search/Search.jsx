import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { Helper } from 'nexus/ui/helper/Helper';
import { Icon } from 'nexus/ui/icon/Icon';

import './Search.css';


// Models
// -------------------------------------------------------------------------------------------------------------

// ***** SearchStore *****
// ***********************

const TAG_SearchStore = () => {}
export const SearchStore = types
	.model({
		query: '',

		results: types.frozen(null),
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

// ***** HomePage *****
// ********************

const TAG_SearchPage = () => {}
export const SearchPage = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	React.useEffect(() => {
		setTimeout(() => {
			document.getElementById('txt-main-search').focus();
		}, 100);
	}, []);

	// Renderers
	// ==================================================================================================

	const renderHelper = () => {

		// Render :: Helper
		// ---

		return (
			<Helper
				iconName="search"
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
