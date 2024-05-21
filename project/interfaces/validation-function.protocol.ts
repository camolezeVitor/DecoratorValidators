import { ValidationErrorProtocol } from "./validation-error.protocol";
import { ValidationProtocol } from "./validation.protocol";

/**
 * @author camolezeVitor
 * @description
 * when creating a function you need to type it 
 * as a validation function, like this:
 * ```typescript
 * const fn: ValidationFunctionProtocol = () => void;
 * ```
 */
export type ValidationFunctionProtocol = (
    validation: ValidationProtocol,
    validationSpecs?: Object
) => ValidationErrorProtocol | null;