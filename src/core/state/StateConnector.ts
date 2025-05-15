import { Await, StateManager} from "ohae_state";
import { OhaeUI } from "../OhaeUI";

type Unsubscribe = () => void;
type StateUpdateHandler<T = any> = (value: T) => void;

export class StateConnector extends Await {
    private static subscriptions = new WeakMap<HTMLElement, Unsubscribe[]>();
    private static states = new WeakMap<HTMLElement, StateManager>();

    static connect(element: HTMLElement, state: StateManager) {
        this.states.set(element, state);
    }

	static getState(element: HTMLElement, stateName: string = OhaeUI.ROOT_STATE_NAME): StateManager | null{
		return this.states.get(element) ?? null;
	}

    static async bind<T>(
        element: HTMLElement,
        path: string,
        handler: StateUpdateHandler<T>
    ): Promise<Unsubscribe> {
        const state = await this.states.get(element);
        const callback = async (event: any): Promise<boolean> => {
            const value = await state!.getValue(path);
            handler(value as T);
            return true;
        };
        
        state!.onStateUpdate(path, callback);
        const unsubscribe = () => state!.offStateUpdate(path, callback);
        
        if (!this.subscriptions.has(element)) {
            this.subscriptions.set(element, []);
        }
        this.subscriptions.get(element)!.push(unsubscribe);
        
        // Initial update
        const initialValue = await state!.getValue(path);
        handler(initialValue as T);
        
        return unsubscribe;
    }

    static disconnect(element: HTMLElement) {
        const subs = this.subscriptions.get(element) || [];
        subs.forEach(unsub => unsub());
        this.subscriptions.delete(element);
        this.states.delete(element);
    }
}
