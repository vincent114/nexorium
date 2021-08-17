import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { Helper } from 'nexus/ui/helper/Helper';
import { Icon } from 'nexus/ui/icon/Icon';
import { Button } from 'nexus/ui/button/Button';
import { HeaderTitle } from 'nexus/layout/header/Header';
import { MenuItem } from 'nexus/layout/menu/Menu';
import { Section } from 'nexus/layout/section/Section';
import { Row } from 'nexus/layout/row/Row';
import { AutocompleteStore, Field } from 'nexus/forms/field/Field';
import { uuid } from 'nexus/utils/Datas';

import './Playground.css';


// Models
// -------------------------------------------------------------------------------------------------------------

// ***** PlaygroundStore *****
// ***************************

const TAG_PlaygroundStore = () => {}
export const PlaygroundStore = types
	.model({
		value_text: types.maybeNull(types.string),
		value_number: types.maybeNull(types.integer),

		value_date: types.maybeNull(types.string),
		value_time: types.maybeNull(types.string),

		value_select: types.maybeNull(types.string),
		value_textarea: types.maybeNull(types.string),

		value_autocomplete_1: types.optional(AutocompleteStore, {}),
		value_autocomplete_2: types.optional(AutocompleteStore, {}),

		value_switcher: types.maybeNull(types.string),

		value_radio: types.maybeNull(types.string),
		value_checkbox: types.maybeNull(types.boolean),

		loaded: false,
	})
	.actions(self => ({

		setField: (field, value) => {
			self[field] = value;
		},

		// -

		update: (raw) => {

			console.log(raw);

			self.loaded = true;
		},

		load: () => {

			// Appel AJAX de la fonction de chargement des données de playground
			// ---

			const store = getRoot(self);
			const app = store.app;
			const snackbar = app.snackbar;

			const url = '/playground_actions/load';
			app.fetchJSON(url, null, false, 'POST').then(
				(json) => {
					self.update(json.playground_raw);
				}
			).catch(
				(ex) => {
					console.error(`Fetch failed for ${url}`, ex);
					snackbar.update(true, "Une erreur est survenue.", "error");
				}
			)
		},

	}))


// Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------

// ***** PlaygroundHeaderLeft *****
// ********************************

const TAG_PlaygroundHeaderLeft = () => {}
export const PlaygroundHeaderLeft = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// ...

	// Render
	// ==================================================================================================

	return (
		<HeaderTitle
			title="Playground"
			titleStyle={{
				marginLeft: '10px',
			}}
		/>
	)
})

// ***** PlaygroundMenuItem *****
// ******************************

const TAG_PlaygroundMenuItem = () => {}
export const PlaygroundMenuItem = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const menu = app.menu;

	// ...

	const playgroundContext = 'playground';

	// Evènements
	// ==================================================================================================

	const handleMenuItemClick = () => {
		store.navigateTo(playgroundContext);
		app.menu.close();
	}

	// Render
	// ==================================================================================================

	return (
		<MenuItem
			icon={<Icon name="science" width="120px" />}
			label="Playground"
			activeContexts={[playgroundContext]}
			callbackClick={handleMenuItemClick}
		/>
	)
})

// ***** RenderSectionFields *****
// *******************************

const TAG_RenderSectionFields = () => {}
export const RenderSectionFields = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const playground = store.playground;

	// From ... store

	const isLoading = app.isLoading;

	// Evènements
	// ==================================================================================================

	const handleTextFieldChange = (savePath, value) => {

		console.log('handleTextFieldChange');
		console.log(savePath);
		console.log(value);
	}

	const handleNumberFieldChange = (savePath, value) => {

		console.log('handleNumberFieldChange');
		console.log(savePath);
		console.log(value);
	}

	const handleDateFieldChange = (savePath, value) => {

		console.log('handleDateFieldChange');
		console.log(savePath);
		console.log(value);
	}

	const handleTimeFieldChange = (savePath, value) => {

		console.log('handleTimeFieldChange');
		console.log(savePath);
		console.log(value);
	}

	// -

	const handleSimulateLoad = (setLoad) => {

		// Sur click d'un bouton de simulation de traitement en tâche de fond
		// ---

		if (setLoad) {
			const task_id = uuid();
			app.addTask(task_id);
		} else {
			app.setField('tasks', []);
		}
	}

	const handleSimulateErrors = (putErrors) => {

		// Sur click d'un bouton de simulation d'erreurs fields
		// ---

		app.clearErrors();

		let errors = [];

		if (putErrors) {

			errors.push(app.addError(
				['playground', 'value_text'],
				'Fake error text',
			));

			errors.push(app.addError(
				['playground', 'value_number'],
				'Fake error number',
			));

			errors.push(app.addError(
				['playground', 'value_date'],
				'Fake error date',
			));

			errors.push(app.addError(
				['playground', 'value_time'],
				'Fake error time',
			));

			errors.push(app.addError(
				['playground', 'value_select'],
				'Fake error select',
			));

			errors.push(app.addError(
				['playground', 'value_textarea'],
				'Fake error textarea',
			));

			errors.push(app.addError(
				['playground', 'value_autocomplete_1', 'label'],
				'Fake error autocomplete',
			));

			errors.push(app.addError(
				['playground', 'value_autocomplete_2', 'label'],
				'Fake error autocomplete 2',
			));

			errors.push(app.addError(
				['playground', 'value_switcher'],
				'Fake error switcher',
			));

			errors.push(app.addError(
				['playground', 'value_radio'],
				'Fake error radio',
			));

			errors.push(app.addError(
				['playground', 'value_checkbox'],
				'Fake error checkbox',
			));
		}
		return errors;
	}

	// Render
	// ==================================================================================================


	// Section -> Content
	// ---

	const sectionContent = (
		<React.Fragment>
			<Row>

				<Field
					id="txt-field-text"
					component='input'
					label='Texte'
					savePath={['playground', 'value_text']}
					callbackChange={handleTextFieldChange}
					disabled={isLoading}
				/>

				<Field
					id="txt-field-number"
					component='input'
					label='Nombre'
					type='number'
					savePath={['playground', 'value_number']}
					callbackChange={handleNumberFieldChange}
					disabled={isLoading}
				/>

			</Row>

			<Row>

				<Field
					id="txt-field-date"
					component='input'
					label='Date'
					type='date'
					// placeholder='jj/mm/aaaa'
					savePath={['playground', 'value_date']}
					callbackChange={handleDateFieldChange}
					disabled={isLoading}
				/>

				<Field
					id="txt-field-time"
					component='input'
					label='Time'
					type='time'
					// placeholder='hh:mm'
					savePath={['playground', 'value_time']}
					callbackChange={handleTimeFieldChange}
					disabled={isLoading}
				/>

			</Row>
		</React.Fragment>
	)

	// Section -> Buttons
	// ---

	const sectionButtons = [
		<Button
			key="btn-fields-load"
			variant="contained"
			color="secondary"
			onClick={() => handleSimulateLoad(true)}
			disabled={isLoading}
		>
			Load
		</Button>,
		<Button
			key="btn-fields-cancel"
			variant="contained"
			color="secondary"
			onClick={() => handleSimulateLoad(false)}
			disabled={!isLoading}
		>
			Cancel
		</Button>,
		<Button
			key="btn-fields-error"
			variant="contained"
			color="secondary"
			onClick={() => handleSimulateErrors(true)}
			disabled={isLoading}
		>
			Error
		</Button>,
		<Button
			key="btn-fields-clear"
			variant="contained"
			color="secondary"
			onClick={() => handleSimulateErrors(false)}
			disabled={isLoading}
		>
			Clear
		</Button>
	]

	return (
		<Section
			icon={<Icon name="text_fields" />}
			title="Fields"
			buttons={sectionButtons}
			buttonsResponsive={true}
		>
			{sectionContent}
		</Section>
	)
})

// ***** RenderPlayground *****
// ****************************

const TAG_RenderPlayground = () => {}
export const RenderPlayground = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const playground = store.playground;

	// From ... store

	const loaded = playground.loaded;

	// ...

	React.useEffect(() => {
		if (!loaded) {
			playground.load();
		}
	}, [loaded]);

	// Render
	// ==================================================================================================

	let contentPlayground = null;
	if (loaded) {
		contentPlayground = (
			<React.Fragment>
				<RenderSectionFields />
			</React.Fragment>
		)
	}
	return contentPlayground;
})

// ***** PlaygroundPage *****
// **************************

const TAG_PlaygroundPage = () => {}
export const PlaygroundPage = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const playground = store.playground;

	// From ... store

	const initialized = app.initialized;
	const loaded = playground.loaded;

	// ...

	const showHelper = (!initialized || !loaded) ? true : false;

	// Renderers
	// ==================================================================================================

	const renderPage = () => {

		// Render :: Page -> que quand l'app est intitialisée (pour useEffect)
		// ---

		let pageContent = null;
		if (initialized) {
			pageContent = <RenderPlayground />
		}
		return pageContent;
	}

	const renderHelper = () => {

		// Render :: Helper
		// ---

		return (
			<Helper
				iconName="science"
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
