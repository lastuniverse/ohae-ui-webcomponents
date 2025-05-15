import { IOhaeViewOptions } from "src/core/OhaeViewOptions";
import { accordionViewData } from "./elements_views/accordionViewData";

export const fullViewConfig: IOhaeViewOptions = {
    "view": "layout",
    "minWidth": "100%",
    "overflow": "hidden",
    "rows": [
        {
            "view": "layout",
            "backgroundColor": "#111",
            "minHeight": 26,
            "maxHeight": 26,
            "body": {
                "view": "layout",
                "padding": 0,
                "cols": [
                    {
                        "view": "layout",
                        "maxHeight": 24,
                        "maxWidth": 48,
                        "minWidth": 48,
                        "overflow": "hidden",
                        "margin": 6,
                        "flex": 0,
                        "valign": "center",
                        "body": {
                            "view": "img",
                            "height": "16px",
                            "src": "./assets/logo_64.png",
                            "on": {}
                        }
                    },
                    {
                        "flex": 1
                    }
                ]
            }
        },
        {
            "view": "layout",
            "minHeight": 1,
            "maxHeight": 1
        },
        {
            "view": "tabs",
            "tabsSide": "left",
            "tabButtonBackground": "#3d3d3d",
            "cols": [
                {
                    "view": "tab-item",
                    "icon": "fa-cube",
                    "header": "ohae editor",
                    "body": {
                        "view": "layout",
                        "padding": 0,
                        "cols": [
                            {
                                "view": "layout",
                                "flex": 3,
                                "backgroundColor": "#556",
                                "body": {},
                                "stated": {
                                    "flex": "ui.graphEditor.editor.attributes.flex"
                                }
                            },
                            {
                                "view": "resizer"
                            },
                            {
                                "view": "layout",
                                "width": 600,
                                "minWidth": 30,
                                "backgroundColor": "#222",
                                "padding": 0,
                                "rows": [
                                    {
                                        "view": "layout",
                                        "minHeight": 30,
                                        "body": {
                                            "view": "tabs",
                                            "tabsSide": "left",
                                            "backgroundColor": "#222",
                                            "tabButtonBackground": "#383838",
                                            "overflow": "hidden",
                                            "cols": [
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-asterisk",
                                                    "header": "elements",
                                                    "backgroundColor": "#292929",
                                                    "padding": "7px 0px 7px 7px",
                                                    "body": {
                                                        "view": "datatable",
                                                        "backgroundColor": "#292929",
                                                        "striped": true,
                                                        "hover": true,
                                                        "enableDragging": true,
                                                        "overflowX": "hidden",
                                                        "overflowY": "scroll",
                                                        "rowHeight": 20,
                                                        "columns": [
                                                            {
                                                                "id": "type",
                                                                "header": "",
                                                                "align": "left",
                                                                "sortable": true,
                                                                "width": 24,
                                                                "componentOptions": {
                                                                    "view": "icon-of-type",
                                                                    "types": {
                                                                        "component": {
                                                                            "icon": "fa-window-maximize",
                                                                            "color": "#bc804e"
                                                                        },
                                                                        "layer": {
                                                                            "icon": "fa-object-ungroup",
                                                                            "color": "#bc804e"
                                                                        },
                                                                        "sprite": {
                                                                            "icon": "fa-image",
                                                                            "color": "#bc804e"
                                                                        },
                                                                        "group": {
                                                                            "icon": "fa-layer-group",
                                                                            "color": "#bc804e"
                                                                        },
                                                                        "trigger": {
                                                                            "icon": "fa-toggle-on",
                                                                            "color": "#bc804e"
                                                                        },
                                                                        "condition": {
                                                                            "icon": "fa-tag",
                                                                            "color": "#bc804e"
                                                                        },
                                                                        "sound": {
                                                                            "icon": "fa-volume-up",
                                                                            "color": "#bc804e"
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "id": "name",
                                                                "header": "Объект",
                                                                "editable": true,
                                                                "sortable": true,
                                                                "inputType": "text"
                                                            },
                                                            {
                                                                "id": "parent",
                                                                "header": "Родитель",
                                                                "editable": false,
                                                                "sortable": true,
                                                                "inputType": "text"
                                                            },
                                                            {
                                                                "id": "type",
                                                                "header": "Тип",
                                                                "editable": false,
                                                                "sortable": true
                                                            },
                                                            {
                                                                "id": "interactive",
                                                                "header": "",
                                                                "align": "center",
                                                                "sortable": true,
                                                                "width": 24,
                                                                "componentOptions": {
                                                                    "view": "icon-checkbox",
                                                                    "name": "visible",
                                                                    "color": "#aaa",
                                                                    "openIcon": "fa-bell",
                                                                    "closeIcon": "fa-bell-slash",
                                                                    "on": {}
                                                                }
                                                            },
                                                            {
                                                                "id": "locked",
                                                                "header": "",
                                                                "sortable": true,
                                                                "align": "center",
                                                                "width": 24,
                                                                "componentOptions": {
                                                                    "view": "icon-checkbox",
                                                                    "color": "#ccc",
                                                                    "openIcon": "fa-unlock",
                                                                    "closeIcon": "fa-lock",
                                                                    "on": {}
                                                                }
                                                            },
                                                            {
                                                                "id": "visible",
                                                                "header": "",
                                                                "align": "center",
                                                                "sortable": true,
                                                                "width": 20,
                                                                "componentOptions": {
                                                                    "view": "icon-checkbox",
                                                                    "name": "visible",
                                                                    "color": "#ccc",
                                                                    "openIcon": "fa-eye",
                                                                    "closeIcon": "fa-eye-slash",
                                                                    "on": {}
                                                                }
                                                            }
                                                        ],
                                                        "data": [
                                                            {
                                                                "id": 1,
                                                                "name": "scene",
                                                                "parent": "",
                                                                "type": "component",
                                                                "interactive": false,
                                                                "locked": false,
                                                                "visible": true
                                                            },
                                                            {
                                                                "id": 2,
                                                                "name": "test1",
                                                                "parent": "scene",
                                                                "type": "group",
                                                                "interactive": false,
                                                                "locked": false,
                                                                "visible": false
                                                            },
                                                            {
                                                                "id": 3,
                                                                "name": "test2",
                                                                "parent": "scene",
                                                                "type": "trigger",
                                                                "interactive": true,
                                                                "locked": true,
                                                                "visible": false
                                                            },
                                                            {
                                                                "id": 4,
                                                                "name": "test3",
                                                                "parent": "scene",
                                                                "type": "condition",
                                                                "interactive": true,
                                                                "locked": true,
                                                                "visible": false
                                                            },
                                                            {
                                                                "id": 5,
                                                                "name": "test4",
                                                                "parent": "scene",
                                                                "type": "sound",
                                                                "interactive": false,
                                                                "locked": false,
                                                                "visible": false
                                                            },
                                                            {
                                                                "id": 6,
                                                                "name": "sky",
                                                                "parent": "scene",
                                                                "type": "layer",
                                                                "interactive": false,
                                                                "locked": false,
                                                                "visible": true
                                                            },
                                                            {
                                                                "id": 7,
                                                                "name": "skybg",
                                                                "parent": "sky",
                                                                "type": "sprite",
                                                                "interactive": false,
                                                                "locked": false,
                                                                "visible": true
                                                            },
                                                            {
                                                                "id": 8,
                                                                "name": "sky",
                                                                "parent": "sky",
                                                                "type": "sprite",
                                                                "interactive": false,
                                                                "locked": false,
                                                                "visible": true
                                                            },
                                                            {
                                                                "id": 9,
                                                                "name": "sun",
                                                                "parent": "sky",
                                                                "type": "sprite",
                                                                "interactive": false,
                                                                "locked": false,
                                                                "visible": true
                                                            },
                                                            {
                                                                "id": 10,
                                                                "name": "clouds",
                                                                "parent": "sky",
                                                                "type": "layer",
                                                                "interactive": false,
                                                                "locked": false,
                                                                "visible": true
                                                            },
                                                            {
                                                                "id": 11,
                                                                "name": "cloud1",
                                                                "parent": "clouds",
                                                                "type": "sprite",
                                                                "interactive": true,
                                                                "locked": true,
                                                                "visible": false
                                                            },
                                                            {
                                                                "id": 12,
                                                                "name": "cloud2",
                                                                "parent": "clouds",
                                                                "type": "sprite",
                                                                "interactive": true,
                                                                "locked": true,
                                                                "visible": false
                                                            },
                                                            {
                                                                "id": 13,
                                                                "name": "cloud3",
                                                                "parent": "clouds",
                                                                "type": "sprite",
                                                                "interactive": false,
                                                                "locked": false,
                                                                "visible": false
                                                            },
                                                            {
                                                                "id": 14,
                                                                "name": "cloud4",
                                                                "parent": "clouds",
                                                                "type": "sprite",
                                                                "interactive": false,
                                                                "locked": false,
                                                                "visible": false
                                                            },
                                                            {
                                                                "id": 15,
                                                                "name": "fudzi",
                                                                "parent": "scene",
                                                                "type": "layer",
                                                                "interactive": true,
                                                                "locked": true,
                                                                "visible": true
                                                            },
                                                            {
                                                                "id": 16,
                                                                "name": "fudzi",
                                                                "parent": "fudzi",
                                                                "type": "sprite",
                                                                "interactive": true,
                                                                "locked": true,
                                                                "visible": true
                                                            },
                                                            {
                                                                "id": 17,
                                                                "name": "sakura",
                                                                "parent": "scene",
                                                                "type": "layer",
                                                                "interactive": true,
                                                                "locked": true,
                                                                "visible": true
                                                            },
                                                            {
                                                                "id": 19,
                                                                "name": "sakura1",
                                                                "parent": "sakura1",
                                                                "type": "sprite",
                                                                "interactive": false,
                                                                "locked": false,
                                                                "visible": false
                                                            },
                                                            {
                                                                "id": 19,
                                                                "name": "sakura2",
                                                                "parent": "sakura2",
                                                                "type": "sprite",
                                                                "interactive": false,
                                                                "locked": false,
                                                                "visible": false
                                                            },
                                                            {
                                                                "id": 20,
                                                                "name": "sakura3",
                                                                "parent": "sakura3",
                                                                "type": "sprite",
                                                                "interactive": true,
                                                                "locked": true,
                                                                "visible": false
                                                            },
                                                            {
                                                                "id": 21,
                                                                "name": "sakura4",
                                                                "parent": "sakura4",
                                                                "type": "sprite",
                                                                "interactive": true,
                                                                "locked": true,
                                                                "visible": false
                                                            },
                                                            {
                                                                "id": 22,
                                                                "name": "sakura4",
                                                                "parent": "sakura4",
                                                                "type": "sprite",
                                                                "interactive": false,
                                                                "locked": false,
                                                                "visible": false
                                                            }
                                                        ],
                                                        "on": {}
                                                    }
                                                },
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-list-ul",
                                                    "header": "list",
                                                    "backgroundColor": "#393939",
                                                    "padding": "7px 7px 7px 7px",
                                                    "body": {
                                                        "align": "center",
                                                        "rows": [
                                                            "<h1>list</h1><hr>",
                                                            "я еще не придумал что тут будет"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-chain",
                                                    "header": "chains",
                                                    "backgroundColor": "#393939",
                                                    "padding": "7px 7px 7px 7px",
                                                    "body": {
                                                        "align": "center",
                                                        "rows": [
                                                            "<h1>chains</h1><hr>",
                                                            "я еще не придумал что тут будет"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-list-alt",
                                                    "header": "components",
                                                    "backgroundColor": "#393939",
                                                    "padding": "7px 7px 7px 7px",
                                                    "body": {
                                                        "align": "center",
                                                        "rows": [
                                                            "<h1>components</h1><hr>",
                                                            "я еще не придумал что тут будет"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-server",
                                                    "header": "triggers",
                                                    "backgroundColor": "#393939",
                                                    "padding": "7px 7px 7px 7px",
                                                    "body": {
                                                        "align": "center",
                                                        "rows": [
                                                            "<h1>triggers</h1><hr>",
                                                            "я еще не придумал что тут будет"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-th",
                                                    "header": "images",
                                                    "backgroundColor": "#393939",
                                                    "padding": "7px 7px 7px 7px",
                                                    "body": {
                                                        "align": "center",
                                                        "rows": [
                                                            "<h1>images</h1><hr>",
                                                            "я еще не придумал что тут будет"
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "view": "resizer"
                                    },
                                    {
                                        "view": "layout",
                                        "flex": 2,
                                        "minHeight": 30,
                                        "overflow": "hidden",
                                        "body": {
                                            "view": "tabs",
                                            "tabsSide": "left",
                                            "backgroundColor": "#222",
                                            "tabButtonBackground": "#3d3d3d",
                                            "overflow": "hidden",
                                            "cols": [
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-cube",
                                                    "header": "ohae editor",
                                                    "overflowY": "scroll",
                                                    "overflowX": "hidden",
                                                    "backgroundColor": "#333",
                                                    "padding": "7px 0 7px 7px",
                                                    "rows": [
                                                        {
                                                            "view": "accordion",
                                                            "flex": 1,
                                                            "multiple": true,
                                                            "rows": [
                                                                {
                                                                    "view": "accordion-item",
                                                                    "header": "трансформация",
                                                                    "backgroundColor": "#3d3d3d",
                                                                    "flex": 0,
                                                                    "collapsed": true,
                                                                    "rows": [
                                                                        {
                                                                            "view": "input",
                                                                            "type": "range",
                                                                            "label": "установите tabSize",
                                                                            "min": 0,
                                                                            "max": 1,
                                                                            "step": 0.05,
                                                                            "value": 0,
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "number",
                                                                            "label": "введите number",
                                                                            "min": 2,
                                                                            "max": 6,
                                                                            "value": 4,
                                                                            "step": 0.5,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "color",
                                                                            "label": "введите color",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "id": "tmp1",
                                                                            "view": "input",
                                                                            "type": "checkbox",
                                                                            "label": "введите checkbox",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "select",
                                                                            "flex": 0,
                                                                            "id": "select_02",
                                                                            "label": "введите multiple select",
                                                                            "options": [
                                                                                {
                                                                                    "value": 1,
                                                                                    "label": "component"
                                                                                },
                                                                                {
                                                                                    "value": 2,
                                                                                    "label": "layer"
                                                                                },
                                                                                {
                                                                                    "value": 3,
                                                                                    "label": "sprite"
                                                                                },
                                                                                {
                                                                                    "value": 4,
                                                                                    "label": "group"
                                                                                },
                                                                                {
                                                                                    "value": 5,
                                                                                    "label": "sound"
                                                                                },
                                                                                {
                                                                                    "value": 6,
                                                                                    "label": "trigger"
                                                                                },
                                                                                {
                                                                                    "value": 7,
                                                                                    "label": "condition"
                                                                                }
                                                                            ],
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "layout"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "view": "accordion-item",
                                                                    "header": "боундинг (геометрия)",
                                                                    "backgroundColor": "#3d3d3d",
                                                                    "flex": 0,
                                                                    "collapsed": true,
                                                                    "rows": [
                                                                        {
                                                                            "view": "input",
                                                                            "type": "range",
                                                                            "label": "установите tabSize",
                                                                            "min": 0,
                                                                            "max": 1,
                                                                            "step": 0.05,
                                                                            "value": 0,
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "number",
                                                                            "label": "введите number",
                                                                            "min": 2,
                                                                            "max": 6,
                                                                            "value": 4,
                                                                            "step": 0.5,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "color",
                                                                            "label": "введите color",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "id": "tmp1",
                                                                            "view": "input",
                                                                            "type": "checkbox",
                                                                            "label": "введите checkbox",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "select",
                                                                            "flex": 0,
                                                                            "id": "select_02",
                                                                            "label": "введите multiple select",
                                                                            "options": [
                                                                                {
                                                                                    "value": 1,
                                                                                    "label": "component"
                                                                                },
                                                                                {
                                                                                    "value": 2,
                                                                                    "label": "layer"
                                                                                },
                                                                                {
                                                                                    "value": 3,
                                                                                    "label": "sprite"
                                                                                },
                                                                                {
                                                                                    "value": 4,
                                                                                    "label": "group"
                                                                                },
                                                                                {
                                                                                    "value": 5,
                                                                                    "label": "sound"
                                                                                },
                                                                                {
                                                                                    "value": 6,
                                                                                    "label": "trigger"
                                                                                },
                                                                                {
                                                                                    "value": 7,
                                                                                    "label": "condition"
                                                                                }
                                                                            ],
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "layout"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "view": "accordion-item",
                                                                    "header": "эффеты (шэйдереры)",
                                                                    "backgroundColor": "#3d3d3d",
                                                                    "flex": 0,
                                                                    "collapsed": true,
                                                                    "rows": [
                                                                        {
                                                                            "view": "input",
                                                                            "type": "range",
                                                                            "label": "установите tabSize",
                                                                            "min": 0,
                                                                            "max": 1,
                                                                            "step": 0.05,
                                                                            "value": 0,
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "number",
                                                                            "label": "введите number",
                                                                            "min": 2,
                                                                            "max": 6,
                                                                            "value": 4,
                                                                            "step": 0.5,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "color",
                                                                            "label": "введите color",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "id": "tmp1",
                                                                            "view": "input",
                                                                            "type": "checkbox",
                                                                            "label": "введите checkbox",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "select",
                                                                            "flex": 0,
                                                                            "id": "select_02",
                                                                            "label": "введите multiple select",
                                                                            "options": [
                                                                                {
                                                                                    "value": 1,
                                                                                    "label": "component"
                                                                                },
                                                                                {
                                                                                    "value": 2,
                                                                                    "label": "layer"
                                                                                },
                                                                                {
                                                                                    "value": 3,
                                                                                    "label": "sprite"
                                                                                },
                                                                                {
                                                                                    "value": 4,
                                                                                    "label": "group"
                                                                                },
                                                                                {
                                                                                    "value": 5,
                                                                                    "label": "sound"
                                                                                },
                                                                                {
                                                                                    "value": 6,
                                                                                    "label": "trigger"
                                                                                },
                                                                                {
                                                                                    "value": 7,
                                                                                    "label": "condition"
                                                                                }
                                                                            ],
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "layout"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "view": "accordion-item",
                                                                    "header": "эффеты (частицы)",
                                                                    "backgroundColor": "#3d3d3d",
                                                                    "flex": 0,
                                                                    "collapsed": true,
                                                                    "rows": [
                                                                        {
                                                                            "view": "input",
                                                                            "type": "range",
                                                                            "label": "установите tabSize",
                                                                            "min": 0,
                                                                            "max": 1,
                                                                            "step": 0.05,
                                                                            "value": 0,
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "number",
                                                                            "label": "введите number",
                                                                            "min": 2,
                                                                            "max": 6,
                                                                            "value": 4,
                                                                            "step": 0.5,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "color",
                                                                            "label": "введите color",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "id": "tmp1",
                                                                            "view": "input",
                                                                            "type": "checkbox",
                                                                            "label": "введите checkbox",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "select",
                                                                            "flex": 0,
                                                                            "id": "select_02",
                                                                            "label": "введите multiple select",
                                                                            "options": [
                                                                                {
                                                                                    "value": 1,
                                                                                    "label": "component"
                                                                                },
                                                                                {
                                                                                    "value": 2,
                                                                                    "label": "layer"
                                                                                },
                                                                                {
                                                                                    "value": 3,
                                                                                    "label": "sprite"
                                                                                },
                                                                                {
                                                                                    "value": 4,
                                                                                    "label": "group"
                                                                                },
                                                                                {
                                                                                    "value": 5,
                                                                                    "label": "sound"
                                                                                },
                                                                                {
                                                                                    "value": 6,
                                                                                    "label": "trigger"
                                                                                },
                                                                                {
                                                                                    "value": 7,
                                                                                    "label": "condition"
                                                                                }
                                                                            ],
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "layout"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "view": "accordion-item",
                                                                    "header": "эффекты (цвет)",
                                                                    "backgroundColor": "#3d3d3d",
                                                                    "flex": 0,
                                                                    "collapsed": true,
                                                                    "rows": [
                                                                        {
                                                                            "view": "input",
                                                                            "type": "range",
                                                                            "label": "установите tabSize",
                                                                            "min": 0,
                                                                            "max": 1,
                                                                            "step": 0.05,
                                                                            "value": 0,
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "number",
                                                                            "label": "введите number",
                                                                            "min": 2,
                                                                            "max": 6,
                                                                            "value": 4,
                                                                            "step": 0.5,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "color",
                                                                            "label": "введите color",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "id": "tmp1",
                                                                            "view": "input",
                                                                            "type": "checkbox",
                                                                            "label": "введите checkbox",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "select",
                                                                            "flex": 0,
                                                                            "id": "select_02",
                                                                            "label": "введите multiple select",
                                                                            "options": [
                                                                                {
                                                                                    "value": 1,
                                                                                    "label": "component"
                                                                                },
                                                                                {
                                                                                    "value": 2,
                                                                                    "label": "layer"
                                                                                },
                                                                                {
                                                                                    "value": 3,
                                                                                    "label": "sprite"
                                                                                },
                                                                                {
                                                                                    "value": 4,
                                                                                    "label": "group"
                                                                                },
                                                                                {
                                                                                    "value": 5,
                                                                                    "label": "sound"
                                                                                },
                                                                                {
                                                                                    "value": 6,
                                                                                    "label": "trigger"
                                                                                },
                                                                                {
                                                                                    "value": 7,
                                                                                    "label": "condition"
                                                                                }
                                                                            ],
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "layout"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "view": "accordion-item",
                                                                    "header": "группы",
                                                                    "backgroundColor": "#3d3d3d",
                                                                    "flex": 0,
                                                                    "collapsed": true,
                                                                    "rows": [
                                                                        {
                                                                            "view": "input",
                                                                            "type": "range",
                                                                            "label": "установите tabSize",
                                                                            "min": 0,
                                                                            "max": 1,
                                                                            "step": 0.05,
                                                                            "value": 0,
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "number",
                                                                            "label": "введите number",
                                                                            "min": 2,
                                                                            "max": 6,
                                                                            "value": 4,
                                                                            "step": 0.5,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "color",
                                                                            "label": "введите color",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "id": "tmp1",
                                                                            "view": "input",
                                                                            "type": "checkbox",
                                                                            "label": "введите checkbox",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "select",
                                                                            "flex": 0,
                                                                            "id": "select_02",
                                                                            "label": "введите multiple select",
                                                                            "options": [
                                                                                {
                                                                                    "value": 1,
                                                                                    "label": "component"
                                                                                },
                                                                                {
                                                                                    "value": 2,
                                                                                    "label": "layer"
                                                                                },
                                                                                {
                                                                                    "value": 3,
                                                                                    "label": "sprite"
                                                                                },
                                                                                {
                                                                                    "value": 4,
                                                                                    "label": "group"
                                                                                },
                                                                                {
                                                                                    "value": 5,
                                                                                    "label": "sound"
                                                                                },
                                                                                {
                                                                                    "value": 6,
                                                                                    "label": "trigger"
                                                                                },
                                                                                {
                                                                                    "value": 7,
                                                                                    "label": "condition"
                                                                                }
                                                                            ],
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "layout"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "view": "accordion-item",
                                                                    "header": "анимации",
                                                                    "backgroundColor": "#3d3d3d",
                                                                    "flex": 0,
                                                                    "collapsed": true,
                                                                    "rows": [
                                                                        {
                                                                            "view": "input",
                                                                            "type": "range",
                                                                            "label": "установите tabSize",
                                                                            "min": 0,
                                                                            "max": 1,
                                                                            "step": 0.05,
                                                                            "value": 0,
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "number",
                                                                            "label": "введите number",
                                                                            "min": 2,
                                                                            "max": 6,
                                                                            "value": 4,
                                                                            "step": 0.5,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "color",
                                                                            "label": "введите color",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "id": "tmp1",
                                                                            "view": "input",
                                                                            "type": "checkbox",
                                                                            "label": "введите checkbox",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "select",
                                                                            "flex": 0,
                                                                            "id": "select_02",
                                                                            "label": "введите multiple select",
                                                                            "options": [
                                                                                {
                                                                                    "value": 1,
                                                                                    "label": "component"
                                                                                },
                                                                                {
                                                                                    "value": 2,
                                                                                    "label": "layer"
                                                                                },
                                                                                {
                                                                                    "value": 3,
                                                                                    "label": "sprite"
                                                                                },
                                                                                {
                                                                                    "value": 4,
                                                                                    "label": "group"
                                                                                },
                                                                                {
                                                                                    "value": 5,
                                                                                    "label": "sound"
                                                                                },
                                                                                {
                                                                                    "value": 6,
                                                                                    "label": "trigger"
                                                                                },
                                                                                {
                                                                                    "value": 7,
                                                                                    "label": "condition"
                                                                                }
                                                                            ],
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "layout"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "view": "accordion-item",
                                                                    "header": "кастомизация",
                                                                    "backgroundColor": "#3d3d3d",
                                                                    "flex": 0,
                                                                    "collapsed": true,
                                                                    "rows": [
                                                                        {
                                                                            "view": "input",
                                                                            "type": "range",
                                                                            "label": "установите tabSize",
                                                                            "min": 0,
                                                                            "max": 1,
                                                                            "step": 0.05,
                                                                            "value": 0,
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "number",
                                                                            "label": "введите number",
                                                                            "min": 2,
                                                                            "max": 6,
                                                                            "value": 4,
                                                                            "step": 0.5,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "color",
                                                                            "label": "введите color",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "id": "tmp1",
                                                                            "view": "input",
                                                                            "type": "checkbox",
                                                                            "label": "введите checkbox",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "select",
                                                                            "flex": 0,
                                                                            "id": "select_02",
                                                                            "label": "введите multiple select",
                                                                            "options": [
                                                                                {
                                                                                    "value": 1,
                                                                                    "label": "component"
                                                                                },
                                                                                {
                                                                                    "value": 2,
                                                                                    "label": "layer"
                                                                                },
                                                                                {
                                                                                    "value": 3,
                                                                                    "label": "sprite"
                                                                                },
                                                                                {
                                                                                    "value": 4,
                                                                                    "label": "group"
                                                                                },
                                                                                {
                                                                                    "value": 5,
                                                                                    "label": "sound"
                                                                                },
                                                                                {
                                                                                    "value": 6,
                                                                                    "label": "trigger"
                                                                                },
                                                                                {
                                                                                    "value": 7,
                                                                                    "label": "condition"
                                                                                }
                                                                            ],
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "layout"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "view": "accordion-item",
                                                                    "header": "параметры редактора 5",
                                                                    "backgroundColor": "#3d3d3d",
                                                                    "flex": 0,
                                                                    "collapsed": true,
                                                                    "rows": [
                                                                        {
                                                                            "view": "input",
                                                                            "type": "range",
                                                                            "label": "установите tabSize",
                                                                            "min": 0,
                                                                            "max": 1,
                                                                            "step": 0.05,
                                                                            "value": 0,
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "number",
                                                                            "label": "введите number",
                                                                            "min": 2,
                                                                            "max": 6,
                                                                            "value": 4,
                                                                            "step": 0.5,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "input",
                                                                            "type": "color",
                                                                            "label": "введите color",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "id": "tmp1",
                                                                            "view": "input",
                                                                            "type": "checkbox",
                                                                            "label": "введите checkbox",
                                                                            "required": true,
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "select",
                                                                            "flex": 0,
                                                                            "id": "select_02",
                                                                            "label": "введите multiple select",
                                                                            "options": [
                                                                                {
                                                                                    "value": 1,
                                                                                    "label": "component"
                                                                                },
                                                                                {
                                                                                    "value": 2,
                                                                                    "label": "layer"
                                                                                },
                                                                                {
                                                                                    "value": 3,
                                                                                    "label": "sprite"
                                                                                },
                                                                                {
                                                                                    "value": 4,
                                                                                    "label": "group"
                                                                                },
                                                                                {
                                                                                    "value": 5,
                                                                                    "label": "sound"
                                                                                },
                                                                                {
                                                                                    "value": 6,
                                                                                    "label": "trigger"
                                                                                },
                                                                                {
                                                                                    "value": 7,
                                                                                    "label": "condition"
                                                                                }
                                                                            ],
                                                                            "on": {}
                                                                        },
                                                                        {
                                                                            "view": "layout"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "view": "layout",
                                                                    "flex": 0
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-image",
                                                    "header": "sprites",
                                                    "backgroundColor": "#333",
                                                    "padding": "7px 7px 7px 7px",
                                                    "body": {
                                                        "align": "center",
                                                        "rows": [
                                                            "<h1>sprites</h1><hr>",
                                                            "я еще не придумал что тут будет"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-desktop",
                                                    "header": "screen",
                                                    "backgroundColor": "#333",
                                                    "padding": "7px 7px 7px 7px",
                                                    "body": {
                                                        "align": "center",
                                                        "rows": [
                                                            "<h1>screen</h1><hr>",
                                                            "я еще не придумал что тут будет"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-chain",
                                                    "header": "chains",
                                                    "backgroundColor": "#333",
                                                    "padding": "7px 7px 7px 7px",
                                                    "body": {
                                                        "align": "center",
                                                        "rows": [
                                                            "<h1>chains</h1><hr>",
                                                            "я еще не придумал что тут будет"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-flask",
                                                    "header": "experemental",
                                                    "backgroundColor": "#333",
                                                    "padding": "7px 7px 7px 7px",
                                                    "body": {
                                                        "align": "center",
                                                        "rows": [
                                                            "<h1>experemental</h1><hr>",
                                                            "я еще не придумал что тут будет"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-clock",
                                                    "header": "times",
                                                    "backgroundColor": "#333",
                                                    "padding": "7px 7px 7px 7px",
                                                    "body": {
                                                        "align": "center",
                                                        "rows": [
                                                            "<h1>times</h1><hr>",
                                                            "я еще не придумал что тут будет"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-arrows ",
                                                    "header": "dimensions",
                                                    "backgroundColor": "#333",
                                                    "padding": "7px 7px 7px 7px",
                                                    "body": {
                                                        "align": "center",
                                                        "rows": [
                                                            "<h1>dimensions</h1><hr>",
                                                            "я еще не придумал что тут будет"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-clone ",
                                                    "header": "groups",
                                                    "backgroundColor": "#333",
                                                    "padding": "7px 7px 7px 7px",
                                                    "body": {
                                                        "align": "center",
                                                        "rows": [
                                                            "<h1>groups</h1><hr>",
                                                            "я еще не придумал что тут будет"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-hashtag",
                                                    "header": "scripting",
                                                    "backgroundColor": "#333",
                                                    "padding": "7px 7px 7px 7px",
                                                    "body": {
                                                        "align": "center",
                                                        "rows": [
                                                            "<h1>scripting</h1><hr>",
                                                            "я еще не придумал что тут будет"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-keyboard",
                                                    "header": "keys",
                                                    "backgroundColor": "#333",
                                                    "padding": "7px 7px 7px 7px",
                                                    "body": {
                                                        "align": "center",
                                                        "rows": [
                                                            "<h1>keys</h1><hr>",
                                                            "я еще не придумал что тут будет"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-wrench",
                                                    "header": "wrench",
                                                    "backgroundColor": "#333",
                                                    "padding": "7px 7px 7px 7px",
                                                    "body": {
                                                        "align": "center",
                                                        "rows": [
                                                            "<h1>wrench</h1><hr>",
                                                            "я еще не придумал что тут будет"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-sliders",
                                                    "header": "tunners",
                                                    "backgroundColor": "#333",
                                                    "padding": "7px 7px 7px 7px",
                                                    "body": {
                                                        "align": "center",
                                                        "rows": [
                                                            "<h1>tunners</h1><hr>",
                                                            "я еще не придумал что тут будет"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "view": "tab-item",
                                                    "icon": "fa-gear",
                                                    "header": "settings",
                                                    "backgroundColor": "#333",
                                                    "padding": "7px 7px 7px 7px",
                                                    "body": {
                                                        "align": "center",
                                                        "rows": [
                                                            "<h1>settings</h1><hr>",
                                                            "я еще не придумал что тут будет"
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "stated": {
                                    "flex": "ui.graphEditor.rightPanel.attributes.flex"
                                }
                            }
                        ]
                    }
                },
                {
                    "view": "tab-item",
                    "icon": "fa-code",
                    "header": "code editor",
                    "body": {
                        "view": "layout",
                        "padding": 0,
                        "cols": [
                            {
                                "view": "layout",
                                "flex": 1,
                                "body": {
                                    "view": "ace-editor"
                                }
                            },
                            {
                                "view": "resizer"
                            },
                            {
                                "view": "tabs",
                                "tabsSide": "top",
                                "flex": 2,
                                "maxWidth": 600,
                                "backgroundColor": "#222",
                                "overflow": "hidden",
                                "cols": [
                                    {
                                        "view": "tab-item",
                                        "icon": "fa-folder-tree",
                                        "header": "projects",
                                        "backgroundColor": "#393939",
                                        "padding": "7px 7px 7px 7px",
                                        "body": {
                                            "align": "center",
                                            "rows": [
                                                "<h1>projects</h1><hr>",
                                                "я еще не придумал что тут будет"
                                            ]
                                        }
                                    },
                                    {
                                        "view": "tab-item",
                                        "icon": "fa-folder",
                                        "header": "folder",
                                        "backgroundColor": "#393939",
                                        "padding": "7px 7px 7px 7px",
                                        "body": {
                                            "align": "center",
                                            "rows": [
                                                "<h1>folder</h1><hr>",
                                                "я еще не придумал что тут будет"
                                            ]
                                        }
                                    },
                                    {
                                        "view": "tab-item",
                                        "icon": "fa-bookmark",
                                        "header": "bookmark",
                                        "backgroundColor": "#393939",
                                        "padding": "7px 7px 7px 7px",
                                        "body": {
                                            "align": "center",
                                            "rows": [
                                                "<h1>bookmark</h1><hr>",
                                                "я еще не придумал что тут будет"
                                            ]
                                        }
                                    },
                                    {
                                        "view": "tab-item",
                                        "icon": "fa-trash",
                                        "header": "trash",
                                        "backgroundColor": "#393939",
                                        "padding": "7px 7px 7px 7px",
                                        "body": {
                                            "align": "center",
                                            "rows": [
                                                "<h1>trash</h1><hr>",
                                                "я еще не придумал что тут будет"
                                            ]
                                        }
                                    },
                                    {
                                        "view": "tab-item",
                                        "icon": "fa-gear",
                                        "header": "settings",
                                        "backgroundColor": "#393939",
                                        "padding": "7px 7px 7px 7px",
                                        "body": {
                                            "align": "center",
                                            "rows": [
                                                "<h1>settings</h1><hr>",
                                                "я еще не придумал что тут будет"
                                            ]
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "view": "tab-item",
                    "icon": "fa-image",
                    "header": "sprites",
                    "body": {}
                },
                {
                    "view": "tab-item",
                    "icon": "fa-play",
                    "header": "player",
                    "backgroundColor": "#556",
                    "body": {}
                },
                {
                    "view": "tab-item",
                    "icon": "fa-gamepad",
                    "header": "game",
                    "backgroundColor": "#556",
                    "body": {}
                },
                {
                    "view": "tab-item",
                    "icon": "fa-pencil-square",
                    "header": "notes",
                    "backgroundColor": "#556",
                    "body": {}
                },
                {
                    "view": "tab-item",
                    "icon": "fa-refresh",
                    "header": "????",
                    "backgroundColor": "#556",
                    "body": {}
                },
                {
                    "view": "tab-item",
                    "icon": "fa-share-alt",
                    "header": "share",
                    "backgroundColor": "#556",
                    "body": {}
                },
                {
                    "view": "tab-item",
                    "icon": "fa-terminal",
                    "header": "terminal",
                    "backgroundColor": "#556",
                    "body": {}
                },
                {
                    "view": "tab-item",
                    "icon": "fa-quote-left",
                    "header": "translates",
                    "backgroundColor": "#556",
                    "body": {}
                },
                {
                    "view": "tab-item",
                    "icon": "fa-cog",
                    "header": "settings",
                    "backgroundColor": "#556",
                    "body": {}
                },
                {
                    "view": "tab-item",
                    "icon": "fa-user-circle",
                    "header": "auth",
                    "backgroundColor": "#556",
                    "body": {}
                },
                {
                    "view": "tab-item",
                    "icon": "fa-paper-plane",
                    "header": "chat",
                    "backgroundColor": "#556",
                    "body": {}
                }
            ]
        },
        {
            "view": "layout",
            "minHeight": 1,
            "maxHeight": 1
        },
        {
            "view": "layout",
            "backgroundColor": "#111",
            "minHeight": 22,
            "maxHeight": 22
        }
    ]
}