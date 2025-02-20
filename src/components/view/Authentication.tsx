import { View } from '@components/layout';
import { Form, Input } from '@components/shared';

export default function Authentication() {
    return (
        <View id='authentication'>
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
