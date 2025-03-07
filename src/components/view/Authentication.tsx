import { AuthenticationTypes } from '@_types/components/view';
import { View } from '@components/layout';
import { Input, Form, Logo } from '@components/shared';
import { AuthenticationStyles } from '@styles/view';

/**
 * **Authentication Component**
 *
 * Renders an authentication view based on the provided type, such as 'Login', 'Register', or 'Reset'.
 * The component leverages the `View` component to structure the layout, applying a unique identifier
 * derived from the authentication type and specific authentication styles.
 *
 * @param {AuthenticationTypes.Props} props - Component properties.
 * @property {'Login' | 'Register' | 'Reset'} props.type - Specifies the authentication mode to be rendered.
 * @returns {AuthenticationTypes.Return} The rendered Authentication component.
 *
 * @example
 * <Authentication type="Login" />
 *
 * @see {@link @_types/components/view}
 */
export default function Authentication({
    type,
}: AuthenticationTypes.Props): AuthenticationTypes.Return {
    return (
        <View
            id={type.toLowerCase()}
            styles={AuthenticationStyles.Authentication}
        >
            <Logo />
            <Form>
                {type === 'Login' && (
                    <>
                        <Input
                            type='email'
                            id='email'
                            label='Email'
                            placeholder='your@email.here'
                        />
                        <Input
                            type='password'
                            id='password'
                            label='Password'
                            placeholder='********'
                        />
                    </>
                )}
                {type === 'Register' && (
                    <>
                        <Input
                            type='email'
                            id='email'
                            label='Email'
                            placeholder='your@email.here'
                        />
                        <Input
                            type='password'
                            id='password'
                            label='Password'
                            placeholder='********'
                        />
                        <Input
                            type='password'
                            id='confirm_password'
                            label='Confirm Password'
                            placeholder='********'
                        />
                    </>
                )}

                {type === 'Reset' && (
                    <>
                        <Input
                            type='email'
                            id='email'
                            label='Email'
                            placeholder='your@email.here'
                        />
                    </>
                )}
                <Input
                    type='submit'
                    value={type}
                />
            </Form>
        </View>
    );
}
