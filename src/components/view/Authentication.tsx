'use client';

import { View } from '@components/layout';
import { Form, Input, Logo, Message } from '@components/shared';
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
            {message && <Message message={message} />}
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
                            method={handleChange}
                        />
                        <Input
                            label='Password'
                            id='password'
                            type='password'
                            placeholder='********'
                            method={handleChange}
                        />
                        <Input
                            label='Confirm Password'
                            id='confirmPassword'
                            type='password'
                            placeholder='********'
                            method={handleChange}
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
                            method={handleChange}
                        />
                    </>
                )}

                <Input type='submit' value={type} />
            </Form>
        </View>
    );
}
