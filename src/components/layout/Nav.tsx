'use client';
import { useState } from 'react';
import { NavStyles } from '@styles/layout';

export default function Nav({ children }: Layout.Nav.Props) {
    const [state, setState] = useState(false);

    const toggleState = () => {
        setState(!state);
    };

    return (
        <nav className={NavStyles.Nav}>
            <div className={NavStyles.Large}>{children}</div>
            <div className={NavStyles.Small}>
                <div className={NavStyles.Head} onClick={toggleState}></div>
                {state ? (
                    <div className={NavStyles.Body}>{children}</div>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    );
}
