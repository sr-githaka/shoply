import { NavStyles } from '@styles/layout';

export default function Nav({ children }: Layout.Nav.Props) {
    return (
        <nav className={NavStyles.Nav}>
            <div className={NavStyles.Large}>{children}</div>
            <div className={NavStyles.Small}>
                <div className={NavStyles.Head}></div>
                <div className={NavStyles.Body}>{children}</div>
            </div>
        </nav>
    );
}
