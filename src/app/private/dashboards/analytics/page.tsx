import { Header, Main } from '@components/layout';
import { Button, NavItem } from '@components/shared';

export default function Analytics() {
    return (
        <>
            <Header>
                <NavItem
                    href='/private/dashboards/analytics'
                    name='Analytics'
                    active
                />
                <NavItem
                    href='/private/dashboards/sales'
                    name='Sales'
                />
                <Button
                    href='/public/authentication/login'
                    name='Logout'
                />
            </Header>
            <Main>
                <></>
            </Main>
        </>
    );
}
