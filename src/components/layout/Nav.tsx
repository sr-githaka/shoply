import { NavTypes } from '@_types/components/layout';
import { NavAside } from '@components/shared';
import { NavStyles } from '@styles/layout';

export default function Nav({ children }: NavTypes.Props) {
    return (
        <nav className={NavStyles.Nav}>
            <div className={NavStyles.Default}>{children}</div>
            <NavAside>{children}</NavAside>
        </nav>
    );
}
