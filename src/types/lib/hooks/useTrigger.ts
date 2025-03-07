export namespace UseTrigger {
    export interface Return {
        trigger: boolean;
        pullTrigger: () => void;
    }
}
