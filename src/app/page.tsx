import { Header, Main } from '@components/layout';
import { NavItem } from '@components/shared';

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
            </Header>
            <Main />
        </>
    );
}
