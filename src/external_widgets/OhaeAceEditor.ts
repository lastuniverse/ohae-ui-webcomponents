// import ace from 'ace-builds/src-noconflict/ace';
import ace from 'ace-builds';
//import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-typescript";


// import 'ace-builds/types/ace-theme.d.ts';
// import 'ace-builds/types/ace-modules.d.ts';


import { OhaeUI } from "../core/OhaeUI";
import { OhaeBaseView } from "../core/widgets/base_view/OhaeBaseView";
import sampleCode from '../samples/sampleCode';


export class OhaeAceEditorView extends OhaeBaseView {
    public static readonly ATTRIBUTES: string[] = [
        'value',
        'mode',
        'theme',
        'fontSize',
        'fontFamily',
        'tabSize',
    ];

    protected static readonly STYLES: string = `
    <style>
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            padding: 0px;
            margin: 0px;
            box-sizing: border-box;
        }

        .editor-container {
            display: flex;
            flex: 1;
            overflow: hidden;
        }
    </style>
	<link rel="stylesheet" href="./external.css">
    `;
    protected static readonly HTML: string = `
        <div class="editor-container"></div>
    `;
    private editor?: any;


    protected override async connectedCallback() {
        await super.connectedCallback();
        this.applyAttributes(OhaeAceEditorView.ATTRIBUTES);

        // Инициализация Ace Editor
        this.initializeAceEditor();
    }

    static get observedAttributes() {
        return [...super.observedAttributes, ...this.ATTRIBUTES];
    }


    async initializeAceEditor() {
        // Динамический импорт Ace Editor
        ace.config.set('basePath', '/src/components/ace/src-noconflict/');

        const container = this.shadowRoot?.querySelector('.editor-container') as HTMLElement;
        // Инициализация редактора
        this.editor = ace.edit(container, {
            // theme: this.theme || 'ace/theme/tomorrow_night_eighties', //
            // mode: this.mode || 'ace/mode/javascript',
            fontFamily: this.fontFamily,
            fontSize: this.fontSize,
            tabSize: this.tabSize,
            value: sampleCode,
            autoScrollEditorIntoView: true,
            useSoftTabs: true,

        });
        // this.editor.setTheme("ace/theme/monokai");
        this.editor.setTheme(this.theme || "ace/theme/tomorrow_night_eighties");
        this.editor.session.setMode(this.mode || "ace/mode/javascript");

        // Привязка Ace Editor к Shadow DOM
        this.editor.renderer.attachToShadowRoot();

    }

    get value(): string {
        return this.editor?.getValue() || '';
    }
    set value(value: string) {
        if (this.editor) {
            this.editor.session.setValue(value || '');
        }
    }

    get mode(): string {
        return this.getAttribute('mode') || 'ace/mode/typescript';
    }
    set mode(value: string) {
        this.setAttribute('mode', value);
        if (this.editor) {
            this.editor.session.setMode(value);
        }
    }

    get theme(): string {
        return this.getAttribute('theme') || 'ace/theme/tomorrow_night_eighties';
    }
    set theme(value: string) {
        this.setAttribute('theme', value);
        if (this.editor) {
            this.editor.setTheme(value);
        }
    }

    get fontSize(): number {
        const fontSize = this.getAttribute('fontSize');
        return fontSize ? parseFloat(fontSize) : 14;
    }
    set fontSize(value: string) {
        this.setAttribute('fontSize', value);
        if (this.editor) {
            this.editor.setFontSize(parseInt(value));
        }
    }

    get fontFamily(): string {
        return this.getAttribute('fontFamily') || "'JetBrains Mono', 'monospace', monospace";
    }
    set fontFamily(value: string) {
        this.setAttribute('fontFamily', value);
        if (this.editor) {
            this.editor.setFontFamily(value);
        }
    }

    get tabSize(): number {
        const tabSize = this.getAttribute('tabSize');
        return tabSize ? parseFloat(tabSize) : 4;
    }
    set tabSize(value: string) {
        this.setAttribute('tabSize', value);
        if (this.editor) {
            this.editor.session.setTabSize(parseInt(value));
        }
    }
}

OhaeUI.registerViewType('ace-editor', OhaeAceEditorView);