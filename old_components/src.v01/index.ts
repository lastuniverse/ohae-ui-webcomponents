import "./core/widgets/OhaeBaseView";
import "./core/widgets/OhaeFieldsetView";
import "./core/widgets/layout-view/OhaeLayoutView";
import "./core/widgets/layout-view/OhaeResizerView";
import "./core/widgets/layout-view/OhaeSeparatorView";
import "./core/widgets/input_view/OhaeButtonView";
import "./core/widgets/input_view/OhaeFormView";
import "./core/widgets/input_view/OhaeInputView";
import "./core/widgets/input_view/OhaeSelectView";
import "./core/widgets/input_view/OhaeTextareaView";
import "./core/widgets/input_view/OhaeIconCheckboxView";
import "./core/widgets/input_view/OhaeIconSelectView";
import "./core/widgets/accordion_view/OhaeAccordionView";
import "./core/widgets/accordion_view/OhaeAccordionItemView";
import "./core/widgets/icons_view/OhaeIconOfTypeView";
import "./core/widgets/tabs_view/OhaeTabsView";
import "./core/widgets/tabs_view/OhaeTabItemButton";
import "./core/widgets/tabs_view/OhaeTabItemView";
import "./core/widgets/data_table_view/OhaeDataTableView";
import "./external_widgets/OhaeAceEditor";
import "./external_widgets/BlenderNumberInput";

import { IOhaeViewOptions } from "./core/OhaeViewOptions";
import { OhaeUI } from './core/OhaeUI';
import { OhaeLayoutView } from "./core/widgets/layout-view/OhaeLayoutView";
import { inputsViewData } from "./custom_views_data/elements_views/inputViewData";
import { accordionViewData } from "./custom_views_data/elements_views/accordionViewData";
import { tabsViewData } from "./custom_views_data/elements_views/tabsViewData";
import { workSpaceViewData } from "./custom_views_data/workspace_view/workSpaceViewData";
import { headerSpaceViewData } from "./custom_views_data/header_space/headerSpaceViewData";

import { ConditionFacade, IUpdateConditionEvent, StateFacade, TriggerFacade } from "ohae_state";



(async function() {

	await StateFacade.setValue('novel.name', 'lower');
	await StateFacade.setValue('novel.curentScene.name', '01_start');
	await StateFacade.setValue('player.name', 'Alice');
	await StateFacade.setValue('player.health', 100);
	await StateFacade.setValue('player.isDeath', false);
	
	await StateFacade.setValue('player.inventory.slot1', 'item1');
	await StateFacade.setValue('player.inventory.slot2', null);
	// StateFacade.setValue('player.inventory.slot3', null);
	// StateFacade.setValue('player.inventory.slot4', null);
	// StateFacade.setValue('player.inventory.slot5', null);
	// StateFacade.setValue('player.inventory.slot6', null);
	// StateFacade.setValue('player.inventory.slot7', null);
	
	const state = await StateFacade.getValue('');
	console.log('!!!!!!!!!!!', state);
	
	// await StateFacade.addCondition('player', 'player', (event:UpdateConditionEvent)=>{
	// 	// console.log('>>>', 'update player condition', event);
	// 	return true;
	// });
	
	await ConditionFacade.add('slot1', 'player.inventory.slot1', (event:IUpdateConditionEvent)=>{
		console.log('>>>', 'update slot1 condition', event);
		return event.newValue === 'item1';
	});
	
	await ConditionFacade.add('slot2', 'player.inventory.slot2', (event:IUpdateConditionEvent)=>{
		console.log('>>>', 'update slot2 condition', event);
		return event.newValue === 'item2';
	});
	
	
	await ConditionFacade.add('isNotDeath', 'player.isDeath', (event:IUpdateConditionEvent)=>{
		console.log('>>>', 'update isNotDeath condition', event);
		return !event.newValue;
	});
	
	await TriggerFacade.add('test', ['slot1', 'slot2', 'isNotDeath']);
	TriggerFacade.on('test', (isActive: boolean)=>{
		console.log('>>>', 'activate trigger', 'test', isActive)
	});
		
	setTimeout(()=>{
		StateFacade.setValue('player.inventory.slot2', 'item2');
	}, 5000);

	setTimeout(()=>{
		StateFacade.setValue('player.inventory.slot2', 'item3');
	}, 10000);
	
})()







// Пример JSON-данных для инициализации
const dataInputView: IOhaeViewOptions = {
	view: 'layout',
	minWidth: '100%',
	overflow: 'hidden',
	// overflowX: 'scroll',
	// overflowY: 'scroll',
	rows: [
		{ view: 'layout', backgroundColor: '#111', minHeight: 26, maxHeight: 26, 
			body: {
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
			}
		},
		{ view: 'layout', minHeight: 1, maxHeight: 1 },
		// accordionViewData,
		// workSpaceViewData,
		// tabsViewData,
		workSpaceViewData, 
		{ view: 'layout', minHeight: 1, maxHeight: 1 },
		{ view: 'layout', backgroundColor: '#111', minHeight: 22, maxHeight: 22 },
	],
};


const ui = new OhaeUI(dataInputView, document.body);

const element = OhaeUI.getViewById('main') as OhaeLayoutView;

// в переменной workSpaceViewData остальная часть интерфейса, (на самом деле там такде идут отсылки на другие файлы с данными о разных частях интерфейса)

