import { ValidationErrorProtocol } from "../interfaces/validation-error.protocol";
import { ValidationProtocol } from "../interfaces/validation.protocol";
import { ValidationStorageGateway } from "../storage-gateway/gateway/validations-gateway";

const {returnValue} = new ValidationStorageGateway();

const validateSomeObjectField = (validation: ValidationProtocol, fieldValue: any): ValidationErrorProtocol | void => {
    const validationResult: boolean | Array<boolean> = validation.function(fieldValue, validation.functionSpecs);
    const resultSet = new Set(
        typeof validationResult == 'boolean' ? [validationResult] : validationResult
    );

    console.log(resultSet);

    if (resultSet.has(false)) {
        return {
            message: validation.validationSpecs?.message || `Error at: ${validation.from.className} [${validation.from.validatedFrom}]`,
            ifErrorTriggered: validation.validationSpecs?.whenErrorTriggered
        } 
    }
} 

export const validateSomeObject = (objectToBeValidated: Object) => {
    Object.keys(objectToBeValidated).forEach((key: string) => {
        returnValue(`${objectToBeValidated.constructor.name}-${key}`)
            ?.map((validation: ValidationProtocol) => {
                validateSomeObjectField(validation, objectToBeValidated[key as keyof Object]);
            })
    });
}