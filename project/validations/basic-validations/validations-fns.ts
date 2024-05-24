export class BasicValidationFns {

    static required(value: any): boolean | Array<boolean> {
        return value ? true : false;
    }

    static notNull(value: any): boolean | Array<boolean> {
        return value != null;
    } 

    static notBlank(value: any): boolean | Array<boolean> {
        return value != '';
    }

    static notUndefined(value: any): boolean | Array<boolean> {
        return value != undefined;
    }

    static min(value: number, param: number): boolean | Array<boolean> {
        return value >= param;
    }

    static max(value: number, param: number): boolean | Array<boolean> {
        return value <= param;
    }

    static minLenght(value: string, param: number): boolean | Array<boolean> {
        return value.length >= param;
    }

    static maxLenght(value: string, param: number): boolean | Array<boolean> {
        return value.length <= param;
    }

    static pattern(value: any, pattern: string | RegExp): boolean | Array<boolean> {
        return RegExp(pattern).test(value);
    }

    static prohibitedWords(value: string, param: Array<string>): boolean | Array<boolean> {
        const prohibitedWordsSet = new Set(param);
        return value.split(' ').some(word => prohibitedWordsSet.has(word));
    }
    
}