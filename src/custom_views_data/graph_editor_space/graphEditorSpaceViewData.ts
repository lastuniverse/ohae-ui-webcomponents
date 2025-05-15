import { IOhaeViewOptions } from "src/core/OhaeViewOptions";
import { workSpaceCenterViewData } from "../workspace_view/workSpaceCenterViewData";
import { workSpaceRightViewData } from "../workspace_view/workSpaceRightViewData";
import { graphEditorViewData } from "./graphEditorViewData";
import { graphEditorRightViewData } from "./graphEditorRightViewData";


export const graphEditorSpaceViewData: IOhaeViewOptions = {
	view: 'layout',
	padding: 0,
	cols: [
		graphEditorViewData,
		{ view: 'resizer' },
		graphEditorRightViewData,
	]
};

