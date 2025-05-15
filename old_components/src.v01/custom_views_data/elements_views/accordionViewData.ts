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
			flex: 0,
			collapsed: true,
			rows: miniInputsViewData.rows
		},
		{
			view: 'accordion-item',
			header: 'боундинг (геометрия)',
			flex: 0,
			collapsed: true,
			rows: miniInputsViewData.rows			
			
		},
		{
			view: 'accordion-item',
			header: 'эффеты (шэйдереры)',
			flex: 0,
			collapsed: true,
			rows: miniInputsViewData.rows			
			
		},
		{
			view: 'accordion-item',
			header: 'эффеты (частицы)',
			flex: 0,
			collapsed: true,
			rows: miniInputsViewData.rows			
			
		},
		{
			view: 'accordion-item',
			header: 'эффекты (цвет)',
			flex: 0,
			collapsed: true,
			rows: miniInputsViewData.rows			
			
		},
		{
			view: 'accordion-item',
			header: 'группы',
			flex: 0,
			collapsed: true,
			rows: miniInputsViewData.rows
		},		
		{
			view: 'accordion-item',
			header: 'анимации',
			flex: 0,
			collapsed: true,
			rows: miniInputsViewData.rows
		},		
		{
			view: 'accordion-item',
			header: 'кастомизация',
			flex: 0,
			collapsed: true,
			rows: miniInputsViewData.rows			
			
		},
		{
			view: 'accordion-item',
			header: 'параметры редактора 5',
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
