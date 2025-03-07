import { Header, Main } from '@components/layout';
import { Button, NavItem } from '@components/shared';

export default function Login() {
    return (
        <>
            <Header>
                <NavItem
                    href='/public/auth/login'
                    name='Login'
                    active
                />
                <NavItem
                    href='/public/auth/reset'
                    name='Register'
                />
                <NavItem
                    href='/public/auth/reset'
                    name='Reset'
                />
                <Button
                    href='/'
                    name='Landing'
                />
            </Header>
            <Main />
        </>
    );
}
