import { FromTargetProtocol } from "./from-target.protocol";
import { ValidationSpecsProtocol } from "./validation-specs.protocol";

/**
 * @author camolezeVitor
 * @description
 * this interface is used for storaging the validations in some
 * class field.
 */
export interface ValidationProtocol {

    /**
     * from where is getting validated.
     */
    from: FromTargetProtocol
    /**
     * The validation function.
     */
    function: Function;

    /**
     * the specs of the validation
     */
    validationSpecs?: ValidationSpecsProtocol;
    /**
     * some validation functions may need some parameters, here's where 
     * we'l store them.
     */
    functionSpecs?: any;

}

