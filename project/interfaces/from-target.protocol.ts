
/**
 * @author camolezeVitor
 * @description
 * interface used for getting the values of the parent/class
 */
export interface FromTargetProtocol {

    /**
     * which thing is getting validated.
     */
    validatedFrom: string;

    /**
     * if you are validating some attribute inside a class
     * this will storage its name.
     */
    className?: string;

    /**
     * value from the attribute/function.
     */
    actualValue: string;
}