import { Header, Main } from '@components/layout';
import { Button, NavItem } from '@components/shared';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'POS',
    description:
        'A fast and efficient online point-of-sale system for seamless transactions.',
};

export default function Landing() {
    return (
        <>
            <Header>
                <NavItem href='/' name='Landing' active />
                <NavItem href='/docs' name='Docs' />
                <Button href='/public/authentication/login' name='Account' />
            </Header>
            <Main>
                <></>
            </Main>
        </>
    );
}
