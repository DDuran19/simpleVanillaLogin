import { InputTextParams } from "../types/types";

function inputText(
    parent: HTMLFormElement,
    id: string,
    props: InputTextParams
) {
    /**This function is responsible for creating a label and input element.
     *It automatically appends the child to the specified master.
     *Example Usage:
     *    const myForm: HTMLFormElement = document.getElementById('myForm');
     *    inputText(parent=myForm,id=username, placeholder="username")
     */
    const placeholderText = props.placeholder
        ? `placeholder = "${props.placeholder}"`
        : "";
    const labelClassText = props.labelClassName
        ? `class = "${props.labelClassName}"`
        : "";
    const inputClassText = props.inputClassName
        ? `class = "${props.inputClassName}"`
        : "";
    const labelText = props.labelText ? `${props.labelText}` : "";

    const label = props.noLabel
        ? ""
        : `<label ${labelClassText} for="${id}">${labelText}</label>`;

    const required = props.required ? "required" : "";
    const type = props.type ? `${props.type}` : "text";
    const value = props.value ? `value = "${props.value}"` : "";

    let autocomplete: string = "";
    if (type === "text" || type === "password") {
        autocomplete = "autocomplete";
    }

    const nodeString: string = `
${label}
<input ${inputClassText} type="${type}" id="${id}" name="${id}" ${placeholderText} ${autocomplete} ${value} ${required}/>
`;
    parent.insertAdjacentHTML("beforeend", nodeString);
    return parent.lastElementChild as HTMLInputElement;
}

export { inputText };
