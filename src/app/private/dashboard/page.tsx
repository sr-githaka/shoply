import { Breadcrumb, Header, Main } from '@components/layout';
import { Button, NavItem } from '@components/shared';

export default function Dashboard() {
    return (
        <>
            <Header>
                <NavItem href='/private/dashboard' name='Dashboard' active />
                <NavItem href='/private/store' name='Store' />
                <NavItem href='/private/panel' name='Panel' />
                <Button href='/authentication/login' name='Logout' />
            </Header>
            <Breadcrumb />
            <Main>
                <></>
            </Main>
        </>
    );
}
