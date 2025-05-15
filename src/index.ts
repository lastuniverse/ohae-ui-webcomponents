import 'reflect-metadata';

import "./core/widgets/base_view/OhaeBaseView";
import "./core/widgets/OhaeFieldsetView";
import "./core/widgets/layout-view/OhaeLayoutView";
import "./core/widgets/layout-view/OhaeResizerView";
import "./core/widgets/layout-view/OhaeSeparatorView";
import "./core/widgets/input_view/OhaeButtonView";
import "./core/widgets/input_view/OhaeFormView";
import "./core/widgets/input_view/OhaeInputView";
import "./core/widgets/input_view/OhaeSelectView";
import "./core/widgets/input_view/OhaeTextareaView";
import "./core/widgets/input_view/OhaeIconCheckboxView";
import "./core/widgets/input_view/OhaeIconSelectView";
import "./core/widgets/accordion_view/OhaeAccordionView";
import "./core/widgets/accordion_view/OhaeAccordionItemView";
import "./core/widgets/icons_view/OhaeIconOfTypeView";
import "./core/widgets/tabs_view/OhaeTabsView";
import "./core/widgets/tabs_view/OhaeTabItemButton";
import "./core/widgets/tabs_view/OhaeTabItemView";
import "./core/widgets/data_table_view/OhaeDataTableView";
import "./external_widgets/OhaeAceEditor";
import "./external_widgets/BlenderNumberInput";

import { OhaeUI } from './core/OhaeUI';
import { fullViewConfig } from './custom_views_data/fullViewConfig';



const ui = new OhaeUI(fullViewConfig, document.body);
