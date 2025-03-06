import { HeaderTypes } from '@_types/components/layout';
import { Brand } from '@components/shared';
import { HeaderStyles } from '@styles/layout';

export default function Header({}: HeaderTypes.Props) {
    return (
        <header className={HeaderStyles.Header}>
            <Brand />
        </header>
    );
}
