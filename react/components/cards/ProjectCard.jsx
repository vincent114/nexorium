import React from 'react';
import { types, getParent } from "mobx-state-tree";
import { observer } from "mobx-react-lite";
import clsx from 'clsx';

import { Row } from 'nexus/layout/row/Row';

import { Paper } from 'nexus/ui/paper/Paper';
import { Icon } from 'nexus/ui/icon/Icon';
import { Typography } from 'nexus/ui/typography/Typography';

import './ProjectCard.css';


// Functions Components ReactJS
// ----------------------------------------------------------------------------------------------------------------------------

// ***** ProjectCard *****
// ***********************

const TAG_ProjectCard = () => {}
export const ProjectCard = observer((props) => {

	const store = React.useContext(window.storeContext);
	const app = store.app;

	// From ... props

	const serviceInfo = props.serviceInfo;
	const projectMetas = props.projectMetas;

	// ...

	const appId = serviceInfo.app_id;
	const name = serviceInfo.name;
	const description = serviceInfo.description;

	const externalUrl = serviceInfo.getExternalUrl();

	// Events
	// ==================================================================================================

	const handleClick = () => {

		// Sur click de la carte
		// ---

		if (externalUrl) {
			app.gotoExternal(externalUrl);
		}
	}

	// Render
	// ==================================================================================================

	return (
		<Paper
			hoverable={(externalUrl) ? true : false}
			className={clsx(
				"nm-projet-card",
				{"clickable": externalUrl},
			)}
			onClick={() => handleClick()}
		>
			<Row align="center">
				<div className="nm-project-thumbnail">
					<Icon name="extension" />
				</div>
				<div>
					<Typography variant="title">
						{name}
					</Typography>
					<Typography variant="description">
						{description}
					</Typography>
				</div>
				{externalUrl && (
					<div className="nm-project-launch">
						<Icon
							name="launch"
							color="info"
						/>
					</div>
				)}
			</Row>
		</Paper>
	)
})
