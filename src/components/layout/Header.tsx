import { Brand } from '@components/shared';
import { HeaderStyles } from '@styles/layout';
import { Nav } from '@components/layout';

export default function Header({ children }: Layout.Header.Props) {
    return (
        <header className={[HeaderStyles.Header, 'layout'].join(' ')}>
            <Brand name='Shoply' />
            <Nav>{children}</Nav>
        </header>
    );
}
