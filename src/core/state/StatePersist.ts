import { PrimitiveFlatRecord,Primitives, PrimitiveSimple } from "node_modules/ohae_state/dist/types";
import { StateConnector } from "./StateConnector";

export class StatePersist {
    static async save(element: HTMLElement, path: string) {
        const state = StateConnector.getState(element);
        const attributes = Array.from(element.attributes)
            .reduce((acc, { name, value }) => {
                acc[name] = value;
                return acc;
            }, {} as PrimitiveFlatRecord) as PrimitiveFlatRecord;
        
        state!.setValue(`${path}.attributes`, attributes);
    }

    static async restore(element: HTMLElement, path: string) {
		const state = StateConnector.getState(element);
        const attributes = state?.getValue(`${path}.attributes`) as string;
        
        Object.entries(attributes ?? {}).forEach(([name, value]) => {
            // element.setAttribute(name, value as string);
			element.setAttribute(name, value?.toString()??'????'); // TODO разобраться чем реально может быть value
        });
    }
}