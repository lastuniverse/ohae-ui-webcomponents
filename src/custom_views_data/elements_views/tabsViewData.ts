import { IOhaeViewOptions } from "src/core/OhaeViewOptions";
import { leftPanelViewData } from "../leftPanelViewData";
import { rightPanelViewData } from "../rightPanelViewData";
import { accordionViewData } from "./accordionViewData";
import { inputsViewData } from "./inputViewData";
import { workSpaceViewData } from "../workspace_view/workSpaceViewData";

export const tabsViewData: IOhaeViewOptions = {
	view: 'tabs',
	tabsSide: 'right',
	allowHideAll: true,
	// padding: 1,
	cols: [
		// {
		// 	view: 'tab-item',
		// 	icon: "fa-hashtag",
		// 	header: "workspace",
		// 	// backgroundColor: '#556',
		// 	body: workSpaceViewData
		// },
		{
			view: 'tab-item',
			icon: "fa-cog",
			header: "левая панель",
			backgroundColor: '#556',
			body: leftPanelViewData
		},
		{
			view: 'tab-item',
			icon: 'fa-bookmark',
			header: "правая панель",
			body: rightPanelViewData
		},
		{
			view: 'tab-item',
			icon: 'fa-code',
			header: "редактор",
			backgroundColor: '#655',
			body: {
				view: 'ace-editor'
			}
		},
		{
			view: 'tab-item',
			icon: 'fa-folder',
			header: "test 1",
			backgroundColor: '#655',
			body: {
				view: 'layout',
				body: `
				test 1 
				<i class="fa fa-camera-retro fa-lg">111</i>
				<span class="fa fa-camera-retro"></span>
				<i class="fa fa-check"></i>
				`
			}
		},
		{
			view: 'tab-item',
			icon: "fa-power-off ",
			header: "картинка",
			backgroundColor: '#655',
			body: {
				view: 'img',
				src: './assets/start_room.png'
			}
		},
		// {
		// 	view: 'layout',
		// 	flex: 0,
		// 	overflow: 'hidden',
		// 	margin: 0,
		// 	align: 'center',
		// 	valign: 'center',
		// 	body: `<image src='./assets/heh.png'>`
		// },
		// { view: 'resizer' },
		// // accordionViewData,
		// {
		// 	view: 'ace-editor',
		// },
		// rightPanelViewData,
	],
};

