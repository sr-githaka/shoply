import { Header, Main, Public } from '@components/layout';
import { Button, NavItem } from '@components/shared';
import { Authentication } from '@components/view';

export default function Login() {
    return (
        <Public>
            <Header>
                <NavItem
                    href='/public/authentication/login'
                    name='Login'
                    active
                />
                <NavItem
                    href='/public/authentication/register'
                    name='Register'
                />
                <NavItem href='/public/authentication/reset' name='Reset' />
                <Button href='/' name='Landing' />
            </Header>
            <Main>
                <Authentication type='Login' />
            </Main>
        </Public>
    );
}
