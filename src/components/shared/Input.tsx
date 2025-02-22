import { workSans } from '@fonts/dynamic';
import { InputStyles } from '@styles/shared';

export default function Input({
    label,
    id,
    type,
    placeholder,
    value,
    method,
}: Shared.Input.Props) {
    return (
        <div className={InputStyles.Input}>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                className={workSans.className}
                onChange={method}
            />
        </div>
    );
}
