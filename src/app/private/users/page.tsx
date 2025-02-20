import { Header, Main } from '@components/layout';
import { Button, NavItem } from '@components/shared';

export default function Users() {
    return (
        <>
            <Header>
                <NavItem href='/private/analytics' name='Analytics' />
                <NavItem href='/private/users' name='Users' active />
                <Button href='/authentication/login' name='Logout' />
            </Header>
            <Main>
                <></>
            </Main>
        </>
    );
}
