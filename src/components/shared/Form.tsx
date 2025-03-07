import { FormTypes } from '@_types/components/shared';
import { FormStyles } from '@styles/shared';

/**
 * **Form Component**
 *
 * Renders a form element with applied styling and renders any child elements.
 *
 * @param {FormTypes.Props} props - Component properties.
 * @property {ReactNode} props.children - Child elements to be rendered within the form.
 * @returns {FormTypes.Return} The rendered form element.
 *
 * @example
 * <Form>
 *   <input type="text" />
 * </Form>
 *
 * @see {@link @_types/components/shared}
 */
export default function Form({ children }: FormTypes.Props): FormTypes.Return {
    return <form className={FormStyles.Form}>{children}</form>;
}
