import { Header, Main } from '@components/layout';
import { Button, NavItem } from '@components/shared';

export default function Panel() {
    return (
        <>
            <Header>
                <NavItem href='/private/dashboard' name='Dashboard' />
                <NavItem href='/private/store' name='Store' />
                <NavItem href='/private/panel' name='Panel' active />
                <Button href='/authentication/login' name='Logout' />
            </Header>
            <Main>
                <></>
            </Main>
        </>
    );
}
