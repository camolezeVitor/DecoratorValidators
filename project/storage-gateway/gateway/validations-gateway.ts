import { ValidationProtocol } from "../../interfaces/validation.protocol";
import { StorageProtocol } from "../interfaces/storage.protocol";
import { ValidationStorage } from "../storage";

/**
 * @author camolezeVitor
 * @description
 * this class is used for you to save the validations
 */
export class ValidationGateway implements StorageProtocol {

    storageValue(validation: ValidationProtocol) {
        ValidationStorage.storage(validation);
    }

    returnValue(target: string): Array<ValidationProtocol> | undefined {
        return ValidationStorage.getValidations(target);  
    };

}