import on_work_creation from "./functions/on_work_creation";
import on_submit from "./functions/on_submit";
export const functionFactory = {
    // Add your functions here
    on_work_creation,
    on_submit
} as const;

export type FunctionFactoryType = keyof typeof functionFactory;
