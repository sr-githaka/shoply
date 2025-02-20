export default function Input({
    label,
    id,
    type,
    placeholder,
    value,
}: Shared.Input.Props) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
            />
        </div>
    );
}
