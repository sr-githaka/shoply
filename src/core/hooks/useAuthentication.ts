import { useState } from 'react';

export default function useAuthentication({
    type,
}: Core.Hooks.useAuthentication.Props) {
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage(null);

        try {
            const response = await fetch(`/api/public/authentication/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!result.ok) {
                setMessage(result.error.info);
            }
        } catch {
            setMessage('Authentication failure.');
        }
    };

    return { handleChange, handleSubmit, message };
}
