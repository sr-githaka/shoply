import { NavAsideTypes } from '@_types/components/shared';
import { NavAsideStyles } from '@styles/shared';

export default function NavAside({ children }: NavAsideTypes.Props) {
    return (
        <aside className={NavAsideStyles.NavAside}>
            <div className={NavAsideStyles.Head}></div>
            <div className={NavAsideStyles.Body}>{children}</div>
        </aside>
    );
}
