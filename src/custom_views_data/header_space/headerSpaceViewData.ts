import { IOhaeViewOptions } from "src/core/OhaeViewOptions";

export const headerSpaceViewData: IOhaeViewOptions = {
	view: 'layout',
	padding: 0,
	// backgroundColor: '#411',
	cols: [
		{
			view: 'layout',
			maxHeight: 24,
			maxWidth: 48,
			minWidth: 48,
			overflow: 'hidden',
			margin: 6,
			flex: 0,
			valign: 'center',
			body: {
				view: 'img',
				height: '16px',
				src: './assets/logo_64.png',
				on: {
					click: function (){
						console.log('logo')
					}
				}
			},
	
		},
		{
			flex: 1
		},
	],
};