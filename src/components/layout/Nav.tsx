'use client';

import { useTrigger } from '@core/hooks';
import { NavStyles } from '@styles/layout';

export default function Nav({ children }: Layout.Nav.Props) {
    const { trigger, toggleTrigger } = useTrigger();
    return (
        <nav className={NavStyles.Nav}>
            <div className={NavStyles.Large}>{children}</div>
            <div className={NavStyles.Small}>
                <div className={NavStyles.Head} onClick={toggleTrigger}></div>
                {trigger ? (
                    <div className={NavStyles.Body}>{children}</div>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    );
}
