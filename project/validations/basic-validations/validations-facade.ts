import { ValidationProtocol } from "../../interfaces/validation.protocol";
import { StorageProtocol } from "../../storage-gateway/interfaces/storage.protocol";
import { ValidationStorage } from "../../storage-gateway/storage";

export class BasicValidationsFacade implements StorageProtocol {

    storageValue(validation: ValidationProtocol) {
        ValidationStorage.storage(validation)
    };

    returnValue(target: string): ValidationProtocol[] | undefined {
        return ValidationStorage.getValidations(target);
    };
}