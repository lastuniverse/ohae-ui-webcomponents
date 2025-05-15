import { IOhaeViewOptions } from "src/core/OhaeViewOptions";
import { datatableViewData } from "../elements_views/datatableViewData";
export const graphEditorElementsPanelViewData: IOhaeViewOptions = {
	view: 'tabs',
	tabsSide: 'left',
	// tabsSide: 'right',
	// allowHideAll: true,
	backgroundColor: '#222',
	overflow: 'hidden',
	cols: [
		{
			view: 'tab-item',
			icon: "fa-asterisk", // fa-object-group
			header: "elements",
			backgroundColor: '#292929',
			padding: '7px 0px 7px 7px',
			body: datatableViewData,
		},
		{
			view: 'tab-item',
			icon: "fa-list-ul",
			header: "list",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>list</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},
		{
			view: 'tab-item',
			icon: "fa-chain", // fa-link
			header: "chains",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>chains</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},
		{
			view: 'tab-item',
			icon: "fa-list-alt",
			header: "components",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>components</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},
		{
			view: 'tab-item',
			icon: "fa-server",
			header: "triggers",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>triggers</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},
		{
			view: 'tab-item',
			icon: "fa-th",
			header: "images",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>images</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},	
		
	]
};
