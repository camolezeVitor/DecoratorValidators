export interface ValidationSpecsProtocol {
    /**
     * Attribute used for storaging the error message.
     */
    message?: string;
    /**
     * you can make your own function when the validation is triggered and store
     * it here.
     */
    whenTriggered?: () => any;
    /*
     *if you would like to storage any value, here's where you can do it.
     */
    storage?: any;
    /**
     * you can make your own function when the error is triggered and store
     * it here.
     */
    whenErrorTriggered?: () => any;
}