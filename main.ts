/**
 * @author camolezeVitor
 * @description
 * this is only a example file, does not include the true project.
 */

import { NotNull } from "./project/validations/basic-validations/validations-decorators";

class AlunoTest {

    @NotNull()
    public name?: string;

}