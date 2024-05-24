import { ValidationProtocol } from "../interfaces/validation.protocol";

export class ValidationStorage {

    private static validationMap: Map<string, Array<ValidationProtocol>> = new Map<string, Array<ValidationProtocol>>();

    public static storage(
        validations: ValidationProtocol
    ): void {
        const validationId: string = `${validations.from.className}-${validations.from.validatedFrom}`;
        let validationList: Array<ValidationProtocol> = this.validationMap.get(validationId) || new Array<ValidationProtocol>();

        validationList.push(validations);

        this.validationMap.set(validationId, validationList);
    }

    public static getValidations(
        target: string
    ): Array<ValidationProtocol> | undefined {
        return this.validationMap.get(target);
    }
}