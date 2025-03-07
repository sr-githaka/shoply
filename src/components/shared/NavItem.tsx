import { NavItemTypes } from '@_types/components/shared';
import { NavItemStyles } from '@styles/shared';
import Link from 'next/link';

/**
 * **NavItem Component**
 *
 * Renders a navigational link item styled conditionally based on its active state.
 * The component displays the provided name and navigates to the specified href.
 *
 * @param {NavItemTypes.Props} props - Component properties.
 * @property {string} props.href - The URL destination for the navigation item.
 * @property {string} props.name - The text to display for the navigation item.
 * @property {boolean} [props.active] - Indicates whether the navigation item is active.
 * @returns {NavItemTypes.Return} The rendered NavItem component.
 *
 * @example
 * <NavItem href="/home" name="Home" active />
 *
 * @see {@link @_types/components/shared}
 */
export default function NavItem({
    href,
    name,
    active,
}: NavItemTypes.Props): NavItemTypes.Return {
    return (
        <Link
            href={href}
            className={active ? NavItemStyles.Active : NavItemStyles.NavItem}
        >
            {name}
        </Link>
    );
}
