import { NavTypes } from '@_types/components/layout';
import { NavAside } from '@components/shared';
import { NavStyles } from '@styles/layout';

/**
 * **Nav Component**
 *
 * Renders a navigational section that includes both a default navigation area and an aside navigation.
 * The component replicates its children into the default section and the aside, allowing for versatile navigation layouts.
 *
 * @param {NavTypes.Props} props - Component properties.
 * @property {ReactNode} props.children - The elements to be displayed within the navigation areas.
 * @returns {NavTypes.Return} The rendered Nav component.
 *
 * @example
 * <Nav>
 *   <li>Home</li>
 *   <li>About</li>
 * </Nav>
 *
 * @see {@link @_types/components/layout}
 */
export default function Nav({ children }: NavTypes.Props): NavTypes.Return {
    return (
        <nav className={NavStyles.Nav}>
            <div className={NavStyles.Default}>{children}</div>
            <NavAside>{children}</NavAside>
        </nav>
    );
}
