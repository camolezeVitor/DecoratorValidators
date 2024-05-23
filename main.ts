/**
 * @author camolezeVitor
 * @description
 * this is only a example file, does not include the true project.
 */

import { BVal } from "./project/index";

import("./project/index");

class AlunoTest {

    @BVal.NotNull({
        message: "Não é possível!!!!"
    })
    public name?: string;

}
