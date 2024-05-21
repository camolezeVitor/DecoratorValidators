export interface ValidationErrorProtocol {
    message: string;
    ifErrorTriggered: () => any;
}