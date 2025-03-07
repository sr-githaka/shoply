import { LogoTypes } from '@_types/components/shared';
import { Icon } from '@components/shared';
import { LogoStyles } from '@styles/shared';

/**
 * **Logo Component**
 *
 * Renders the company logo using the Icon component.
 * The logo is displayed with a fixed size and a predefined style.
 * This component does not require any additional properties.
 *
 * @param {LogoTypes.Props} props - Component properties (currently empty).
 * @returns {LogoTypes.Return} The rendered Logo component.
 *
 * @example
 * <Logo />
 *
 * @see {@link @_types/components/shared}
 */
export default function Logo({}: LogoTypes.Props): LogoTypes.Return {
    return (
        <Icon
            name='logo.svg'
            alt='The Volty logo'
            width={28}
            height={28}
            style={LogoStyles.Logo}
        />
    );
}
