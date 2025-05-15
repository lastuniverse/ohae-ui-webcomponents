import { OhaeUI } from "../../../OhaeUI";
import { IOhaeViewOptions } from "../../../OhaeViewOptions";
import { Color } from "../../../utils/Color";
import { OhaeLayoutView } from "../../layout-view/OhaeLayoutView";

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

enum AlignMap{
    left = 'flex-start',
    center = 'center',
    right = 'flex-end',
}

export class OhaeDataTableOldView extends OhaeLayoutView {
    public static readonly ATTRIBUTES: string[] = [
        'columns',
        'data',
        'striped',
        'hover'
    ];

    private isEditing = false;
    private currentEditCell: { td: HTMLTableCellElement; originalContent: string } | null = null;

    protected static readonly STYLES: string = `
        <style>
            :host {
                display: flex;
                /* overflow: auto; */
                position: relative;
                box-sizing: border-box;
                align-items: flex-start;
                padding: 0px;
                margin: 0px;
            }

            .table-wrapper {
                display: flex;
                flex: 1;
                align-items: flex-start;
                /* width: auto; */
                /* overflow: auto; */
            }

            table {
                flex: 1;
                border-collapse: collapse;
                background-color: var(--host-bg, #fff);
                color: var(--host-color, #333);
            }

            table {
                /* table-layout: fixed; */
                /* width: 100%; */ /* или конкретная ширина */
            }

            tr {
                margin: 0;
                padding: 0;
                height: 10px;
            }
            th, td {
                padding: 0px 5px;
                margin: 0;
                text-align: left;
                border-bottom: 1px solid var(--host-border, #eee);
                border-right: 1px solid var(--host-border, #eee);
                white-space: nowrap;
                font-weight: 100;
				font-size: small;
			}

            th {
               /* border-radius: 4px 4px 0 0;*/
                background-color: var(--host-head-bg, #222);
				color: var(--host-head-color, #222);
                font-weight: 500;
                position: sticky;
                top: 0;
            }

            td * {
                height: 10px;
                max-height: 10px;
            }

            tr:hover td {
                background-color: var(--host-hover-bg, transparent);
            }

            .striped tr:nth-child(even) td{
                background-color: var(--host-striped-bg, rgba(0, 0, 0, 0.02));
            }
            
            .striped tr:nth-child(even):hover td {
                background-color: var(--host-striped-hover_bg, transparent) !important;
            }

            .input {
                font-weight: 100;
                font-size: small;
                padding: 0;
                margin: 0;
                width: 100%;
                height: 100%;
                border: none;
                outline: none;
                background: transparent;
                color: var(--host-color, #333);
                box-sizing: border-box; /* Чтобы паддинги и бордеры не увеличивали размер */
                min-width: 0;           /* В flex-контейнере иногда нужно, чтобы input мог сжиматься */
            }
        </style>
        <link rel="stylesheet" href="./external.css">
    `;

    protected static readonly HTML: string = `
        <div class="table-wrapper">
            <table>
                <thead></thead>
                <tbody></tbody>
            </table>
        </div>
    `;

    private columns: DataTableColumn[] = [];
    private data: any[] = [];
    private currentSort: { column: string; dir: 'asc' | 'desc' } | null = null;

	protected override async createCallback() {
		await super.createCallback();
		this.applyAttributes(OhaeDataTableOldView.ATTRIBUTES);
        await this.renderTable();
	}

    static get observedAttributes() {
        return [...super.observedAttributes, ...this.ATTRIBUTES];
    }

    init(options: IOhaeViewOptions) {
        super.init(options);
        this.columns = options.columns ?? [];
        this.data = options.data ?? [];
		// console.log('dataTable', 0, this.columns);
    }

    private async renderTable() {
        const wrapper = this.shadowRoot?.querySelector('.table-wrapper');
        if (!wrapper) return;

        wrapper.classList.toggle('striped', this.striped);
        
        const table = wrapper.querySelector('table')!;
        const thead = table.querySelector('thead')!;
        const tbody = table.querySelector('tbody')!;

        thead.innerHTML = '';
        tbody.innerHTML = '';

        const headerRow = document.createElement('tr');
        this.columns.forEach(col => {
            const th = document.createElement('th');
            th.textContent = col.header;
            th.style.width = typeof col.width === 'number' ? `${col.width}px` : col.width || 'auto';
            th.style.textAlign = col.align || 'left';
            th.style.alignItems = AlignMap[col.align || 'left'];
            
            if (col.sortable) {
                th.style.cursor = 'pointer';
                th.addEventListener('click', () => this.sortData(col.id));
            }
            
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        for(const item of this.data){
            const row = document.createElement('tr');
            for(const col of this.columns){
                const td = document.createElement('td');
                td.style.textAlign = col.align || 'left';

                // Обработка кастомных компонентов
                if (col.componentOptions) {
                    await this.renderComponentCell(td, col, item);
                }
                // Обработка редактируемых ячеек
                else if (col.editable) {
                    this.renderEditableCell(td, col, item);
                }
                // Обычная ячейка
                else {
                    td.textContent = item[col.id] ?? '';
                }

                row.appendChild(td);
            }
         
            if (this.hover) {
                row.style.cursor = 'pointer';
                row.addEventListener('click', () => this.dispatchRowEvent('row-click', item));
            }
            
            tbody.appendChild(row);
        }
    }

    private async renderComponentCell(td: HTMLTableCellElement, col: DataTableColumn, item: any) {
        const componentWrapper = document.createElement('div');
        componentWrapper.style.display = 'contents';


        // Связываем изменения компонента с данными
        const options = {...col.componentOptions!};
        const self = this;
        const callback = function (this: HTMLElement, e: Event){
            const target = e.target as HTMLInputElement;
			const oldValue = item[col.id];
			const newValue = item[col.id] = target.value;
            self.dispatchCellEvent('cell-update', col.id, item, newValue, oldValue);
            // col.componentOptions!.on?.[e.type]?.call(this, e);
        };
        options.on = {
            change: callback,
            //input: callback
        };

        // Создаем кастомный компонент
        const component = await OhaeUI.createView(options, componentWrapper);
        if (component) {
            // Передаем значение в компонент через атрибут value
            // if (component instanceof HTMLElement) {
                // console.log('set value [',item[col.id],']  to cell [', col.id,']');
                (component as HTMLElement).setAttribute?.('value', item[col.id]);
            // }
            td.appendChild(componentWrapper);
        }
    }
    
    private renderEditableCell(td: HTMLTableCellElement, col: DataTableColumn, item: any) {
        td.textContent = item[col.id] ?? '';
        td.style.cursor = 'pointer';

        td.addEventListener('dblclick', () => {
            if (this.isEditing) return;
            this.startEditing(td, col, item);
        });
    }

    private startEditing(td: HTMLTableCellElement, col: DataTableColumn, item: any) {
        this.isEditing = true;
        const oldValue = item[col.id];
        
        // Сохраняем оригинальное содержимое как текст, а не HTML
        this.currentEditCell = {
            td,
            originalContent: td.textContent || ''
        };
    
        // Создаем input
        const input = document.createElement('input');
        input.type = col.inputType || 'text';
        input.value = oldValue;
        input.classList.add('input');
    
        // Полностью очищаем ячейку и добавляем input
        while(td.firstChild) td.removeChild(td.firstChild);

        const width = td.offsetWidth;
        td.style.width = `${width}px`;
        td.style.minWidth = `${width}px`;
        td.style.maxWidth = `${width}px`;
        td.appendChild(input);
        
        input.focus();

        
        // Обработчики событий
        const finishEdit = (e?: Event) => {
            td.style.width = '';
            td.style.minWidth = '';
            td.style.maxWidth = '';
    

            if (e) e.preventDefault();
            
            // Удаляем обработчики перед изменением содержимого
            input.removeEventListener('blur', finishEdit);
            input.removeEventListener('keydown', handleKeyDown);
            
            const newValue = input.value;
            while(td.firstChild) td.removeChild(td.firstChild);
            td.textContent = newValue; // Используем textContent вместо innerHTML
            item[col.id] = newValue;
            this.isEditing = false;
            console.log("value", 1, oldValue, newValue)
            if (newValue !== oldValue) {
                console.log("value", 2, oldValue, newValue)
                this.dispatchCellEvent('cell-update', col.id, item, newValue, oldValue);
            }
        };
    
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') finishEdit(e);
        };
    
        input.addEventListener('blur', finishEdit);
        input.addEventListener('keydown', handleKeyDown);
    }

    private dispatchCellEvent(eventName: string, columnId: string, data: any,  newValue: any, oldlValue: any) {
        const detail = {
            column: columnId,
			newValue,
			oldlValue,
            data: data,
            rowData: this.data.find(item => item.id === data.id)
        };
        const event = new CustomEvent(eventName, {
            bubbles: true, // Событие всплывает до родительских элементов
            composed: true, // Событие пересекает границы Shadow DOM
            detail,
        });

        this.dispatchEvent(event);
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
    set striped(value: boolean) {
        this.setBooleanAttribute('striped', value);
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
        this.style.setProperty("--host-hover-bg", color.brightness(1.03).hex);

        this.style.setProperty("--host-striped-bg", color.brightness(0.9).hex);
        this.style.setProperty("--host-striped-hover_bg", color.brightness(0.86).hex);
    }
}

OhaeUI.registerViewType('datatable-old', OhaeDataTableOldView);

declare module "../../../OhaeViewOptions" {
    interface IOhaeViewOptions {
        columns?: DataTableColumn[];
        data?: any[];
        striped?: string | boolean;
        hover?: string | boolean;
    }
}

