import 'reflect-metadata';

import "./core/widgets/base_view/OhaeBaseView";
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
import { workSpaceViewData } from "./custom_views_data/workspace_view/workSpaceViewData";
import { ConditionFacade, StateUpdateHandler, IUpdateConditionEvent, StateManager } from "ohae_state";



// (async function() {
// 	// тестирую использование StateManager


// 	const state = new StateManager('test');
// 	await state.onReady;
// 	const stateData = state.getValue('');
// 	console.log('!!!!!!!!!!!', stateData);
	
	
// 	state.setValue('novel.name', 'lower');
// 	state.setValue('novel.curentScene.name', '01_start');
// 	state.setValue('player.name', 'Alice');
// 	state.setValue('player.health', 100);
// 	state.setValue('player.isDeath', false);
	
// 	state.setValue('player.inventory.slot1', 'item1');
// 	state.setValue('player.inventory.slot2', null);
	
	
// 	// await StateFacade.addCondition('player', 'player', (event:UpdateConditionEvent)=>{
// 	// 	// console.log('>>>', 'update player condition', event);
// 	// 	return true;
// 	// });
	
// 	await ConditionFacade.add(state, 'slot1', 'player.inventory.slot1', (event:IUpdateConditionEvent)=>{
// 		console.log('>>>', 'update slot1 condition', event);
// 		return event.update.newData === 'item1';
// 	});
	
// 	await ConditionFacade.add(state, 'slot2', 'player.inventory.slot2', (event:IUpdateConditionEvent)=>{
// 		console.log('>>>', 'update slot2 condition', event);
// 		return event.update.newData === 'item2';
// 	});

// 	await ConditionFacade.add(state, 'inventory', 'player.inventory', (event:IUpdateConditionEvent)=>{
// 		console.log('>>>', 'update inventory condition', event);
// 		return true;
// 	});
	
	
// 	await ConditionFacade.add(state, 'isNotDeath', 'player.isDeath', (event:IUpdateConditionEvent)=>{
// 		console.log('>>>', 'update isNotDeath condition', event);
// 		return !event.update.newData;
// 	});
	
// 	// await TriggerFacade.add('test', ['slot1', 'slot2', 'inventory', 'isNotDeath']);
// 	// TriggerFacade.on('test', (isActive: boolean)=>{
// 	// 	console.log('>>>', 'activate trigger', 'test', isActive)
// 	// });
		
// 	setTimeout(()=>{
// 		state.setValue('player.inventory.slot2', 'item2');
// 	}, 5000);

// 	setTimeout(()=>{
// 		state.setValue('player.inventory.slot2', 'item3');
// 	}, 10000);
	
	
// })()


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
// const element = OhaeUI.getViewById('main') as OhaeLayoutView;

// // window.localStorage.removeItem('root-state');
// const storedState = window.localStorage.getItem('root-state');
// console.log('load state', storedState || '{}')
// const storedData = JSON.parse(storedState??'{}');

// OhaeUI.stateManager.state.initState(storedData)

// // OhaeUI.stateManager.state.set('', '')
// OhaeUI.stateManager.onStateUpdate('ui.graphEditor', (_)=>{
// 	const saveData = JSON.stringify(OhaeUI.stateManager.state.get(''))
// 	console.log('save state', OhaeUI.stateManager.state.get(''))
// 	window.localStorage.setItem('root-state', saveData);
// });

// в переменной workSpaceViewData остальная часть интерфейса, (на самом деле там такде идут отсылки на другие файлы с данными о разных частях интерфейса)

