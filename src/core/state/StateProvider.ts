import { StateConnector } from "./StateConnector";
import { OhaeLayoutView } from "../widgets/layout-view/OhaeLayoutView";
import { StateManager} from "ohae_state";


export class StateProvider {
    private _stateManager!: StateManager;


    public initState(stateManager: StateManager) {
        this._stateManager = stateManager;
        // this.propagateStateToChildren(this);
    }


    private propagateStateToChildren(element: Element) {
        element.querySelectorAll('*').forEach(child => {
            if (child instanceof HTMLElement) {
                StateConnector.connect(child, this._stateManager);
            }
        });
    }
}