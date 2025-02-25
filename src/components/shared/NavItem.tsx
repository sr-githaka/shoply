import { NavItemStyles } from '@styles/shared';
import Link from 'next/link';

export default function NavItem({ href, name, active }: Shared.NavItem.Props) {
    return (
        <Link
            scroll={false}
            href={href}
            className={active ? NavItemStyles.Active : NavItemStyles.NavItem}
        >
            {name}
        </Link>
    );
}
