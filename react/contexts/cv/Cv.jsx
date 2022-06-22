import React from 'react';
import { types, getRoot } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { HeaderTitle } from 'nexus/layout/header/Header';
import { MenuItem } from 'nexus/layout/menu/Menu';
import { Section } from 'nexus/layout/section/Section';

import { Helper } from 'nexus/ui/helper/Helper';
import { Icon } from 'nexus/ui/icon/Icon';
import { Typography } from 'nexus/ui/typography/Typography';
import { Button } from 'nexus/ui/button/Button';
import { Alert } from 'nexus/ui/alert/Alert';

import './Cv.css';


// Models
// -------------------------------------------------------------------------------------------------------------

// ***** CvStore *****
// *******************

const TAG_CvStore = () => {}
export const CvStore = types
	.model({
		loaded: false,
	})
	.views(self => ({

		get pdfUrl() {
			const store = getRoot(self);
			const app = store.app;
			const services = app.services;

			const me = services.me;
			const staticMode = app.staticMode;
			const external = self.external;

			if (staticMode) {
				return `${me.app_key}/static/files/vincent_boni_cv_2022.pdf`;
			}
			return `${external}/static/files/vincent_boni_cv_2022.pdf`;
		},

	}))
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

// ***** CvHeaderLeft *****
// ************************

const TAG_CvHeaderLeft = () => {}
export const CvHeaderLeft = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// ...

	// Render
	// ==================================================================================================

	return (
		<HeaderTitle
			title="Mon CV"
			titleStyle={{
				marginLeft: '10px',
			}}
		/>
	)
})

// ***** CvHeaderRight *****
// *************************

const TAG_CvHeaderRight = () => {}
export const CvHeaderRight = observer((props) => {

	// const store = React.useContext(window.storeContext);
	// const app = store.app;

	// ...

	// Render
	// ==================================================================================================

	return null;
})

// ***** CvMenuItem *****
// **********************

const TAG_CvMenuItem = () => {}
export const CvMenuItem = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const menu = app.menu;

	// ...

	const cvContext = 'cv';

	// Events
	// ==================================================================================================

	const handleMenuItemClick = () => {
		store.navigateTo(cvContext);
		app.menu.close();
	}

	// Render
	// ==================================================================================================

	return (
		<MenuItem
			iconName="school"
			label="Mon CV"
			activeContexts={[cvContext]}
			callbackClick={handleMenuItemClick}
		/>
	)
})

// ***** RenderSectionCvDownload *****
// ***********************************

const TAG_RenderSectionCvDownload = () => {}
export const RenderSectionCvDownload = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;
	const cv = store.cv;

	// From ... store

	const isLoading = app.isLoading;
	const pdfUrl = cv.pdfUrl;

	// From ... props

	let style = (props.style) ? props.style : {};

	// ...

	// Render
	// ==================================================================================================

	// Section -> Title
	// -------------------------------------------------

	const sectionTitle = "Télécharger";

	// Section -> Icon
	// -------------------------------------------------

	const sectionIcon = <Icon name="file_download" />

	// Section -> Content
	// -------------------------------------------------

	const sectionContent = (
		<React.Fragment>
			<Button
				variant="outlined"
				color="primary"
				href={pdfUrl}
				target="_blank"
				startAdornment="picture_as_pdf"
			>
				Curriculum vitae - Vincent Boni
			</Button>
		</React.Fragment>
	)

	// -------------------------------------------------

	return (
		<Section
			icon={sectionIcon}
			title={sectionTitle}
			style={style}
		>
			{sectionContent}
		</Section>
	)
})

// ***** CvPage *****
// ******************

const TAG_CvPage = () => {}
export const CvPage = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// Renderers
	// ==================================================================================================

	const renderHelper = () => {

		// Render :: Helper
		// ---

		const helperTitle = "Bonjour !";
		const helperSubtitle = (
			<div>
				Merci d'être venu jusqu'ici. L'informatique est ma passion depuis que je suis tout petit, probablement depuis que mon père a acheté un Atari STE 1040 quand j'avais 5 ans 👶.<br/>
				<br/>
				Fort heureusement, mon parcours m'a ammené à travailler dans le développement. De nos jours, les technologies du WEB offrent aux développeurs un pouvoir de création très puissant avec lequel nous pouvons forger des outils fantastiques 🛠🤩.
			</div>
		)

		return (
			<Helper
				iconName="school"
				title={helperTitle}
				subtitle={helperSubtitle}
				show={true}
				inFlux={true}
			>
				<RenderSectionCvDownload
					style={{
						marginTop: '30px',
					}}
				/>
			</Helper>
		)
	}

	return (
		<div className="nx-page">
			{renderHelper()}
		</div>
	)
})
