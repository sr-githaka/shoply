import { NavStyles } from '@styles/layout';

export default function Nav({ children }: Layout.Nav.Props) {
    return <nav className={NavStyles.Nav}>{children}</nav>;
}
