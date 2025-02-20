import { View } from '@components/layout';
import { Form, Input, Logo } from '@components/shared';
import { AuthenticationStyles } from '@styles/view';

export default function Authentication({ type }: View.Authentication.Props) {
    return (
        <View
            id={type && type.toLowerCase()}
            styles={AuthenticationStyles.Authentication}
        >
            <Logo />
            <Form>
                {type === 'Login' && (
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
