import { FooterTypes } from '@_types/components/layout';
import { FooterStyles } from '@styles/layout';

/**
 * **Footer Component**
 *
 * Renders a styled footer element containing a copyright notice.
 * This component does not require any additional properties.
 *
 * @param {FooterTypes.Props} props - Component properties (currently empty).
 * @returns {FooterTypes.Return} The rendered Footer component.
 *
 * @example
 * <Footer />
 *
 * @see {@link @_types/components/layout}
 */
export default function Footer({}: FooterTypes.Props): FooterTypes.Return {
    return (
        <footer className={FooterStyles.Footer}>
            <p>&copy; 2025, Shoply. All rights reserved.</p>
        </footer>
    );
}
