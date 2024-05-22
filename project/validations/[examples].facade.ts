import { ValidationSpecsProtocol } from "../interfaces/validation-specs.protocol";
import { ValidationGateway } from "../storage-gateway/gateway/validations-gateway";
import { notNullMethod } from "./[examples].methods";

let gateway = new ValidationGateway();

function storageInGateway(
    fn: Function, constructor: any, key: string, validationSpecs?: ValidationSpecsProtocol,
    functionsParameters?: any
) {
    gateway.storageValue(
        {
            function: fn,
            from: {
                validatedFrom: key,
                className: constructor.name
            },
            validationSpecs: validationSpecs || undefined,
            functionSpecs: functionsParameters || undefined
        }
    )
}

function notNull(validationSpecs?: ValidationSpecsProtocol) {
    
    return ({constructor}: any, key: string) => {
     
        storageInGateway(
            notNullMethod,
            constructor,
            key,
            validationSpecs
        )
    }
}

export { notNull as NotNull };

