import Image from 'next/image';
import { IconTypes } from '@_types/components/shared';
import { IconStyles } from '@styles/shared';

/**
 * **Icon Component**
 *
 * Renders an icon image using Next.js's `Image` component.
 * The icon is sourced from the `/icons/dark/` directory by concatenating the provided `name`.
 *
 * @param {IconTypes.Props} props - Component properties.
 * @property {string} props.name - The file name of the icon image.
 * @property {string} props.alt - Alternative text for the icon image.
 * @property {number} props.width - The width of the icon in pixels.
 * @property {number} props.height - The height of the icon in pixels.
 * @property {string} [props.style] - Optional additional CSS class(es) for styling the icon.
 * @returns {IconTypes.Return} The rendered Icon component.
 *
 * @example
 * <Icon name="menu.svg" alt="Menu icon" width={24} height={24} />
 *
 * @see {@link @_types/components/shared}
 */
export default function Icon({
    name,
    alt,
    width,
    height,
    style,
}: IconTypes.Props): IconTypes.Return {
    return (
        <Image
            src={`/icons/dark/${name}`}
            alt={alt}
            width={width}
            height={height}
            className={[IconStyles.Icon, style].join(' ')}
        />
    );
}
