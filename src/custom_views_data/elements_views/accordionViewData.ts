import { IOhaeViewOptions } from "src/core/OhaeViewOptions";
import { inputsViewData } from "./inputViewData";
import { miniInputsViewData } from "./miniInputViewData";

export const accordionViewData: IOhaeViewOptions = {
	view: 'accordion',
	flex: 1,
	// overflowY: 'scroll',
	multiple: true,
	// enableShift: true,
	// maxWidth: 450,
	// minHeight: 315,
	// margin: 3,
	// padding: 5,
	rows: [
		{
			view: 'accordion-item',
			header: 'трансформация',
			backgroundColor: '#3d3d3d',
			flex: 0,
			collapsed: true,
			rows: miniInputsViewData.rows
		},
		{
			view: 'accordion-item',
			header: 'боундинг (геометрия)',
			backgroundColor: '#3d3d3d',
			flex: 0,
			collapsed: true,
			rows: miniInputsViewData.rows			
			
		},
		{
			view: 'accordion-item',
			header: 'эффеты (шэйдереры)',
			backgroundColor: '#3d3d3d',
			flex: 0,
			collapsed: true,
			rows: miniInputsViewData.rows			
			
		},
		{
			view: 'accordion-item',
			header: 'эффеты (частицы)',
			backgroundColor: '#3d3d3d',
			flex: 0,
			collapsed: true,
			rows: miniInputsViewData.rows			
			
		},
		{
			view: 'accordion-item',
			header: 'эффекты (цвет)',
			backgroundColor: '#3d3d3d',
			flex: 0,
			collapsed: true,
			rows: miniInputsViewData.rows			
			
		},
		{
			view: 'accordion-item',
			header: 'группы',
			backgroundColor: '#3d3d3d',
			flex: 0,
			collapsed: true,
			rows: miniInputsViewData.rows
		},		
		{
			view: 'accordion-item',
			header: 'анимации',
			backgroundColor: '#3d3d3d',
			flex: 0,
			collapsed: true,
			rows: miniInputsViewData.rows
		},		
		{
			view: 'accordion-item',
			header: 'кастомизация',
			backgroundColor: '#3d3d3d',
			flex: 0,
			collapsed: true,
			rows: miniInputsViewData.rows			
			
		},
		{
			view: 'accordion-item',
			header: 'параметры редактора 5',
			backgroundColor: '#3d3d3d',
			flex: 0,
			collapsed: true,
			rows: miniInputsViewData.rows			
			
		},
		{
			view: 'layout',
			flex: 0
		},		
	],
};
