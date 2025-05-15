import { IOhaeViewOptions } from "../../core/OhaeViewOptions";
import { OhaeButtonView } from "../../core/widgets/input_view/OhaeButtonView";
import { OhaeInputView } from "../../core/widgets/input_view/OhaeInputView";

export const miniInputsViewData: IOhaeViewOptions = {
    view: 'layout',
    // flex: 0,
    // margin: '3px',
    // width: 600,
    minWidth: 600,
    rows: [
        {
            view: 'input',
            type: 'range',
            label: 'установите tabSize',
            min: 0,
            max: 1,
            step: 0.05,
            value: 0.0,
            required: true,
            // disabled: true,
            on: {
                change: function (event: Event) {
                    console.log(event);
                },				
                input: function (event: Event) {
                    console.log(event);
                },
            },
        },
        {
            view: 'input',
            type: 'number',
            label: 'введите number',
            min: 2,
            max: 6,
            value: 4,
            step: 0.5,
            // reverse: true,
            on: {
                change: function (event: Event) {
                    console.log(event);
                },				
                input: function (event: Event) {
                    console.log(event);
                },
            },
        },
        {
            view: 'input',
            type: 'color',
            label: 'введите color',
            required: true,
            on: {
                change: function (event: Event) {
                    console.log(event);
                },				
                input: function (event: Event) {
                    console.log(event);
                },
            },
        },
        {
            id: 'tmp1',
            view: 'input',
            type: 'checkbox',
            label: 'введите checkbox',
            required: true,
            on: {
                change: function (event: Event) {
                    console.log(event);
                },				
                input: function (event: Event) {
                    console.log(event);
                },
            },
        },
        {
            view: 'select',
            flex: 0,
            id: 'select_02',
            label: 'введите multiple select',
            // reverse: true,
            // multiple: 4,
            // lines: 4,
            options: [
                { value: 1, label: 'component' },
                { value: 2, label: 'layer' },
                { value: 3, label: 'sprite' },
                { value: 4, label: 'group' },
                { value: 5, label: 'sound' },
                { value: 6, label: 'trigger' },
                { value: 7, label: 'condition' },
            ],
            on: {
                change: function (event: Event) {
                    console.log(event);
                },				
                input: function (event: Event) {
                    console.log(event);
                },
            },
        },
        {
            view: 'layout',
            // flex: 1,
        }
    ],
};