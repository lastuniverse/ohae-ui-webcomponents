import { OhaeUI } from "../../../OhaeUI";
import { OhaeDataTableView } from "../OhaeDataTableView";



export class OhaeDataTableExtendedView extends OhaeDataTableView {
	static readonly ATTRIBUTES = [ ];

	protected override async createCallback() {
		await super.createCallback();
		this.applyAttributes(OhaeDataTableExtendedView.ATTRIBUTES);
		//this.updateColumns(this.initData.columns ?? []);
		//this.updateData(this.initData.data ?? []);
		// this.enableRowSorting();
	}

	static get observedAttributes() {
		return [...super.observedAttributes, ...this.ATTRIBUTES];
	}

	// public filterRows(predicate: (row: DataTableRow) => boolean): void {
	// 	this.getAllRows().forEach(rowView => {
	// 		const rowData = rowView.getData();
	// 		rowView.style.display = predicate(rowData) ? '' : 'none';
	// 	});
	// }

	// public selectRow(id: number | string): void {
	// 	const rowView = this.getRow(id);
	// 	if (rowView) rowView.classList.add('selected');
	// }

	// public deselectRow(id: number | string): void {
	// 	const rowView = this.getRow(id);
	// 	if (rowView) rowView.classList.remove('selected');
	// }

	// public getSelectedRows(): OhaeDataTableRowView[] {
	// 	return this.getAllRows().filter(rowView => rowView.classList.contains('selected'));
	// }

}

OhaeUI.registerViewType('datatable-extend', OhaeDataTableExtendedView);