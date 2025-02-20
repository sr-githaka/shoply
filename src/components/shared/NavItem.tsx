import { NavItemStyles } from '@styles/shared';
import Link from 'next/link';

export default function NavItem({ href, name }: Shared.NavItem.Props) {
    return (
        <Link href={href} className={NavItemStyles.NavItem}>
            {name}
        </Link>
    );
}
