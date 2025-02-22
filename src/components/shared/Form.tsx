import { FormStyles } from '@styles/shared';

export default function Form({ children, method }: Shared.Form.Props) {
    return (
        <form className={FormStyles.Form} onSubmit={method}>
            {children}
        </form>
    );
}
