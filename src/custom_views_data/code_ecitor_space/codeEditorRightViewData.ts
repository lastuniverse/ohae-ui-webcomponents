import { IOhaeViewOptions } from "src/core/OhaeViewOptions";
import { accordionViewData } from "../elements_views/accordionViewData";
import { datatableViewData } from "../elements_views/datatableViewData";


// fa-eye fa-eye-slash
// fa-lock fa-unlock
export const codeEditorParamsPanelViewData: IOhaeViewOptions = {
	view: 'tabs',
	tabsSide: 'top',
	// tabsSide: 'bottom',
	flex: 2,
	maxWidth: 600,
	// allowHideAll: true,
	backgroundColor: '#222',
	overflow: 'hidden',
	cols: [
		{
			view: 'tab-item',
			icon: "fa-folder-tree",
			header: "projects",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>projects</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},
		{
			view: 'tab-item',
			icon: "fa-folder",
			header: "folder",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>folder</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},
		{
			view: 'tab-item',
			icon: "fa-bookmark",
			header: "bookmark",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>bookmark</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},
		{
			view: 'tab-item',
			icon: "fa-trash",
			header: "trash",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>trash</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},
		{
			view: 'tab-item',
			icon: "fa-gear",
			header: "settings",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>settings</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},
	]
};











export const codeEditorRightViewData: IOhaeViewOptions = {
	view: 'layout',
	flex: 1,
	maxWidth: 1000,
	minWidth: 30,
	overflow: 'auto',
	backgroundColor: "#393939",
	padding: 5,
	// margin: 0,
	// align: 'center',
	// valign: 'center',
	rows: [
		{
			view: 'layout',
			minHeight: 30,
			body: {},
		},
		{ view: 'resizer' },
		{
			view: 'layout',
			minHeight: 36,
			body: accordionViewData,
		},
		
		// { view: 'resizer' },
		// {flex: 0}
	]
	// {
	// 	// view: 'img',
	// 	// src: './assets/logo_512.png',
	// 	// alt: 'codeEditorRightViewData'
	// }

};

