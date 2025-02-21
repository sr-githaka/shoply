import { Header, Main, Public } from '@components/layout';
import { Button, NavItem } from '@components/shared';

export default function Landing() {
    return (
        <Public>
            <Header>
                <NavItem href='/' name='Landing' active />
                <NavItem href='/docs' name='Docs' />
                <Button href='/authentication/login' name='Account' />
            </Header>
            <Main>
                <></>
            </Main>
        </Public>
    );
}
