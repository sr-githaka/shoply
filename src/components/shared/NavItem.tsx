import { NavItemTypes } from '@_types/components/shared';
import { NavItemStyles } from '@styles/shared';
import Link from 'next/link';

export default function NavItem({ href, name }: NavItemTypes.Props) {
    return (
        <Link
            href={href}
            className={NavItemStyles.NavItem}
        >
            {name}
        </Link>
    );
}
