import { OhaeUI } from "../../OhaeUI";
import { OhaeBaseView } from "../OhaeBaseView";

interface IElement {
    element: HTMLElement;
    size: number;
    minSize: number;
    maxSize: number;
    newSize: number;
}

export class OhaeResizerView extends OhaeBaseView {
    public static readonly ATTRIBUTES: string[] = [

    ];
    protected static readonly STYLES: string = `
        <style>
            :host {
                display: block; 
                padding: 0px;
                margin: 1px;
            }
            :host([direction="cols"]) {
                /* background: url("data:image/gif;base64,R0lGODlhAwAdAIABAJWr7f///yH5BAEAAAEALAAAAAADAB0AAAIQRBynaaje0pORrWnhrbi3AgA7") no-repeat center center; */
                cursor: e-resize;
            }
            :host([direction="rows"]) {
                /* background:  url("data:image/gif;base64,R0lGODlhHQADAIABAJWr7f///yH5BAEAAAEALAAAAAAdAAMAAAINRIynyesBo5y0tuswKgA7") no-repeat center center; */
                cursor: n-resize;
            }

            :host([direction="cols"]:hover) .overlay2{
                transform: scaleX(7);
            }
            :host([direction="rows"]:hover) .overlay2{
                transform: scaleY(7);
            }

            :host([direction="cols"]:active) .overlay2{
                transform: scaleX(4);
            }   
            :host([direction="rows"]:active) .overlay2{
                transform: scaleY(4);
            }

            :host([direction="cols"]) .overlay2{
                transform: scaleX(4);
            }   
            :host([direction="rows"]) .overlay2{
                transform: scaleY(4);
            }

            .container {
                position: relative;
                width: inherit;
                height: 100%;
                border: none;
                padding: 0px;
                margin: 0px; 
            }
            .overlay1, .overlay2 {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }

            .overlay1 {
                background-color: #222;
            }

            :host([direction="cols"]) .overlay1{
                background: url("data:image/gif;base64,R0lGODlhAwAdAIABAJWr7f///yH5BAEAAAEALAAAAAADAB0AAAIQRBynaaje0pORrWnhrbi3AgA7") no-repeat center center;
            }
            :host([direction="rows"]) .overlay1{
                background:  url("data:image/gif;base64,R0lGODlhHQADAIABAJWr7f///yH5BAEAAAEALAAAAAAdAAMAAAINRIynyesBo5y0tuswKgA7") no-repeat center center;
            }


            :host(:hover) .overlay1{
                background-color: #191919; /* #415e9c60;*/
            }

            :host(:active) .overlay1{
                /* Эффект при нажатии */
                background-color: #555;
            }

            .overlay2 {
                background: transparent;
            }                
            .overlay2_ {
                background:  rgba(255, 0, 0, 0.5);
            }                
        </style>
	`;
	protected static readonly HTML: string = `
		<slot><div class="container">
            <div class="overlay1"></div>
            <div class="overlay2"></div>
        </div></slot>
	`;
    private startX: number = 0;
    private startY: number = 0;
    private beforeElements: IElement[] = [];
    private afterElements: IElement[] = [];
    private delta: number = 0;

    static get observedAttributes() {
        return [...super.ATTRIBUTES, ...this.ATTRIBUTES];
    }

    protected override async createCallback() {
        await super.createCallback()
        this.setAttribute('direction', this.isRows() ? 'rows' : 'cols');
        this.applyDirrection();
        this.addEventListener('mousedown', this.handleMouseDown as EventListener);
    }

    protected override disconnectedCallback() {
        this.removeEventListener('mousedown', this.handleMouseDown);
    }

    protected applyDirrection() {
        // if (!this.isConnected) return;
        if (this.isRows()) {
            this.style.height = '2px';
            this.style.minHeight = '2px';
            this.style.maxHeight = '2px';
        } else {
            this.style.width = '2px';
            this.style.minWidth = '2px';
            this.style.maxWidth = '2px';
        }
    }

    private isRows(): boolean {
        const container = this.parentElement as HTMLElement;
        return container.getAttribute('direction') === 'rows';
    }

    private handleMouseDown = (event: MouseEvent) => {
        event.preventDefault();
        this.startX = event.clientX;
        this.startY = event.clientY;

        this.storeElements()

        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    };

    private storeElements(): void {
        const container = this.parentElement as HTMLElement;
        if (!container) return;

        const elements = Array.from(container.children) as HTMLElement[];

        this.beforeElements = [];
        this.afterElements = [];

        let isBefore = true;
        elements.forEach(element => {
            if (element === this) {
                isBefore = false;
                return;
            }

            const size = this.isRows() ? element.offsetHeight : element.offsetWidth;
            const minSize = parseFloat(getComputedStyle(element)[this.isRows() ? 'minHeight' : 'minWidth']) || 0;
            const maxSize = parseFloat(getComputedStyle(element)[this.isRows() ? 'maxHeight' : 'maxWidth']) || Infinity;

            const data = { element, size, minSize, maxSize, newSize: size } as IElement;

            if (isBefore) {
                this.beforeElements.unshift(data);
            } else {
                this.afterElements.push(data);
            }
        });
    }

    private handleMouseMove = (event: MouseEvent) => {
        const container = this.parentElement as HTMLElement;
        if (!container) return;

        let delta = this.isRows() ? event.clientY - this.startY : event.clientX - this.startX;
        this.delta = Math.abs(delta);

        if (delta < 0) {
            this.decreaseSize([...this.beforeElements], this.delta);
            this.increaseSize([...this.afterElements], this.delta);
            this.decreaseSize([...this.beforeElements], this.delta);
        } else {
            this.decreaseSize([...this.afterElements], this.delta);
            this.increaseSize([...this.beforeElements], this.delta);
            this.decreaseSize([...this.afterElements], this.delta);
        }

        this.applySize();
    };

    private decreaseSize(items: IElement[], delta: number) {
        const item = items.shift();
        if (!item) {
            this.delta -= delta;
            return;
        }
        const localDelta = Math.min(delta, item.size - item.minSize);
        item.newSize = item.size - localDelta;
        if (localDelta <= delta) {
            this.decreaseSize(items, delta - localDelta);
        } else {
            this.delta -= delta;
        }
    }

    private increaseSize(items: IElement[], delta: number) {
        const item = items.shift();
        if (!item) {
            this.delta -= delta;
            return;
        }
        const localDelta = Math.min(delta, item.maxSize - item.size);
        item.newSize = item.size + localDelta;
        if (localDelta <= delta) {
            this.increaseSize(items, delta - localDelta);
        } else {
            this.delta -= delta;
        }
    }

    private applySize() {
        const elements = [...this.beforeElements, ...this.afterElements];
        elements.forEach((item, i) => {
            item.element.style.flexGrow = `${item.newSize}`;
        });
    }

    private handleMouseUp = () => {
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    };
}

OhaeUI.registerViewType('resizer', OhaeResizerView);
