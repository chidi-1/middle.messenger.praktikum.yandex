import {IValidable} from "../components/input/input";
import {FormBlock} from "../components/formBlocks/formBlock";
import {Form} from "../components/form/form";

export function validateForm(form: Form) {
    let isValidateSuccess = true;
    form.setProps({'iValid': true});

    for (const children of Object.values(form.children)) {
        const ivalidatble = (children as any as IValidable);
        if (ivalidatble.isValid !== undefined) {
            ivalidatble.validate();
            if (!(ivalidatble as FormBlock).isValid()) {
                isValidateSuccess = false;
                form.setProps({'iValid': false});
            }
        }
    }

}

export function submitForm(form: Form) {
    if (form.isValid()) {
        const submitData: Record<string, string> = {};
        for (const children of Object.values(form.children)) {
            const ivalidatble = (children as any as IValidable);
            if (ivalidatble.isValid !== undefined) {
                submitData[(ivalidatble as FormBlock).getName()] = (ivalidatble as FormBlock).getValue();
            }
        }
    }
}
