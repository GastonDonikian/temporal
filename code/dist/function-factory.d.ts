export declare const functionFactory: {
    readonly on_work_creation: (events: any[]) => Promise<void>;
    readonly on_submit: (events: any[]) => Promise<void>;
};
export type FunctionFactoryType = keyof typeof functionFactory;
