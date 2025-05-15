export class BlenderNumberInput extends HTMLElement {
  private inputElement!: HTMLInputElement;
  private startX = 0;
  private startValue = 0;
  private dragging = false;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        :host {
          display: inline-block;
          user-select: none;
          cursor: ew-resize;
          background-color: #333;
          color: white;
          padding: 4px;
          border: 1px solid #555;
          font-family: monospace;
          text-align: center;
        }
        input {
          background: transparent;
          border: none;
          color: inherit;
          width: 50px;
          text-align: center;
        }
        input:focus {
          outline: none;
        }
      </style>
      <input type="number" />
    `;
  }

  connectedCallback() {
    this.inputElement = this.shadowRoot!.querySelector('input')!;
    this.inputElement.value = this.getAttribute('value') || '0';

    this.inputElement.addEventListener('input', () => {
      this.dispatchEvent(new CustomEvent('change', { detail: this.inputElement.value }));
    });

    this.inputElement.addEventListener('mousedown', (e) => this.onMouseDown(e));
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    window.addEventListener('mouseup', () => this.onMouseUp());
  }

  onMouseDown(e: MouseEvent) {
    this.startX = e.clientX;
    this.startValue = parseFloat(this.inputElement.value) || 0;
    this.dragging = true;
  }

  onMouseMove(e: MouseEvent) {
    if (!this.dragging) return;
    const deltaX = e.clientX - this.startX;
    const step = parseFloat(this.getAttribute('step') || '1');
    this.inputElement.value = (this.startValue + deltaX * step).toFixed(2);
    this.dispatchEvent(new CustomEvent('change', { detail: this.inputElement.value }));
  }

  onMouseUp() {
    this.dragging = false;
  }

  get value() {
    return parseFloat(this.inputElement.value);
  }

  set value(val: number) {
    this.inputElement.value = val.toString();
  }
}

customElements.define('blender-number-input', BlenderNumberInput);