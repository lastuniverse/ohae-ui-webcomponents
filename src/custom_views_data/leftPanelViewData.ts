import { IOhaeViewOptions } from "src/core/OhaeViewOptions";
import { accordionViewData } from "./elements_views/accordionViewData";

export const leftPanelViewData: IOhaeViewOptions = {
	view: 'layout',
	flex: 0,
	minWidth: 410, maxWidth: 1027,
	backgroundColor: '#333',
	overflow: 'hidden',
	padding: 3,
	rows: [
		// {
		// 	view: 'layout',
		// 	flex: 0,
		// 	overflow: 'hidden',
		// 	margin: 0,
		// 	maxHeight: 288,
		// 	align: 'center',
		// 	// valign: 'center',
		// 	body: `<image src='./assets/start_room.png'>`
		// },
		// { view: 'resizer' },
		accordionViewData,
		// inputFieldsetViewData,
		// { view: 'separator', size: 1, margin: 0 },
		{
			view: 'button',
			// flex: 0,
			// margin: 2,				
			// height: 148,
			// maxHeight: 26,
			// minHeight: 26,
			value: 'test button',
			// body: "test button",
			id: 'button1'
		},
		{
			view: 'layout',
			id: 'layout-test',
			maxHeight: 26,
			minHeight: 26,
			flex: 0,
			cols: [
				{
					view: 'button',
					id: 'button1',
					label: "qwwereerter",
				},
				{
					view: 'button',
					id: 'button1',
					backgroundColor: '#464',
					on: {
						click: (event: Event) => {
							console.log('onClick', event);
						},
						mousemove: (event: Event) => {
							console.log('onClick', event);
						}
					},
				},
			]
		}
	]
};