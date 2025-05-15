import { IOhaeViewOptions } from "src/core/OhaeViewOptions";
import { accordionViewData } from "./elements_views/accordionViewData";


export const rightPanelViewData: IOhaeViewOptions = {
	view: 'layout',
	rows: [
		{
			view: 'layout',
			minHeight: 0,
			cols: [
				{ view: 'layout', backgroundColor: '#393939', minWidth: 100, maxWidth: 200 },
				{ view: 'resizer' },
				{ view: 'layout', backgroundColor: '#393939', minWidth: 100, maxWidth: 300 },
				{ view: 'resizer' },
				{ view: 'layout', backgroundColor: '#393939', minWidth: 50, maxWidth: 70 },
				{ view: 'separator' },
				{ view: 'layout', backgroundColor: '#393939', minWidth: 100, maxWidth: 1000 },
				{ view: 'resizer' },
				{
					view: 'layout', backgroundColor: '#392929', minWidth: 200,
					overflowY: 'auto',
					body: "123<br>123<br>12345<hr>123<br>123<br>123<br>123"
				},
				{ view: 'resizer' },
				{ view: 'layout', backgroundColor: '#393939', minWidth: 50 },

			]
		},
		{ view: 'resizer' },
		{ view: 'layout' },
	]
};