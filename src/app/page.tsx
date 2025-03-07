import { Header, Main } from '@components/layout';
import { Button, NavItem } from '@components/shared';

export default function Landing() {
    return (
        <>
            <Header>
                <NavItem
                    href='/'
                    name='Landing'
                    active
                />
                <NavItem
                    href='/'
                    name='Docs'
                />
                <Button
                    href='/public/authentication/login'
                    name='Account'
                />
            </Header>
            <Main />
        </>
    );
}
