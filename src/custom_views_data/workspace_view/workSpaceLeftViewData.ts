import { IOhaeViewOptions } from "src/core/OhaeViewOptions";
import { tabsViewData } from "../elements_views/tabsViewData";


export const workSpaceLeftViewData: IOhaeViewOptions = {
	view: 'layout',
	flex: 0,
	maxWidth: 440,
	minWidth: 30,
	overflow: 'hidden',
	backgroundColor: "#111",
	margin: 0,
	// align: 'center',
	// valign: 'center',
	body: tabsViewData
};
