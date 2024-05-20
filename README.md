# DecoratorValidators
A open-source validation lib

this project has intentions for having as result, something like this:
```typescript
import * from "decorator-validators";
import * from "brval-decorator-validators";

class Person {

    @NotNull;
    @Min(1);
    id: number;

    @MinLength(1);
    name: string;

    //You can specify errors messages.
    @Min(18, {
        message: "You cannot be under 18!"
    });
    age: number;

    //You can link 2 attributes using a link,
    //and validate the combinations between them.
    @Link({
        attribute: "registerDate",
        validations: [
            EarlierThan();      
        ]
    });
    @MustBeAValidDate
    birthDate: Date;

    //$ <- This means that this validation is ASYNC!
    @$BR_CEP
    cep: string;

    @MustBeAValidDate
    registerDate: Date;

    constructor() {};

}

const person = new Person();

// This will validate every single attribute in the object!
validateObj(person);
```

There may be a lot of validations that i dont even know, but probably in the first version,
they will be there.

in addition to the validation, the main idea is to have a simple validation storage, something
like a map, and the developer would easely create adapters for creating auto-forms in such frameworks
like angular or next. Lets use the example of angular:

```typescript
import * from "decorator-validators";

const validationMapOfPerson: Array<Validations> = getValidatorsFrom(Person);

console.log(validationMapOfPerson);
/**
 *[
 *   "id": [
 *      {
 *          message: null,
 *          function: notNull,
 *          functionSpecs: null,
 *          whenTriggered: undefined,
 *          storage: undefined
 *      },
 *      {
 *          message: null,
 *          function: min,
 *          functionSpecs: [
 *              1 //the min value
 *          ],
 *          whenTriggered: undefined,
 *          storage: undefined
 *      },
 *   ]
 *]
 *... and the list would continue! 
 */

```

after having an object like this, any developer could make something like this:

```typescript

const form: FormGroup = createFormByClass(Person);

```

and this would generate a entire formgroup with validations and error messages!