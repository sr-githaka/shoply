import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function useAuthentication({
    type,
}: Core.Hooks.useAuthentication.Props) {
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState<string | null>(null);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage(null);

        const response = await fetch(
            `/api/public/authentication/${type.toLowerCase()}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            }
        );

        try {
            const result = await response.json();
            router.refresh;
            switch (type) {
                case 'Login':
                    if (!result.ok) {
                        setMessage(result.error.info);
                    } else {
                        router.push('/private/analytics/overview', {
                            scroll: false,
                        });
                    }
                    break;

                case 'Register':
                    if (!result.ok) {
                        setMessage(result.error.info);
                    } else {
                        router.push('/public/authentication/login', {
                            scroll: false,
                        });
                    }
                    break;

                case 'Reset':
                    if (!result.ok) {
                        setMessage(result.error.info);
                    } else {
                        router.push('/public/authentication/login', {
                            scroll: false,
                        });
                    }
                    break;

                default:
                    break;
            }
        } catch {
            setMessage('Authentication failure.');
        }
    };

    return { handleChange, handleSubmit, message };
}
