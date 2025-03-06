import { NavAsideTypes } from '@_types/components/shared';
import { NavAsideStyles } from '@styles/shared';
import { Icon } from '@components/shared';

export default function NavAside({ children }: NavAsideTypes.Props) {
    return (
        <aside className={NavAsideStyles.NavAside}>
            <div className={NavAsideStyles.Head}>
                <Icon
                    name='menu.svg'
                    alt='Menu icon'
                    width={24}
                    height={24}
                />
            </div>
            <div className={NavAsideStyles.Body}>{children}</div>
        </aside>
    );
}
