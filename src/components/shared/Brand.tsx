import { BrandTypes } from '@_types/components/shared';
import { BrandStyles } from '@styles/shared';
import { Logo } from '@components/shared';

/**
 * **Brand Component**
 *
 * Renders a brand element that includes a logo and the text "Shoply".
 * This component does not require any additional properties.
 *
 * @param {BrandTypes.Props} props - Component properties (currently empty).
 * @returns {BrandTypes.Return} The rendered Brand component.
 *
 * @example
 * <Brand />
 *
 * @see {@link @_types/components/shared}
 */
export default function Brand({}: BrandTypes.Props): BrandTypes.Return {
    return (
        <div className={BrandStyles.Brand}>
            <Logo />
            <p>Shoply</p>
        </div>
    );
}
