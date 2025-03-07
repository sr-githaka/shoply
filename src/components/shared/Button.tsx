import { ButtonTypes } from '@_types/components/shared';
import { ButtonStyles } from '@styles/shared';
import Link from 'next/link';

/**
 * **Button Component**
 *
 * Renders a link styled as a button using Next.js Link component.
 * It navigates to the specified `href` and displays the provided `name` as its text.
 *
 * @param {ButtonTypes.Props} props - Component properties.
 * @property {string} props.href - The destination URL for the button.
 * @property {string} props.name - The text to display on the button.
 * @returns {ButtonTypes.Return} The rendered Button component.
 *
 * @example
 * <Button href="/about" name="Learn More" />
 *
 * @see {@link @_types/components/shared}
 */
export default function Button({
    href,
    name,
}: ButtonTypes.Props): ButtonTypes.Return {
    return (
        <Link
            href={href}
            className={ButtonStyles.Button}
        >
            {name}
        </Link>
    );
}
