import { HeaderTypes } from '@_types/components/layout';
import { Brand } from '@components/shared';
import { HeaderStyles } from '@styles/layout';
import { Nav } from '@components/layout';

export default function Header({ children }: HeaderTypes.Props) {
    return (
        <header className={HeaderStyles.Header}>
            <Brand />
            <Nav>{children}</Nav>
        </header>
    );
}
