
import { IOhaeViewOptions } from "src/core/OhaeViewOptions";


export const datatableViewData: IOhaeViewOptions = {
	view: "datatable",
	backgroundColor: "#292929",
	striped: true,
	hover: true,
	// enableSorting: true,
	enableDragging: true,
	// flex: 1,
	// minHeight: 100,
	overflowX: 'hidden',
	overflowY: 'scroll',
	// maxHeight: 100,
	// height: 100,
	rowHeight: 20,
	columns: [
		{
			id: "type",
			header: "",
			align: 'left',
			sortable: true,
			width: 24,
			componentOptions: {
				view: "icon-of-type",
				types: {
					component: 	{icon: 'fa-window-maximize', color: '#bc804e'},
					layer: 		{icon: 'fa-object-ungroup', color: '#bc804e'},
					sprite: 	{icon: 'fa-image', color: '#bc804e'}, // fa-picture-o
					group: 		{icon: 'fa-layer-group', color: '#bc804e'}, //fa-object-group
					trigger: 	{icon: 'fa-toggle-on', color: '#bc804e'},
					condition: 	{icon: 'fa-tag', color: '#bc804e'},
					sound: 		{icon: 'fa-volume-up', color: '#bc804e'},
				}
			}
		},	
		{
			id: "name",
			header: "Объект",
			editable: true,
			sortable: true,
			inputType: "text",
			// width: 200,
		},
		{
			id: "parent",
			header: "Родитель",
			editable: false,
			sortable: true,
			inputType: "text",
			// width: 200,

		},
		{
			id: "type",
			header: "Тип",
			editable: false,
			sortable: true,
			// inputType: "text",
			// width: 200,

		},		
		// {
		// 	id: "type",
		// 	header: "Тип",
		// 	sortable: true,
		// 	align: 'center',
		// 	width: 110,
		// 	componentOptions: {
		// 		view: 'icon-select',
		// 		// inputWidth: '100%',
		// 		name: 'type',
		// 		color: '#415e9c',
		// 		icon: 'fa-chevron-down',
		// 		options: [
		// 			{ value: 'layer', label: 'слой' },
		// 			{ value: 'group', label: 'группа' },
		// 			{ value: 'component', label: 'компонент' },
		// 			{ value: 'sprite', label: 'спрайт' },
		// 			{ value: 'spritesheet', label: 'спрайтлист' },
		// 			{ value: 'sound', label: 'звук' },
		// 			{ value: 'trigger', label: 'триггер' },
		// 			{ value: 'condition', label: 'условие' },
		// 			{ value: 'animator', label: 'аниматор' },
		// 			{ value: 'animation', label: 'анимация' },
		// 		],
		// 		on: {
		// 			change: (e) => {
		// 				const customEvent = e as CustomEvent;
		// 				console.log('Notifications:', customEvent.detail.checked);
		// 			}
		// 		}			
		// 	}
		// },
		{
			id: "interactive",
			header: "",
			align: 'center',
			sortable: true,
			width: 24,
			componentOptions: {
				view: "icon-checkbox",
				name: 'visible',
				color: '#aaa', // '#bc804e',
				openIcon: 'fa-bell',
				closeIcon: 'fa-bell-slash',
				on: {
					change: (e) => {
						const customEvent = e as CustomEvent;
						console.log('Notifications:', customEvent.detail.checked);
					}
				}
			}
		},				
		{
			id: "locked",
			header: "",
			sortable: true,
			align: 'center',
			width: 24,
			componentOptions: {
				view: "icon-checkbox",
				color: '#ccc',
				openIcon: 'fa-unlock',
				closeIcon: 'fa-lock',
				on: {
					change: (e) => {
						const customEvent = e as CustomEvent;
						console.log('Notifications:', customEvent.detail.checked);
					}
				}
			}
		},
		// fa-low-vision
		{
			id: "visible",
			header: "",
			align: 'center',
			sortable: true,
			width: 20,
			componentOptions: {
				view: "icon-checkbox",
				name: 'visible',
				color: '#ccc',
				openIcon: 'fa-eye',
				closeIcon: 'fa-eye-slash',
				on: {
					change: (e) => {
						const customEvent = e as CustomEvent;
						console.log('Notifications:', customEvent.detail.checked);
					}
				}
			}
		},				
	],
	data: [
		{ id: 1,  	name: "scene", 		parent: "", 			type:"component", 	interactive: false,	locked: false, 	visible: true, 	},
		{ id: 2,  	name: "test1", 		parent: "scene", 		type:"group", 		interactive: false,	locked: false, 	visible: false, },
		{ id: 3, 	name: "test2", 		parent: "scene", 		type:"trigger", 	interactive: true, 	locked: true, 	visible: false, },
		{ id: 4, 	name: "test3", 		parent: "scene", 		type:"condition", 	interactive: true, 	locked: true, 	visible: false, },
		{ id: 5, 	name: "test4", 		parent: "scene", 		type:"sound", 		interactive: false,	locked: false, 	visible: false, },

		{ id: 6,  	name: "sky", 		parent: "scene",		type:"layer",  		interactive: false,	locked: false, 	visible: true, 	},
		{ id: 7,  	name: "skybg", 		parent: "sky", 			type:"sprite", 		interactive: false,	locked: false, 	visible: true, 	},
		{ id: 8,  	name: "sky", 		parent: "sky", 			type:"sprite", 		interactive: false,	locked: false, 	visible: true, 	},
		{ id: 9,  	name: "sun", 		parent: "sky", 			type:"sprite", 		interactive: false,	locked: false, 	visible: true, 	},
		{ id: 10,  	name: "clouds", 	parent: "sky",	 		type:"layer",  		interactive: false,	locked: false, 	visible: true, 	},
		{ id: 11,  	name: "cloud1", 	parent: "clouds", 		type:"sprite", 		interactive: true, 	locked: true, 	visible: false, },
		{ id: 12,  	name: "cloud2", 	parent: "clouds", 		type:"sprite", 		interactive: true, 	locked: true, 	visible: false, },
		{ id: 13,  	name: "cloud3", 	parent: "clouds", 		type:"sprite", 		interactive: false,	locked: false, 	visible: false, },
		{ id: 14,  	name: "cloud4", 	parent: "clouds", 		type:"sprite", 		interactive: false,	locked: false, 	visible: false, },
		{ id: 15,  	name: "fudzi", 		parent: "scene", 		type:"layer",  		interactive: true, 	locked: true, 	visible: true, 	},
		{ id: 16,  	name: "fudzi", 		parent: "fudzi", 		type:"sprite", 		interactive: true, 	locked: true, 	visible: true, 	},
		{ id: 17,  	name: "sakura", 	parent: "scene", 		type:"layer",  		interactive: true, 	locked: true, 	visible: true, 	},
		{ id: 19,  	name: "sakura1", 	parent: "sakura1", 		type:"sprite", 		interactive: false,	locked: false, 	visible: false, },
		{ id: 19,  	name: "sakura2", 	parent: "sakura2", 		type:"sprite", 		interactive: false,	locked: false, 	visible: false, },
		{ id: 20, 	name: "sakura3", 	parent: "sakura3", 		type:"sprite", 		interactive: true, 	locked: true, 	visible: false, },
		{ id: 21, 	name: "sakura4", 	parent: "sakura4", 		type:"sprite", 		interactive: true, 	locked: true, 	visible: false, },
		{ id: 22, 	name: "sakura4", 	parent: "sakura4", 		type:"sprite", 		interactive: false,	locked: false, 	visible: false, },
	],
	on: {
		'cell-update': function (this: HTMLElement, e: Event) {
			const customEvent = e as CustomEvent;
			console.log('Значение обновлено:', customEvent.detail);
		}
	}
};

// const ui = new OhaeUI(dataInputView, document.body);


	// {
	// 	view: "datatable",
	// 	striped: true,
	// 	hover: true,
	// 	columns: [
	// 		{ id: "rank", header: "Rank", width: 60, sortable: true },
	// 		{ id: "title", header: "Title", width: 300, sortable: true },
	// 		{ id: "year", header: "Year", width: 80, align: "center", sortable: true },
	// 		{ id: "rating", header: "Rating", width: 100, align: "right" }
	// 	],
	// 	data: [
	// 		{ id: 1, rank: 1, title: "The Shawshank Redemption", year: 1994, rating: 9.3 },
	// 		{ id: 2, rank: 2, title: "The Godfather", year: 1972, rating: 9.2 }
	// 	],
	// 	on: {
	// 'row-click': function(this: HTMLElement, e: Event) {
	// 	const customEvent = e as CustomEvent;
	// 	console.log('Selected row:', customEvent.detail);
	// }
	// 	}
	// }