import { Header, Main } from '@components/layout';
import { Button, NavItem } from '@components/shared';

export default function Reset() {
    return (
        <>
            <Header>
                <NavItem
                    href='/public/authentication/login'
                    name='Login'
                />
                <NavItem
                    href='/public/authentication/register'
                    name='Register'
                />
                <NavItem
                    href='/public/authentication/reset'
                    name='Reset'
                    active
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
