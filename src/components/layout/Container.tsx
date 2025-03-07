import { ContainerTypes } from '@_types/components/layout';
import { ContainerStyles } from '@styles/layout';

/**
 * **Container Component**
 *
 * Renders a styled container element.
 * This component does not require any additional properties.
 *
 * @param {ContainerTypes.Props} props - Component properties (currently empty).
 * @returns {ContainerTypes.Return} The container element.
 *
 * @example
 * <Container />
 *
 * @see {@link @_types/components/layout}
 */
export default function Container({}: ContainerTypes.Props): ContainerTypes.Return {
    return <div className={ContainerStyles.Container}></div>;
}
