import { HeaderTypes } from '@_types/components/layout';
import { Brand } from '@components/shared';
import { HeaderStyles } from '@styles/layout';
import { Nav } from '@components/layout';

/**
 * **Header Component**
 *
 * Renders the header section of the layout, which includes the brand logo and navigation elements.
 * It accepts children that are rendered within the navigation component.
 *
 * @param {HeaderTypes.Props} props - Component properties.
 * @property {ReactNode} props.children - The elements to be displayed inside the navigation component.
 * @returns {HeaderTypes.Return} The rendered Header component.
 *
 * @example
 * <Header>
 *   <li>Home</li>
 *   <li>About</li>
 * </Header>
 *
 * @see {@link @_types/components/layout}
 */
export default function Header({
    children,
}: HeaderTypes.Props): HeaderTypes.Return {
    return (
        <header className={HeaderStyles.Header}>
            <Brand />
            <Nav>{children}</Nav>
        </header>
    );
}
