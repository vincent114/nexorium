import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { Helper } from 'nexus/ui/helper/Helper';
import { Icon } from 'nexus/ui/icon/Icon';
import { IconButton, Button } from 'nexus/ui/button/Button';
import { HeaderTitle, HeaderDivider } from 'nexus/layout/header/Header';
import { MenuItem } from 'nexus/layout/menu/Menu';
import { Section } from 'nexus/layout/section/Section';
import { Row } from 'nexus/layout/row/Row';
import { AutocompleteStore, Field } from 'nexus/forms/field/Field';
import { Heading } from 'nexus/forms/heading/Heading';
import { Indicator } from 'nexus/forms/indicator/Indicator';
import { uuid } from 'nexus/utils/Datas';

import './Playground.css';


// Datas
// -------------------------------------------------------------------------------------------------------------

const CHOICES_TEST = [
	{
		'value': 'choix_1',
		'label': 'Choix 1',
	},
	{
		'value': 'choix_2',
		'label': 'Choix 2',
	},
	{
		'value': 'choix_3',
		'label': 'Choix 3',
	},
]


// Models
// -------------------------------------------------------------------------------------------------------------

// ***** PlaygroundStore *****
// ***************************

const TAG_PlaygroundStore = () => {}
export const PlaygroundStore = types
	.model({
		doc_id: '',
		doc_rev: '',
		doc_state: 0,

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

		// -

		value_html: types.maybeNull(types.string),

		// -

		loaded: false,
	})
	.actions(self => ({

		setField: (field, value) => {
			self[field] = value;
		},

		// -

		update: (raw) => {

			console.log(raw);

			self.doc_id = raw.doc_id;
			self.doc_rev = raw.doc_rev;
			self.doc_state = raw.doc_state;

			self.value_text = raw.value_text;
			self.value_number = raw.value_number;

			self.value_date = raw.value_date;
			self.value_time = raw.value_time;

			self.value_select = raw.value_select;
			self.value_textarea = raw.value_textarea;

			self.value_autocomplete_1 = AutocompleteStore.create({});
			self.value_autocomplete_1.update(raw.value_autocomplete_1);

			self.value_autocomplete_2 = AutocompleteStore.create({});
			self.value_autocomplete_2.update(raw.value_autocomplete_2);

			self.value_switcher = raw.value_switcher;

			self.value_radio = raw.value_radio;
			self.value_checkbox = raw.value_checkbox;

			self.value_html = raw.value_html;

			self.loaded = true;
		},

		load: () => {

			// Appel AJAX de la fonction de chargement des données de playground
			// ---

			const store = getRoot(self);
			const app = store.app;
			const snackbar = app.snackbar;
			const ajaxNexorium = store.ajaxNexorium;

			const url = `${ajaxNexorium}/playground_actions/load`;
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

		validate: (callback) => {

			// Validation des données du playground
			// ---

			const store = getRoot(self);
			const app = store.app;

			let errors = [];

			if (callback) {
				callback(errors);
			}
			return errors;
		},

		save: () => {

			// Appel AJAX de la fonction d'enregistrement du playground
			// ---

			const store = getRoot(self);
			const app = store.app;
			const snackbar = app.snackbar;
			const ajaxNexorium = store.ajaxNexorium;

			let params = new FormData();
			params.append('playground_raw', JSON.stringify(self.toJSON()));

			const url = `${ajaxNexorium}/playground_actions/save`;
			app.fetchJSON(url, {'body': params}, false, 'POST').then(
				(json) => {
					self.update(json.playground_raw);
					snackbar.update(true, "Enregistrement effectué.", "success");
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

// ***** PlaygroundHeaderRight *****
// *********************************

const TAG_PlaygroundHeaderRight = () => {}
export const PlaygroundHeaderRight = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const playground = store.playground;

	// From ... store

	const isLoading = app.isLoading;

	// ...

	// Evènements
	// ==================================================================================================

	const handleSaveClick = () => {
		playground.validate((errors) => {
			if (errors.length == 0) {
				playground.save();
			}
		});
	}

	// Render
	// ==================================================================================================

	return (
		<React.Fragment>
			<IconButton
				onClick={() => handleSaveClick()}
				disabled={isLoading}
				title="Enregistrer"
			>
				<Icon
					name="save"
					color="white"
				/>
			</IconButton>
			<HeaderDivider />
		</React.Fragment>
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

	const handleSelectFieldChange = (savePath, value) => {

		console.log('handleSelectFieldChange');
		console.log(savePath);
		console.log(value);
	}

	const handleTextareaFieldChange = (savePath, value) => {

		console.log('handleTextareaFieldChange');
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

			<Row>

				<Field
					id="lst-field-select"
					component='select'
					label='Select'
					datas={CHOICES_TEST}
					savePath={['playground', 'value_select']}
					callbackChange={handleSelectFieldChange}
					disabled={isLoading}
					canBeEmpty={true}
				/>

				<Field
					id="txt-field-textarea"
					component='textarea'
					label='Textarea'
					savePath={['playground', 'value_textarea']}
					callbackChange={handleTextareaFieldChange}
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

// ***** RenderSectionSnackbars *****
// **********************************

const TAG_RenderSectionSnackbars = () => {}
export const RenderSectionSnackbars = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const snackbar = app.snackbar;
	const playground = store.playground;

	// From ... store

	const isLoading = app.isLoading;

	// Evènements
	// ==================================================================================================

	const handleSnackbar = (severity) => {
		snackbar.update(
			true,
			<div>Test de snackbar <b>{severity}</b></div>,
			severity,
		)
	}

	// Render
	// ==================================================================================================

	// Section -> Buttons
	// ---

	const sectionButtons = [
		<Button
			key="btn-snackbars-default"
			variant="outlined"
			color="primary"
			onClick={() => handleSnackbar('default')}
			disabled={isLoading}
		>
			Default
		</Button>,
		<Button
			key="btn-snackbars-success"
			variant="outlined"
			color="primary"
			onClick={() => handleSnackbar('success')}
			disabled={isLoading}
		>
			Success
		</Button>,
		<Button
			key="btn-snackbars-info"
			variant="outlined"
			color="primary"
			onClick={() => handleSnackbar('info')}
			disabled={isLoading}
		>
			Info
		</Button>,
		<Button
			key="btn-snackbars-warning"
			variant="outlined"
			color="primary"
			onClick={() => handleSnackbar('warning')}
			disabled={isLoading}
		>
			Warning
		</Button>,
		<Button
			key="btn-snackbars-error"
			variant="outlined"
			color="primary"
			onClick={() => handleSnackbar('error')}
			disabled={isLoading}
		>
			Error
		</Button>
	]

	return (
		<Section
			icon={<Icon name="feedback_black" />}
			title="Snackbars"
			buttons={sectionButtons}
			buttonsResponsive={true}
		></Section>
	)
})

// ***** RenderSectionIndicators *****
// ***********************************

const TAG_RenderSectionIndicators = () => {}
export const RenderSectionIndicators = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const snackbar = app.snackbar;
	const playground = store.playground;

	// From ... store

	const isLoading = app.isLoading;

	// Render
	// ==================================================================================================

	// Section -> Content
	// ---

	const sectionContent = (
		<React.Fragment>

		<Heading style={{marginBottom: '10px'}}>
			Default
		</Heading>

		<Row>
			<Indicator
				color="primary"
			>
				primary
			</Indicator>
			<Indicator
				color="secondary"
			>
				secondary
			</Indicator>
			<Indicator
				color="#009688"
			>
				custom
			</Indicator>
			<Indicator
				severity="default"
			>
				default
			</Indicator>
			<Indicator
				severity="success"
			>
				success
			</Indicator>
			<Indicator
				severity="info"
			>
				info
			</Indicator>
			<Indicator
				severity="warning"
			>
				warning
			</Indicator>
			<Indicator
				severity="error"
			>
				error
			</Indicator>
			<Indicator
				severity="hot"
			>
				hot
			</Indicator>
		</Row>

		<Heading style={{marginBottom: '10px'}}>
			Contrasted
		</Heading>

		<Row>
			<Indicator
				color="primary"
				variant="contrasted"
			>
				primary
			</Indicator>
			<Indicator
				color="secondary"
				variant="contrasted"
			>
				secondary
			</Indicator>
			<Indicator
				color="#009688"
				variant="contrasted"
			>
				custom
			</Indicator>
			<Indicator
				severity="default"
				variant="contrasted"
			>
				default
			</Indicator>
			<Indicator
				severity="success"
				variant="contrasted"
			>
				success
			</Indicator>
			<Indicator
				severity="info"
				variant="contrasted"
			>
				info
			</Indicator>
			<Indicator
				severity="warning"
				variant="contrasted"
			>
				warning
			</Indicator>
			<Indicator
				severity="error"
				variant="contrasted"
			>
				error
			</Indicator>
			<Indicator
				severity="hot"
				variant="contrasted"
			>
				hot
			</Indicator>
		</Row>

		<Heading style={{marginBottom: '10px'}}>
			Outlined
		</Heading>

		<Row>
			<Indicator
				color="primary"
				variant="outlined"
			>
				primary
			</Indicator>
			<Indicator
				color="secondary"
				variant="outlined"
			>
				secondary
			</Indicator>
			<Indicator
				color="#009688"
				variant="outlined"
			>
				custom
			</Indicator>
			<Indicator
				severity="default"
				variant="outlined"
			>
				default
			</Indicator>
			<Indicator
				severity="success"
				variant="outlined"
			>
				success
			</Indicator>
			<Indicator
				severity="info"
				variant="outlined"
			>
				info
			</Indicator>
			<Indicator
				severity="warning"
				variant="outlined"
			>
				warning
			</Indicator>
			<Indicator
				severity="error"
				variant="outlined"
			>
				error
			</Indicator>
			<Indicator
				severity="hot"
				variant="outlined"
			>
				hot
			</Indicator>
		</Row>

		</React.Fragment>
	)

	return (
		<Section
			icon={<Icon name="palette" />}
			title="Indicateurs"
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
				<br/>
				<RenderSectionSnackbars />
				<br/>
				<RenderSectionIndicators />
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
