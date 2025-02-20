import { Header, Main } from '@components/layout';
import { Button, NavItem } from '@components/shared';

export default function Store() {
    return (
        <>
            <Header>
                <NavItem href='/private/dashboard' name='Dashboard' />
                <NavItem href='/private/store' name='Store' active />
                <NavItem href='/private/panel' name='Panel' />
                <Button href='/authentication/login' name='Logout' />
            </Header>
            <Main>
                <></>
            </Main>
        </>
    );
}
