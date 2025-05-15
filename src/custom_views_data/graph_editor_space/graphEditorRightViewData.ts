import { IOhaeViewOptions } from "src/core/OhaeViewOptions";
import { accordionViewData } from "../elements_views/accordionViewData";
import { datatableViewData } from "../elements_views/datatableViewData";
import { graphEditorParamsPanelViewData } from "./graphEditorParamsPanelViewData";
import { graphEditorElementsPanelViewData } from "./graphEditorElementsPanelViewData";

export const graphEditorRightViewData: IOhaeViewOptions = {
	view: 'layout',
	// flex: 3,
	width: 600,
	minWidth: 30,
	backgroundColor: "#222",
	padding: 0,
	rows: [
		{
			view: 'layout',
			minHeight: 30,
			body: graphEditorElementsPanelViewData,
		},
		{ view: 'resizer' },
		{
			view: 'layout',
			flex: 2,
			minHeight: 30,
			overflow: 'hidden',
			body: graphEditorParamsPanelViewData,
		},
		
		// { view: 'resizer' },
		// {flex: 0}
	],
	stated: {
		'flex': 'ui.graphEditor.rightPanel.attributes.flex'
	}
	// {
	// 	// view: 'img',
	// 	// src: './assets/logo_512.png',
	// 	// alt: 'codeEditorRightViewData'
	// }

};

