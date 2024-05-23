import { ValidationProtocol } from "../../interfaces/validation.protocol";
import { ValidationStorageGateway } from "../../storage-gateway/gateway/validations-gateway";
import { StorageProtocol } from "../../storage-gateway/interfaces/storage.protocol";

export class BasicValidationsFacade implements StorageProtocol {

    private storageGateway!: ValidationStorageGateway;

    constructor() {
        this.storageGateway = new ValidationStorageGateway();
    }

    storageValue(validation: ValidationProtocol) {
        this.storageGateway.storageValue(validation);
    };

    returnValue(target: string): ValidationProtocol[] | undefined {
        return this.storageGateway.returnValue(target);
    };
}