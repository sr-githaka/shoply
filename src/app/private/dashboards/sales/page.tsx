import { Header, Main } from '@components/layout';
import { Button, NavItem } from '@components/shared';

export default function Sales() {
    return (
        <>
            <Header>
                <NavItem
                    href='/private/dashboards/analytics'
                    name='Analytics'
                />
                <NavItem
                    href='/private/dashboards/sales'
                    name='Sales'
                    active
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
