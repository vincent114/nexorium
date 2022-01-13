import React from 'react';
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { NavCard } from 'nexus/components/cards/NavCard';

import { Heading } from 'nexus/forms/heading/Heading';

import { Row } from 'nexus/layout/row/Row';

import { Helper } from 'nexus/ui/helper/Helper';

import './Home.css';


// Functions Components ReactJS
// -------------------------------------------------------------------------------------------------------------

// ***** RenderHomeGrid *****
// **************************

const TAG_RenderHomeGrid = () => {}
export const RenderHomeGrid = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// Renderers
	// ==================================================================================================

	// HomeGrid -> Mes projets
	// ---

	const navCardProjects = (
		<NavCard
			key="nav-card-projets"
			icon="work_outline"
			label="Découvrez tout ce que je développe en cliquant ici"
			variant="list"
			onClick={() => store.navigateTo('projects')}
			style={{
				marginTop: '10px',
			}}
		/>
	)

	// HomeGrid -> Mon CV
	// ---

	const navCardCv = (
		<NavCard
			key="nav-card-cv"
			icon="school"
			label="Consultez mon curriculum vitae en cliquant ici"
			variant="list"
			onClick={() => store.navigateTo('cv')}
			style={{
				marginTop: '10px',
			}}
		/>
	)

	// HomeGrid -> Playground
	// ---

	const navCardPlayground = (
		<NavCard
			key="nav-card-playground"
			icon="science"
			label="Découvrez-en le terrain d'essai en cliquant ici"
			variant="list"
			onClick={() => app.navigateTo('playground')}
			style={{
				marginTop: '10px',
			}}
		/>
	)

	// ==================================================================================================

	return (
		<div
			style={{
				marginTop: '40px',
			}}
		>

			<Heading>
				Mais quels sont ces projets ?
			</Heading>
			<Row responsive={false}>
				{navCardProjects}
			</Row>

			<br/>

			<Heading>
				Vous souhaitez en apprendre plus sur moi ?
			</Heading>
			<Row responsive={false}>
				{navCardCv}
			</Row>

			<br/>

			<Heading>
				De quoi est fait ce site ?
			</Heading>
			<Row responsive={false}>
				{navCardPlayground}
			</Row>

		</div>
	)
})

// ***** HomePage *****
// ********************

const TAG_HomePage = () => {}
export const HomePage = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// Renderers
	// ==================================================================================================

	const renderHelper = () => {

		// Render :: Helper
		// ---

		return (
			<Helper
				// icon={<img className="nx-helper-icon" src="/static/favicons/android-icon-192x192.png" />}
				icon={<img className="nx-helper-icon" src="/static/img/myself.png" />}
				title="Bienvenue !"
				subtitle={(
					<div>
						Je m'appelle <b>Vincent Boni</b> et ceci est le portail d'accès vers tous mes projets 🙂<br/>
						<i style={{
							marginTop: '5px',
							display: 'block',
						}}>
							(cliquez sur une des catégories ci-dessous pour en apprendre plus)
						</i>
					</div>
				)}
				show={true}
				inFlux={true}
				style={{
					maxWidth: '600px',
				}}
			>
				<RenderHomeGrid />
			</Helper>
		)
	}

	return (
		<div className="nx-page">
			{renderHelper()}
		</div>
	)
})
