import { IOhaeViewOptions } from "src/core/OhaeViewOptions";
import { inputsViewData } from "./elements_views/inputViewData";

export const inputFieldsetViewData: IOhaeViewOptions = {
	view: 'fieldset',
	header: 'параметры редактора',
	margin: '1px',
	// collapsed: true,
	// collapsable: false,
	inactionIcon: '🐽',
	rows: inputsViewData.rows,
};