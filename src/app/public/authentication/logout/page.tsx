import { Header, Main } from '@components/layout';
import { Button, NavItem } from '@components/shared';
import { Authentication } from '@components/view';

export default function Logout() {
    return (
        <>
            <Header>
                <NavItem
                    href='/public/authentication/logout'
                    name='Logout'
                    active
                />
                <NavItem href='/public/authentication/login' name='Login' />
                <NavItem href='/public/authentication/reset' name='Reset' />
                <Button href='/' name='Landing' />
            </Header>
            <Main>
                <Authentication type='Logout' />
            </Main>
        </>
    );
}
