import { OhaeUI } from "../../../OhaeUI";
import { OhaeLayoutView } from "../../layout-view/OhaeLayoutView";
import { OhaeDataTableHeadView } from "../OhaeDataTableHeadView";
import { OhaeDataTableRowView } from "../OhaeDataTableRowView";
import { Color } from "../../../utils/Color";
import { IOhaeViewOptions } from "../../../OhaeViewOptions";

export interface DataTableColumn {
	id: string;
	header: string;
	width?: number | string;
	rowHeight?: number | string;
	align?: 'left' | 'center' | 'right';
	sortable?: boolean;
	editable?: boolean;
	inputType?: string; // Исправлено: inpuType -> inputType
	componentOptions?: IOhaeViewOptions;
}


export class OhaeDataTableBaseView extends OhaeLayoutView {
	static readonly ATTRIBUTES = [
		'columns',
		'data',
		'striped',
		'hover',
		'rowHeight',
	];

	protected static readonly STYLES = `
        <style>
            :host {
                display: flex;
                flex-direction: column;
                position: relative;
                box-sizing: border-box;
            }
            
            .table-header, .body-container {
                display: flex;
                flex-direction: column;
                width: 100%;
            }
           
            .header-cell, .data-cell {
                padding: 0 5px;
                border-bottom: 1px solid var(--host-border, #eee);
                border-right: 1px solid var(--host-border, #eee);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            .header-cell {
                background-color: var(--host-head-bg, #222);
                color: var(--host-head-color, #fff);
                font-weight: 500;
                position: sticky;
                top: 0;
            }

			.data-cell {
				background-color: var(--host-bg, #222);
			}	
            .data-cell:hover {
                background-color: var(--host-hover-bg, rgba(0,0,0,0.1));

            }

			.striped .data-cell:nth-child(even) {
                background-color: var(--host-striped-bg, rgba(0,0,0,0.1));
            }
            
			.striped .data-cell:nth-child(even):hover {
                background-color: var(--host-striped-hover_bg, rgba(0,0,0,0.1));
            }
			
 
        </style>
		<link rel="stylesheet" href="./external.css">
    `;

	protected static readonly HTML: string = `
		<div class="table-container">
			<ohae-datatable-head class="header-container"></ohae-datatable-head>
			<div class="body-container"><slot></slot></div>
		</div>
    `;

	public draggedSection: OhaeDataTableRowView | null = null;
	private _tableView?: HTMLDivElement;
	private _headView?: OhaeDataTableHeadView;
	private _bodyView?: HTMLDivElement;

	protected columns: DataTableColumn[] = [];
	protected data: any[] = [];

	protected override async createCallback() {
		await super.createCallback();
		this.applyAttributes(OhaeDataTableBaseView.ATTRIBUTES);
		this.updateColumns(this.initData.columns ?? []);
		this.updateData(this.initData.data ?? []);
		this.enableRowDragging();
	}

	static get observedAttributes() {
		return [...super.observedAttributes, ...this.ATTRIBUTES];
	}

	protected get tableView(): HTMLDivElement {
		this._tableView = this._tableView ?? this.shadowRoot?.querySelector('div.table-container') as HTMLDivElement;
		return this._tableView;
	}
	protected get headView(): OhaeDataTableHeadView {
		if (this._headView instanceof OhaeDataTableHeadView) return this._headView;
		this._headView = this.shadowRoot?.querySelector('ohae-datatable-head') as OhaeDataTableHeadView;
		return this._headView;
	}
	protected get bodyView(): HTMLDivElement {
		this._bodyView = this._bodyView ?? this.shadowRoot?.querySelector('div.body-container') as HTMLDivElement;
		return this._bodyView;
	}

	private enableRowDragging(): void {
		this.bodyView.addEventListener('dragover', this.handleDragOver as EventListener);
		this.bodyView.addEventListener('drop', this.handleDrop as EventListener);
	}
	private handleDragOver(event: DragEvent) {
		event.preventDefault();
		const target = event.target as HTMLElement;
		const section = target.closest('ohae-datatable-row') as OhaeDataTableRowView | null;
		if (section && this.draggedSection && section !== this.draggedSection) {
			const rect = section.getBoundingClientRect();
			const isAfter = event.clientY > rect.top + rect.height / 2;

			if (isAfter) {
				section.after(this.draggedSection);
			} else {
				section.before(this.draggedSection);
			}
		}
	}

	private handleDrop(event: DragEvent) {
		event.preventDefault();
		this.draggedSection = null;
	}

	protected async renderTable() {
		this.headView.updateData(this.columns);
		this.bodyView.innerHTML = '';
		this.data.forEach(async item => {
			const row = new OhaeDataTableRowView();
			row.classList.add('data-cell');
			this.bodyView.appendChild(row);
			await row.setData(this.columns, item);
			row.addEventListener('click', () => this.dispatchRowEvent('row-click', item));
		});
	}

	public getRow(id: number | string): OhaeDataTableRowView | undefined {
		return Array.from(this.bodyView.children).find(row => {
			return row instanceof OhaeDataTableRowView && row.dataset.id === String(id);
		}) as OhaeDataTableRowView | undefined;
	}

	protected dispatchRowEvent(eventName: string, data: any) {
		this.dispatchEvent(new CustomEvent(eventName, {
			detail: data,
			bubbles: true,
			composed: true
		}));
	}

	public updateData(newData: any[]) {
		this.data = newData;
		this.renderTable();
	}

	public updateColumns(newColumns: DataTableColumn[]) {
		this.columns = newColumns;
		this.renderTable();
	}

	get striped(): boolean {
		return this.getAttribute('striped') === 'true';
	}
	set striped(value: boolean | string | null) {
		value = this.setBooleanAttribute('striped', value);
		if (value) {
			this.bodyView?.classList.add('striped');
		} else {
			this.bodyView?.classList.remove('striped');
		}
	}

	get hover(): boolean {
		return this.getAttribute('hover') === 'true';
	}
	set hover(value: boolean) {
		this.setAttribute('hover', value.toString());
	}


	get backgroundColor(): Color | null {
		const backgroundColor = this.getAttribute('backgroundColor');
		if (!backgroundColor) return null;
		return new Color(backgroundColor);
	}
	set backgroundColor(value: string | Color | null) {
		if (!value) return;

		const color = typeof value === 'string' ? new Color(value) : value;
		this.setAttribute('backgroundColor', color.hex);

		this.style.setProperty("--host-color", color.contrast(0.6).mono().hex);
		this.style.setProperty("--host-border", color.brightness(0.8).hex);

		this.style.setProperty("--host-head-bg", color.brightness(0.8).mono().hex);
		this.style.setProperty("--host-head-color", color.contrast(0.5).mono().hex);

		this.style.setProperty("--host-bg", color.hex);
		this.style.setProperty("--host-hover-bg", color.brightness(1.3).hex);

		this.style.setProperty("--host-striped-bg", color.brightness(0.9).hex);
		this.style.setProperty("--host-striped-hover_bg", color.brightness(1.3).hex);
	}

	get rowHeight(): string | null {
		return this.getAttribute('rowHeight');
	}
	set rowHeight(value: string | number | null) {
		if (value === null) return;
		const parsedValue = this.parseSizeValue(value);
		this.setAttribute('rowHeight', parsedValue);
		this.style.setProperty("--row-height", parsedValue);
	}
}

OhaeUI.registerViewType('datatable_base', OhaeDataTableBaseView);



// public addRow(row: DataTableRow | OhaeDataTableRowView): number | string {
// 	const newRowView = row instanceof OhaeDataTableRowView ? row : new OhaeDataTableRowView();

// 	if (!(row instanceof OhaeDataTableRowView)) {
// 		const rowData = row as DataTableRow;
// 		if (!rowData.id) {
// 			rowData.id = Date.now().toString();
// 		}
// 		newRowView.setData(this.columns, rowData);
// 	}

// 	this.bodyView.appendChild(newRowView);
// 	this.data.push(newRowView.getData());
// 	newRowView.dataset.id = String(newRowView.getData().id);

// 	return newRowView.getData().id;
// }

// public removeRow(row: number | string | OhaeDataTableRowView): OhaeDataTableRowView | undefined {
// 	const rowView = row instanceof OhaeDataTableRowView
// 		? row
// 		: this.getRow(row);

// 	if (!rowView) return undefined;

// 	const rowData = rowView.getData();
// 	this.data = this.data.filter(item => item.id !== rowData.id);
// 	rowView.remove();

// 	return rowView;
// }


// public updateRow(id: number | string, data: Partial<DataTableRow>): void {
// 	const rowView = this.getRow(id);
// 	if (!rowView) return;

// 	const rowData = { ...rowView.getData(), ...data };
// 	rowView.setData(this.columns, rowData);

// 	const index = this.data.findIndex(item => item.id === id);
// 	if (index !== -1) this.data[index] = rowData;
// }

// public clear(): void {
// 	this.data = [];
// 	this.bodyView.innerHTML = '';
// }

// public findRow(predicate: (row: DataTableRow) => boolean): OhaeDataTableRowView | undefined {
// 	return this.getAllRows().find(rowView => predicate(rowView.getData()));
// }

// public moveRowUp(id: number | string): void {
// 	const rowView = this.getRow(id);
// 	if (!rowView) return;
// 	const prev = rowView.previousElementSibling as OhaeDataTableRowView;
// 	if (prev) this.insertRowBefore(rowView, prev);
// }

// public moveRowDown(id: number | string): void {
// 	const rowView = this.getRow(id);
// 	if (!rowView) return;
// 	const next = rowView.nextElementSibling?.nextElementSibling as OhaeDataTableRowView;
// 	this.insertRowBefore(rowView, next || null);
// }


// public rerenderRow(id: number | string): void {
// 	const rowView = this.getRow(id);
// 	if (rowView) rowView.setData(this.columns, rowView.getData());
// }

// public hasRow(id: number | string): boolean {
// 	return !!this.getRow(id);
// }

// protected getRowIndex(row: OhaeDataTableRowView): number {
// 	return Array.from(this.bodyView.children).indexOf(row);
// }

// public getCurrentData() {
// 	return this.data;
// }

// public getAllRows(): OhaeDataTableRowView[] {
// 	return Array.from(this.bodyView.children).filter(
// 		row => row instanceof OhaeDataTableRowView
// 	) as OhaeDataTableRowView[];
// }


// public insertRowBefore(
// 	source: number | string | DataTableRow | OhaeDataTableRowView,
// 	target: number | string | OhaeDataTableRowView
// ): number | string | undefined {
// 	const targetRowView = target instanceof OhaeDataTableRowView
// 		? target
// 		: this.getRow(target);

// 	if (!targetRowView) return undefined;

// 	let sourceRowView: OhaeDataTableRowView;

// 	if (source instanceof OhaeDataTableRowView) {
// 		sourceRowView = source;
// 	} else if (typeof source === 'object') {
// 		sourceRowView = new OhaeDataTableRowView();
// 		const rowData = source as DataTableRow;
// 		if (!rowData.id) {
// 			rowData.id = Date.now().toString();
// 		}
// 		sourceRowView.setData(this.columns, rowData);
// 		sourceRowView.dataset.id = String(rowData.id);
// 		// this.data.push(rowData); /*!!!!!!!*/
// 	} else {
// 		sourceRowView = this.getRow(source) as OhaeDataTableRowView;
// 		if (!sourceRowView) return undefined;

// 		this.data = this.data.filter(item => item.id !== sourceRowView.getData().id);
// 		sourceRowView.remove();
// 	}

// 	this.bodyView.insertBefore(sourceRowView, targetRowView);
// 	// this.data.splice(this.getRowIndex(targetRowView), 0, sourceRowView.getData()); /*!!!!!!!*/

// 	return sourceRowView.getData().id;
// }