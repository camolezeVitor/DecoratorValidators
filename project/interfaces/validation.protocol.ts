import { FromTargetProtocol } from "./from-target.protocol";
import { ValidationFunctionProtocol } from "./validation-function.protocol";

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
     * Attribute used for storaging the error message.
     */
    message?: string;
    /**
     * The validation function.
     */
    function: ValidationFunctionProtocol;
    /**
     * some validation functions may need some parameters, here's where 
     * we'l store them.
     */
    functionSpecs: any;
    /**
     * you can make your own function when the error is triggered and store
     * it here.
     */
    whenTriggered: () => any;
    /*
     *if you would like to storage any value, here's where you can do it.
     */
    storage?: any;

}

