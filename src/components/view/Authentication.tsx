'use client';

import { View } from '@components/layout';
import { Form, Input, Logo } from '@components/shared';
import { useAuthentication } from '@core/hooks';
import { AuthenticationStyles } from '@styles/view';

export default function Authentication({ type }: View.Authentication.Props) {
    const { handleChange, handleSubmit, message } = useAuthentication({ type });
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
