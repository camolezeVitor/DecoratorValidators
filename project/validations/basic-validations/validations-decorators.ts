import { ValidationSpecsProtocol } from "../../interfaces/validation-specs.protocol";
import { BasicValidationsFacade } from "./validations-facade";
import { BasicValidationFns } from "./validations-fns";

const valFacade = new BasicValidationsFacade();

const storage = (constructor: any, key: string, fn: Function,
    validationSpecs?: ValidationSpecsProtocol, functionSpecs?: any
) => {
    valFacade.storageValue({
        from: {
            className: constructor.name,
            validatedFrom: key
        },
        function: fn,
        validationSpecs: validationSpecs,
        functionSpecs: functionSpecs
    })
}

namespace BasicValidationsDecorators {
    
    export const NotNull = (validationSpecs?: ValidationSpecsProtocol) => {
        return ({constructor}: any, key: string) => {
            storage(
                constructor,
                key,
                BasicValidationFns.notNull,
                validationSpecs
            )
        }
    }
    
    export const NotBlank = (validationSpecs?: ValidationSpecsProtocol) => {
        return ({constructor}: any, key: string) => {
            storage(
                constructor,
                key,
                BasicValidationFns.notBlank,
                validationSpecs
            )
        }
    }
    
    export const NotUndefined = (validationSpecs?: ValidationSpecsProtocol) => {
        return ({constructor}: any, key: string) => {
            storage(
                constructor,
                key,
                BasicValidationFns.notUndefined,
                validationSpecs
            )
        }
    }
    
    export const Min = (specs: number, validationSpecs?: ValidationSpecsProtocol) => {
        return ({constructor}: any, key: string) => {
            storage(
                constructor,
                key,
                BasicValidationFns.min,
                validationSpecs,
                specs
            )
        }
    }
    
    export const Max = (specs: number, validationSpecs?: ValidationSpecsProtocol) => {
        return ({constructor}: any, key: string) => {
            storage(
                constructor,
                key,
                BasicValidationFns.max,
                validationSpecs,
                specs
            )
        }
    }
    
    export const MinLenght = (specs: number, validationSpecs?: ValidationSpecsProtocol) => {
        return ({constructor}: any, key: string) => {
            storage(
                constructor,
                key,
                BasicValidationFns.minLenght,
                validationSpecs,
                specs
            )
        }
    }
    
    export const MaxLenght = (specs: number, validationSpecs?: ValidationSpecsProtocol) => {
        return ({constructor}: any, key: string) => {
            storage(
                constructor,
                key,
                BasicValidationFns.maxLenght,
                validationSpecs,
                specs
            )
        }
    }
    
    export const Pattern = (specs: string | RegExp, validationSpecs?: ValidationSpecsProtocol) => {
        return ({constructor}: any, key: string) => {
            storage(
                constructor,
                key,
                BasicValidationFns.pattern,
                validationSpecs,
                specs
            )
        }
    }
}

export { BasicValidationsDecorators as BVal };

