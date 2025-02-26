import { Breadcrumb, Header, Main, Sentry } from '@components/layout';
import { Button, NavItem } from '@components/shared';

export default function Users() {
    return (
        <Sentry>
            <Header>
                <NavItem href='/private/analytics/overview' name='Analytics' />
                <NavItem href='/private/store' name='Store' />
                <NavItem href='/private/panel' name='Panel' active />
                <Button href='/authentication/login' name='Logout' />
            </Header>
            <Breadcrumb path='Panel / Users'>
                <NavItem
                    href='/private/analytics/overview'
                    name='Users'
                    active
                />
                <NavItem href='/private/analytics/store' name='Sessions' />
                <NavItem href='/private/analytics/panel' name='Account' />
            </Breadcrumb>
            <Main>
                <></>
            </Main>
        </Sentry>
    );
}
