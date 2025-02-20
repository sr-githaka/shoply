import { Header, Main } from '@components/layout';
import { Button, NavItem } from '@components/shared';

export default function Analytics() {
    return (
        <>
            <Header>
                <NavItem href='/private/analytics' name='Analytics' active />
                <NavItem href='/private/users' name='Sales' />
                <NavItem href='/private/users' name='Stock' />

                <Button href='/authentication/login' name='Logout' />
            </Header>
            <Main>
                <></>
            </Main>
        </>
    );
}
