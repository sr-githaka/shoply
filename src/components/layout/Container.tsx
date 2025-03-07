import { ContainerTypes } from '@_types/components/layout';
import { ContainerStyles } from '@styles/layout';

/**
 * **Container Component**
 *
 * Renders a styled container element that wraps and displays its children.
 * This component serves as a layout wrapper for page content.
 *
 * @param {ContainerTypes.Props} props - Component properties.
 * @property {ReactNode} props.children - The content to be rendered inside the container.
 * @returns {ContainerTypes.Return} The container element.
 *
 * @example
 * <Container>
 *   <p>Content goes here</p>
 * </Container>
 *
 * @see {@link @_types/components/layout}
 */
export default function Container({
    children,
}: ContainerTypes.Props): ContainerTypes.Return {
    return <div className={ContainerStyles.Container}>{children}</div>;
}
