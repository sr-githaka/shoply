import { FormStyles } from '@styles/shared';

export default function Form({ children }: Shared.Form.Props) {
    return <form className={FormStyles.Form}>{children}</form>;
}
