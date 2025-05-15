import { IOhaeViewOptions } from "src/core/OhaeViewOptions";
import { codeEditorParamsPanelViewData, codeEditorRightViewData } from "./codeEditorRightViewData";
import { codeEditorViewData } from "./codeEditorViewData";

export const codeEditorSpaceViewData: IOhaeViewOptions = {
	view: 'layout',
	padding: 0,
	// backgroundColor: '#411',
	cols: [
		codeEditorViewData,
		{ view: 'resizer' },
		codeEditorParamsPanelViewData,
	],
};