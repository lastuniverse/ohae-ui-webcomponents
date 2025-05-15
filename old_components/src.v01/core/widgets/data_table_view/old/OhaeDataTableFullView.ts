import { OhaeUI } from "../../../OhaeUI";
import { OhaeLayoutView } from "../../layout-view/OhaeLayoutView";
import { OhaeDataTableHeadView } from "../OhaeDataTableHeadView";
import { DataTableRow, OhaeDataTableRowView } from "../OhaeDataTableRowView";
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


export class OhaeDataTableFullView extends OhaeLayoutView {
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
			<div class="body-container"></div>
		</div>
    `;

	private _tableView?: HTMLDivElement;
	private _headView?: OhaeDataTableHeadView;
	private _bodyView?: HTMLDivElement;

	private columns: DataTableColumn[] = [];
	private data: any[] = [];
	private currentSort: { column: string; dir: 'asc' | 'desc' } | null = null;

	protected override async createCallback() {
		await super.createCallback();
		this.applyAttributes(OhaeDataTableFullView.ATTRIBUTES);
		this.updateColumns(this.initData.columns ?? []);
		this.updateData(this.initData.data ?? []);
		this.enableRowDragging();
		this.enableRowSorting();
	}

	static get observedAttributes() {
		return [...super.observedAttributes, ...this.ATTRIBUTES];
	}

	private enableRowSorting(): void {
		this.headView.addEventListener('sort', (e: Event) =>
			this.sortData((e as CustomEvent).detail.columnId)
		);
	}

	private enableRowDragging(): void {
		let draggedRow: OhaeDataTableRowView | null = null;

		this.getAllRows().forEach((row) => {
			row.draggable = true;

			row.addEventListener('dragstart', (e) => {
				draggedRow = row;
				row.classList.add('dragging');
				(e as DragEvent).dataTransfer?.setData('text/plain', row.dataset.id ?? '');
			});

			row.addEventListener('dragend', () => {
				row.classList.remove('dragging');
				draggedRow = null;
			});

			row.addEventListener('dragover', (e) => {
				e.preventDefault();
			});

			row.addEventListener('drop', (e) => {
				e.preventDefault();
				if (draggedRow && draggedRow !== row) {
					const targetRow = row;
					this.insertRowBefore(draggedRow, targetRow);
				}
			});
		});
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

	protected override async render() {
		await super.render();
	}

	private async renderTable() {
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

	// private getRowElements(): OhaeDataTableRowView[] {
	// 	return Array.from(this.bodyView.children).filter(
	// 		(row): row is OhaeDataTableRowView => row instanceof OhaeDataTableRowView
	// 	);
	// }

	public getAllRows(): OhaeDataTableRowView[] {
		return Array.from(this.bodyView.children).filter(
			row => row instanceof OhaeDataTableRowView
		) as OhaeDataTableRowView[];
	}


	public getRow(id: number | string): OhaeDataTableRowView | undefined {
		return Array.from(this.bodyView.children).find(row => {
			return row instanceof OhaeDataTableRowView && row.dataset.id === String(id);
		}) as OhaeDataTableRowView | undefined;
	}



	public addRow(row: DataTableRow | OhaeDataTableRowView): number | string {
		const newRowView = row instanceof OhaeDataTableRowView ? row : new OhaeDataTableRowView();

		if (!(row instanceof OhaeDataTableRowView)) {
			const rowData = row as DataTableRow;
			if (!rowData.id) {
				rowData.id = Date.now().toString();
			}
			newRowView.setData(this.columns, rowData);
		}

		this.bodyView.appendChild(newRowView);
		this.data.push(newRowView.getData());
		newRowView.dataset.id = String(newRowView.getData().id);

		const id = newRowView.getData().id;
		this.enableRowDragging();
		return id;

	}

	public removeRow(row: number | string | OhaeDataTableRowView): OhaeDataTableRowView | undefined {
		const rowView = row instanceof OhaeDataTableRowView
			? row
			: this.getRow(row);

		if (!rowView) return undefined;

		const rowData = rowView.getData();
		this.data = this.data.filter(item => item.id !== rowData.id);
		rowView.remove();

		return rowView;
	}

	public insertRowBefore(
		source: number | string | DataTableRow | OhaeDataTableRowView,
		target: number | string | OhaeDataTableRowView
	): number | string | undefined {
		const targetRowView = target instanceof OhaeDataTableRowView
			? target
			: this.getRow(target);

		if (!targetRowView) return undefined;

		let sourceRowView: OhaeDataTableRowView;

		if (source instanceof OhaeDataTableRowView) {
			sourceRowView = source;
		} else if (typeof source === 'object') {
			sourceRowView = new OhaeDataTableRowView();
			const rowData = source as DataTableRow;
			if (!rowData.id) {
				rowData.id = Date.now().toString();
			}
			sourceRowView.setData(this.columns, rowData);
			sourceRowView.dataset.id = String(rowData.id);
			this.data.push(rowData);
		} else {
			sourceRowView = this.getRow(source) as OhaeDataTableRowView;
			if (!sourceRowView) return undefined;

			this.data = this.data.filter(item => item.id !== sourceRowView.getData().id);
			sourceRowView.remove();
		}

		this.bodyView.insertBefore(sourceRowView, targetRowView);
		this.data.splice(this.getRowIndex(targetRowView), 0, sourceRowView.getData());

		return sourceRowView.getData().id;
	}

	public updateRow(id: number | string, data: Partial<DataTableRow>): void {
		const rowView = this.getRow(id);
		if (!rowView) return;

		const rowData = { ...rowView.getData(), ...data };
		rowView.setData(this.columns, rowData);

		const index = this.data.findIndex(item => item.id === id);
		if (index !== -1) this.data[index] = rowData;
	}

	public clear(): void {
		this.data = [];
		this.bodyView.innerHTML = '';
	}

	public filterRows(predicate: (row: DataTableRow) => boolean): void {
		this.getAllRows().forEach(rowView => {
			const rowData = rowView.getData();
			rowView.style.display = predicate(rowData) ? '' : 'none';
		});
	}

	public findRow(predicate: (row: DataTableRow) => boolean): OhaeDataTableRowView | undefined {
		return this.getAllRows().find(rowView => predicate(rowView.getData()));
	}

	public moveRowUp(id: number | string): void {
		const rowView = this.getRow(id);
		if (!rowView) return;
		const prev = rowView.previousElementSibling as OhaeDataTableRowView;
		if (prev) this.insertRowBefore(rowView, prev);
	}

	public moveRowDown(id: number | string): void {
		const rowView = this.getRow(id);
		if (!rowView) return;
		const next = rowView.nextElementSibling?.nextElementSibling as OhaeDataTableRowView;
		this.insertRowBefore(rowView, next || null);
	}

	public selectRow(id: number | string): void {
		const rowView = this.getRow(id);
		if (rowView) rowView.classList.add('selected');
	}

	public deselectRow(id: number | string): void {
		const rowView = this.getRow(id);
		if (rowView) rowView.classList.remove('selected');
	}

	public getSelectedRows(): OhaeDataTableRowView[] {
		return this.getAllRows().filter(rowView => rowView.classList.contains('selected'));
	}

	public rerenderRow(id: number | string): void {
		const rowView = this.getRow(id);
		if (rowView) rowView.setData(this.columns, rowView.getData());
	}

	public hasRow(id: number | string): boolean {
		return !!this.getRow(id);
	}

	private getRowIndex(row: OhaeDataTableRowView): number {
		return Array.from(this.bodyView.children).indexOf(row);
	}



	private sortData(columnId: string) {
		if (!this.columns.find(c => c.id === columnId)?.sortable) return;

		const dir = this.currentSort?.column === columnId
			? (this.currentSort.dir === 'asc' ? 'desc' : 'asc')
			: 'asc';

		this.data.sort((a, b) => {
			const valA = a[columnId];
			const valB = b[columnId];

			if (typeof valA === 'number' && typeof valB === 'number') {
				return dir === 'asc' ? valA - valB : valB - valA;
			}
			return dir === 'asc'
				? String(valA).localeCompare(String(valB))
				: String(valB).localeCompare(String(valA));
		});

		this.currentSort = { column: columnId, dir };
		this.renderTable();
	}

	private dispatchRowEvent(eventName: string, data: any) {
		this.dispatchEvent(new CustomEvent(eventName, {
			detail: data,
			bubbles: true,
			composed: true
		}));
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
		this.setBooleanAttribute('hover', value);
	}

	public updateData(newData: any[]) {
		this.data = newData;
		this.renderTable();
		this.enableRowDragging();
	}

	public updateColumns(newColumns: DataTableColumn[]) {
		this.columns = newColumns;
		this.renderTable();
	}

	public getCurrentData() {
		return this.data;
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

OhaeUI.registerViewType('datatable-full', OhaeDataTableFullView);