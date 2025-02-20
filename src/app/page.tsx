import { Header, Main } from '@components/layout';
import { NavItem } from '@components/shared';

export default function Landing() {
    return (
        <>
            <Header>
                <NavItem href='/' name='Landing' />
                <NavItem href='/docs' name='Docs' />
            </Header>
            <Main />
        </>
    );
}
