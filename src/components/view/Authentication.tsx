'use client';

import { View } from '@components/layout';
import { Form, Input, Logo } from '@components/shared';
import { AuthenticationStyles } from '@styles/view';
import { useState } from 'react';

export default function Authentication({ type }: View.Authentication.Props) {
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
            setMessage('eeeeeee');
        } finally {
        }
    };
    return (
        <View
            id={type && type.toLowerCase()}
            styles={AuthenticationStyles.Authentication}
        >
            <Logo />
            {message && <p>{message}</p>}
            <Form method={handleSubmit}>
                {type === 'Login' && (
                    <>
                        <Input
                            label='Email'
                            id='email'
                            type='email'
                            placeholder='your@email.here'
                            method={handleChange}
                        />
                        <Input
                            label='Password'
                            id='password'
                            type='password'
                            placeholder='********'
                            method={handleChange}
                        />
                    </>
                )}

                {type === 'Register' && (
                    <>
                        <Input
                            label='Email'
                            id='email'
                            type='email'
                            placeholder='your@email.here'
                        />
                        <Input
                            label='Password'
                            id='password'
                            type='password'
                            placeholder='********'
                        />
                        <Input
                            label='Confirm Password'
                            id='confirmPassword'
                            type='password'
                            placeholder='********'
                        />
                    </>
                )}

                {type === 'Reset' && (
                    <>
                        <Input
                            label='Email'
                            id='email'
                            type='email'
                            placeholder='your@email.here'
                        />
                    </>
                )}

                <Input type='submit' value={type} />
            </Form>
        </View>
    );
}
