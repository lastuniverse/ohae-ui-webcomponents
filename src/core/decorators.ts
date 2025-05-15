import { StateConnector } from "./state/StateConnector";
export function BindState(path: string) {
    return (target: any, propertyKey: string) => {
        const connectedCallback = target.connectedCallback;
        const disconnectedCallback = target.disconnectedCallback;

        target.connectedCallback = async function() {
            await connectedCallback?.call(this);
            const element = this as HTMLElement;
            
            StateConnector.bind(element, path, (value) => {
                this[propertyKey] = value;
            });
        };

        target.disconnectedCallback = function() {
            disconnectedCallback?.call(this);
            StateConnector.disconnect(this);
        };
    };
}

// export function BindState(path: string) {
//     return function (target: any, propertyKey: string) {
//         const privateKey = `__${propertyKey}`; // Уникальное внутреннее имя
//         const descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);

//         Object.defineProperty(target, propertyKey, {
//             get: function () {
//                 return this[privateKey];
//             },
//             set: function (value) {
//                 this[privateKey] = value;
//                 StateConnector.bind(this, path, () => this[privateKey]);
//             },
//             configurable: true,
//             enumerable: true
//         });

//         const connectedCallback = target.connectedCallback;
//         const disconnectedCallback = target.disconnectedCallback;

//         target.connectedCallback = async function () {
//             await connectedCallback?.call(this);
//             StateConnector.bind(this, path, (value) => {
//                 this[propertyKey] = value;
//             });
//         };

//         target.disconnectedCallback = function () {
//             disconnectedCallback?.call(this);
//             StateConnector.disconnect(this);
//         };
//     };
// }

export function Action(statePath: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;
        
        descriptor.value = async function(...args: any[]) {
            const result = await originalMethod.apply(this, args);
            const element = this as HTMLElement;
            const state = StateConnector['states'].get(element);
            state!.setValue(statePath, result);
            return result;
        };
        
        return descriptor;
    };
}