/**
 * @author camolezeVitor
 * @description
 * this is only a example file, does not include the true project.
 */

import { BVal } from "./project/index";
import { validateSomeObject } from "./project/validations/validation-testing";

import("./project/index");

class AlunoTest {

    @BVal.NotNull()
    public name: string = "";

    @BVal.Min(1)
    public atributo1: number = 0;

}

let newAluno = new AlunoTest();

validateSomeObject(newAluno);