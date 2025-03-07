import { InputTypes } from '@_types/components/shared';

/**
 * **Input Component**
 *
 * Renders an input element with an associated label within a container.
 *
 * @param {InputTypes.Props} props - Component properties.
 * @property {string} [props.id] - Identifier for the input element.
 * @property {string} [props.label] - Text label associated with the input.
 * @property {string} props.type - Specifies the type of the input element (e.g., "text", "password").
 * @property {string} [props.placeholder] - Placeholder text for the input element.
 * @property {string} [props.value] - Current value of the input element.
 * @returns {InputTypes.Return} The rendered input component.
 *
 * @example
 * <Input
 *   id="username"
 *   label="Username"
 *   type="text"
 *   placeholder="Enter username"
 *   value="JohnDoe"
 * />
 *
 * @see {@link ../types/Input}
 */
export default function Input({
    id,
    label,
    placeholder,
    type,
    value,
}: InputTypes.Props): InputTypes.Return {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                value={value}
            />
        </div>
    );
}
