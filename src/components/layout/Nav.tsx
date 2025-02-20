'use client';

import { Icon } from '@components/shared';
import { useTrigger } from '@core/hooks';
import { NavStyles } from '@styles/layout';

export default function Nav({ children }: Layout.Nav.Props) {
    const { trigger, toggleTrigger } = useTrigger();
    return (
        <nav className={NavStyles.Nav}>
            <div className={NavStyles.Large}>{children}</div>
            <div className={NavStyles.Small}>
                <div className={NavStyles.Head} onClick={toggleTrigger}>
                    <Icon
                        name={trigger ? 'cancel.svg' : 'menu.svg'}
                        description='Navigation icon'
                        width={28}
                        height={16}
                    />
                </div>
                {trigger ? (
                    <div className={NavStyles.Body}>{children}</div>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    );
}
