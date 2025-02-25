import { Breadcrumb, Header, Main, Sentry } from '@components/layout';
import { Button, NavItem } from '@components/shared';

export default function Store() {
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
            <Breadcrumb path='Analytics / Store'>
                <NavItem href='/private/analytics/overview' name='Overview' />
                <NavItem href='/private/analytics/store' name='Store' active />
                <NavItem href='/private/analytics/panel' name='Panel' />
            </Breadcrumb>
            <Main>
                <></>
            </Main>
        </Sentry>
    );
}
