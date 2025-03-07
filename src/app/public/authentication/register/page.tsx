import { Header, Main } from '@components/layout';
import { Button, NavItem } from '@components/shared';
import { Authentication } from '@components/view';

export default function Register() {
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
                    active
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
            <Main>
                <Authentication type='Register' />
            </Main>
        </>
    );
}
