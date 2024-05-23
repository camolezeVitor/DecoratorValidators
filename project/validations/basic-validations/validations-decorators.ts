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
    
    const NotNull = (validationSpecs?: ValidationSpecsProtocol) => {
        return ({constructor}: any, key: string) => {
            storage(
                constructor,
                key,
                BasicValidationFns.notNull,
                validationSpecs
            )
        }
    }
    
    const NotBlank = (validationSpecs?: ValidationSpecsProtocol) => {
        return ({constructor}: any, key: string) => {
            storage(
                constructor,
                key,
                BasicValidationFns.notBlank,
                validationSpecs
            )
        }
    }
    
    const NotUndefined = (validationSpecs?: ValidationSpecsProtocol) => {
        return ({constructor}: any, key: string) => {
            storage(
                constructor,
                key,
                BasicValidationFns.notUndefined,
                validationSpecs
            )
        }
    }
    
    const Min = (specs: number, validationSpecs?: ValidationSpecsProtocol) => {
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
    
    const Max = (specs: number, validationSpecs?: ValidationSpecsProtocol) => {
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
    
    const MinLenght = (specs: number, validationSpecs?: ValidationSpecsProtocol) => {
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
    
    const MaxLenght = (specs: number, validationSpecs?: ValidationSpecsProtocol) => {
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
    
    const Pattern = (specs: string | RegExp, validationSpecs?: ValidationSpecsProtocol) => {
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

export { BasicValidationsDecorators };

