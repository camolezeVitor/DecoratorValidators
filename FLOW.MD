# How does the Decorators flow works??

The decorators have a specific path of working. First of all, the validations are crafted simply, without depending on anything, is just a function that returns `boolean` or a `Array<boolean>`.

> "_But why the function returns `true` or a `[true, false, true]`?_"
>
> well, imagine that you have a function that needs to validate a password, there are multiple things that this validation needs to do, like validating if the password has 8 chars, or if the password passes on `RegExp(/[A-Z]/g)`... And well, only you can tell the rest of validations that it may do.
>
>that's the answer, sometimes you may need to validate more than 1 case.

Lets create a basic funcion.

```typescript
export const notNull = (value: any) => {
    return value != null
}
```

After creating, you need to make a decorator of that function, you can do something like this:

```typescript
export const NotNull = (validationSpecs?: ValidationSpecsProtocol) => {
    return ({constructor}: any, key: string) => {

    }
}
```

Then the mission of that decorator is to save a validation in determined attribute of a determined class. For that you will need a facade for acessing the Storage Gateway. Lets create that:

```typescript
export class ValidationFacade implements StorageProtocol {

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
```

after creating our facade we may need to use it at our previous code.

```typescript
let validationFacade = new ValidationFacade();

export const NotNull = (validationSpecs?: ValidationSpecsProtocol) => {
    return ({constructor}: any, key: string) => {
        valFacade.storageValue({
            from: {
                className: constructor.name,
                validatedFrom: key
            },
            function: notNull, // your basic function.
            validationSpecs: validationSpecs,
            isAsync: false
        })
    }
}
```

now you can use it on your class

```typescript
class MyClass {

    @NotNull()
    myAttribute: string;
}
```

every single validation in `MyClass` will be storaged like this: `"MyClass-myAttribute"` you can get your value using the same facade that you created.