export interface ValidationErrorProtocol {
    message?: string | Array<string>;
    ifErrorTriggered?: () => any;
}