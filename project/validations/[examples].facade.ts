import { ValidationSpecsProtocol } from "../interfaces/validation-specs.protocol";
import { ValidationGateway } from "../storage-gateway/gateway/validations-gateway";
import { notNullMethod } from "./[examples].methods";

let gateway = new ValidationGateway();

function notNull(validationSpecs?: ValidationSpecsProtocol) {
    
    return ({constructor}: any, key: string) => {
        
        gateway.storageValue(
            {
                function: notNullMethod,
                from: {
                    validatedFrom: key,
                    className: constructor.name
                },
                validationSpecs: validationSpecs
            }
        )
    }

}

export { notNull as NotNull };

