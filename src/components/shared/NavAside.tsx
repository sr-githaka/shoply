'use client';
import { NavAsideTypes } from '@_types/components/shared';
import { NavAsideStyles } from '@styles/shared';
import { Icon } from '@components/shared';
import { useTrigger } from '@lib/hooks';

export default function NavAside({ children }: NavAsideTypes.Props) {
    const { trigger, pullTrigger } = useTrigger();
    return (
        <aside className={NavAsideStyles.NavAside}>
            <div
                className={NavAsideStyles.Head}
                onClick={pullTrigger}
            >
                <Icon
                    name={trigger ? 'cancel.svg' : 'menu.svg'}
                    alt='Menu icon'
                    width={24}
                    height={24}
                />
            </div>
            {trigger && <div className={NavAsideStyles.Body}>{children}</div>}
        </aside>
    );
}
