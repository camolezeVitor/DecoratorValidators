import { ValidationFunctionProtocol } from "../interfaces/validation-function.protocol";
import { ValidationProtocol } from "../interfaces/validation.protocol";

export class ExampleValidations {

    public static notNull: ValidationFunctionProtocol = (
        validation: ValidationProtocol
    ) => {
        return null;
    }

}