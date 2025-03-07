import { Header, Main } from '@components/layout';
import { Button, NavItem } from '@components/shared';

export default function Login() {
    return (
        <>
            <Header>
                <NavItem
                    href='/public/authentication/login'
                    name='Login'
                    active
                />
                <NavItem
                    href='/public/authentication/reset'
                    name='Register'
                />
                <NavItem
                    href='/public/authentication/reset'
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
