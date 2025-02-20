import { View } from '@components/layout';
import { Form, Input, Logo } from '@components/shared';
import { AuthenticationStyles } from '@styles/view';

export default function Authentication() {
    return (
        <View id='authentication' styles={AuthenticationStyles.Authentication}>
            <Logo />
            <Form>
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
                <Input type='submit' value='Login' />
            </Form>
        </View>
    );
}
