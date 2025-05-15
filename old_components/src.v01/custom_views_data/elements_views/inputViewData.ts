import { IOhaeViewOptions } from "../../core/OhaeViewOptions";
import { OhaeButtonView } from "../../core/widgets/input_view/OhaeButtonView";
import { OhaeInputView } from "../../core/widgets/input_view/OhaeInputView";

export const inputsViewData: IOhaeViewOptions = {
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
            on: {
                change: function (event: Event) {
                    console.log(event);
                },				
                input: function () {
                    console.log(event);
                },
            },
        },
        {
            view: 'input',
            type: 'text',
            label: 'введите text',
            value: '11111',
            name: 'imput1',
            // disabled: true,
            id: 'text_01',
            on: {
                change: function (event: Event) {
                    console.log(event);
                },				
                input: function () {
                    console.log(event);
                },
            },
        },
        {
            view: 'input',
            type: 'text',
            label: 'введите text',
            placeholder: 'iput placeholder',
            readonly: true,
            name: 'imput1',
            id: 'text_02',
        },
        // {
        //   view: 'input',
        //   type: 'checkbox',
        //   label: 'введите checkbox',
        //   checked: false,
        // },

        {
            view: 'input',
            type: 'number',
            label: 'введите number',
            min: 2,
            max: 6,
            value: 4,
            step: 0.5,
            on: {
                change: function (event: Event) {
                    // console.log((this as OhaeInputView).value);
                    console.log(event);
                    
                },
            },
        },
        {
            view: 'input',
            type: 'date',
            label: 'введите date',
            min: '2023-03-01',
            max: '2023-06-15',
            value: '2023-03-25',
        },
        {
            view: 'input',
            type: 'datetime-local',
            label: 'введите datetime-local',
            min: '2023-01-07T00:00',
            max: '2023-06-14T00:00',
            value: '2023-03-12T19:30',
        },
        {
            view: 'input',
            type: 'time',
            label: 'введите time',
            min: '09:00',
            max: '18:00',
            value: '13:00',
        },
        {
            disabled: true,
            view: 'input',
            type: 'week',
            label: 'введите week',
            min: '2023-W18',
            max: '2023-W26',
        },
        {
            view: 'input',
            type: 'url',
            label: 'введите url',
            placeholder: 'https://google.com',
            pattern: '^(http(s)://.)[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6})',
        },
        {
            view: 'input',
            type: 'email',
            placeholder: 'ohae@gmail.com',
            label: 'введите email',
        },
        {
            view: 'input',
            type: 'tel',
            value: '+345678900',
            label: 'введите tel',
        },
        {
            view: 'input',
            type: 'search',
            label: 'введите search',
            placeholder: 'введите placeholder',
            size: 5,
            maxlength: 5,
        },
        {
            view: 'input',
            type: 'password',
            label: 'введите password',
        },
        {
            view: 'input',
            type: 'color',
            label: 'введите color',
            disabled: true,
            required: true,
        },
        {
            view: 'input',
            type: 'color',
            label: 'введите color',
            required: true,
        },
        // {
        //     view: 'input',
        //     type: 'radio',
        //     id: 'color1',
        //     name: 'color',
        //     value: 'red',
        //     label: 'введите radio',
        //     inputWidth: 55,
        //     on: {
        //         change: function () {
        //             console.log(this.value);
        //         },
        //     },
        // },
        // {
        //     view: 'input',
        //     type: 'radio',
        //     id: 'color2',
        //     name: 'color',
        //     value: 'green',
        //     label: 'введите radio',
        //     inputWidth: 55,
        //     on: {
        //         change: function () {
        //             console.log(this.value);
        //         },
        //     },
        // },
        // {
        //     view: 'input',
        //     type: 'radio',
        //     id: 'color3',
        //     name: 'color',
        //     value: 'blue',
        //     label: 'введите radio',
        //     inputWidth: 55,
        //     on: {
        //         change: function () {
        //             console.log(this.value);
        //         },
        //     },
        // },
        {
            id: 'tmp1',
            view: 'input',
            type: 'checkbox',
            label: 'введите checkbox',
            // inputWidth: 55,
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
            multiple: 4,
            // lines: 8,
            options: [
                { value: 1, label: '+ 1111 1111 111111 111111 1111 1111' },
                { value: 2, label: '+ 22222 2222 222222222 222' },
                { value: 3, label: '+ 33 33 33333 33' },
                { value: 4, label: '+ 44444 44444 444444444 44444444 444' },
                { value: 5, label: '+ 1111 1111 111111 111111 1111 1111' },
                { value: 6, label: '+ 22222 2222 222222222 222' },
                { value: 7, label: '+ 33 33 33333 33' },
                { value: 8, label: '+ 44444 44444 444444444 44444444 444' },
            ],
        },
        // { view: 'separator' },
        {
            view: 'textarea',
            id: 'textarea_01',
            required: true,
            separator: '●',
            // readonly: false,
            value: 'это textarea но я хочу увидеть как это будет выглядеть с различными вариантами justify.',
            lines: 5,
            label: 'это textarea',
            flex: 0,
        },
        // { view: 'resizer' },
        // {
        // 	view: 'layout',
        // 	flex: 0,
        // },
        { view: 'resizer' },
        {
            view: 'layout',
            flex: 0,
        }
    ],
};