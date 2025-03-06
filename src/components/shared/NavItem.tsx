import { NavItemTypes } from '@_types/components/shared';
import { NavItemStyles } from '@styles/shared';
import Link from 'next/link';

export default function NavItem({ href, name, active }: NavItemTypes.Props) {
    return (
        <Link
            href={href}
            className={active ? NavItemStyles.Active : NavItemStyles.NavItem}
        >
            {name}
        </Link>
    );
}
