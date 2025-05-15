import { IOhaeViewOptions } from "src/core/OhaeViewOptions";
import { accordionViewData } from "../elements_views/accordionViewData";
import { accordionVerticalViewData } from "../elements_views/accordionVerticalViewData";
// fa-eye fa-eye-slash
// fa-lock fa-unlock
export const graphEditorParamsPanelViewData: IOhaeViewOptions = {
	view: 'tabs',
	tabsSide: 'left',
	// allowHideAll: true,
	backgroundColor: '#222',
	overflow: 'hidden',
	cols: [
		{
			view: 'tab-item',
			icon: "fa-cube",
			header: "ohae editor",
			overflowY: 'scroll',
			overflowX: 'hidden',
			backgroundColor: '#393939',
			padding: '7px 0 7px 7px',
			rows: [
				// {
				// 	view: 'accordion-item',
				// 	header: 'объект',
				// 	flex: 0,
				// 	body: {
 				// 		view: 'img',
				// 		overflow: 'hidden',
				// 		src: './assets/start_room.png',
				// 		style: 'object-fit: contain; max-height: 100%; max-height: 100%',
				// 		width: 'auto',         /* Подстраивается по ширине */
				// 		height: 'auto',        /* Автоматическая высота для сохранения пропорций */
				// 		display: 'block'      /* Чтобы убрать нижний отступ у img */
				// 	},				
				// },
				// { view: 'resizer' },
				// accordionVerticalViewData,
				accordionViewData,
			]
		},
		{
			view: 'tab-item',
			icon: "fa-image",
			header: "sprites",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>sprites</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},
		{
			view: 'tab-item',
			icon: "fa-desktop",
			header: "screen",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>screen</h1><hr>",
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
			icon: "fa-flask",
			header: "experemental",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>experemental</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},
		{
			view: 'tab-item',
			icon: "fa-clock",
			header: "times",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>times</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},
		{
			view: 'tab-item',
			icon: "fa-arrows ",
			header: "dimensions",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>dimensions</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},
		{
			view: 'tab-item',
			icon: "fa-clone ",
			header: "groups",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>groups</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},
		{
			view: 'tab-item',
			icon: "fa-hashtag",
			header: "scripting",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>scripting</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},
		{
			view: 'tab-item',
			icon: "fa-keyboard",
			header: "keys",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>keys</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},
		{
			view: 'tab-item',
			icon: "fa-wrench",
			header: "wrench",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>wrench</h1><hr>",
					"я еще не придумал что тут будет"
				]
			},
		},
		{
			view: 'tab-item',
			icon: "fa-sliders",
			header: "tunners",
			backgroundColor: '#393939',
			padding: '7px 7px 7px 7px',
			body: {
				align: 'center', 
				rows:[
					"<h1>tunners</h1><hr>",
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
