export class BasicValidationFns {

    static notNull(value: any): boolean | Array<boolean> {
        return value != null;
    } 

    static notBlank(value: any): boolean | Array<boolean> {
        return value != '';
    }

    static notUndefined(value: any): boolean | Array<boolean> {
        return value != undefined;
    }

    static min(value: number, param: number) {
        return value >= param;
    }

    static max(value: number, param: number) {
        return value <= param;
    }

    static minLenght(value: string, param: number) {
        return value.length >= param;
    }

    static maxLenght(value: string, param: number) {
        return value.length <= param;
    }

    static pattern(value: any, pattern: string | RegExp) {
        return RegExp(pattern).test(value);
    }

    static async $test(value: any) {
        return new Promise(() => {
            setTimeout(() => {
                
            }, 2000);
        })
    }
    
}