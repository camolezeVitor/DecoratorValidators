import { ValidationProtocol } from "../../interfaces/validation.protocol";

export interface StorageProtocol {

    storageValue: (validation: ValidationProtocol) => void;

    returnValue: (target: string) => Array<ValidationProtocol> | undefined;
}