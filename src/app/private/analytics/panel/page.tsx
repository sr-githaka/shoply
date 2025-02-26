import { Breadcrumb, Header, Main, Sentry } from '@components/layout';
import { Button, NavItem } from '@components/shared';

export default function Panel() {
    return (
        <Sentry>
            <Header>
                <NavItem
                    href='/private/analytics/overview'
                    name='Analytics'
                    active
                />
                <NavItem href='/private/store' name='Store' />
                <NavItem href='/private/panel' name='Panel' />
                <Button href='/' name='Logout' />
            </Header>
            <Breadcrumb path='Analytics / Panel'>
                <NavItem href='/private/analytics/overview' name='Overview' />
                <NavItem href='/private/analytics/store' name='Store' />
                <NavItem href='/private/analytics/panel' name='Panel' active />
            </Breadcrumb>
            <Main>
                <></>
            </Main>
        </Sentry>
    );
}
