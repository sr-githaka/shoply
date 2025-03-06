import { ButtonTypes } from '@_types/components/shared';
import { ButtonStyles } from '@styles/shared';
import Link from 'next/link';

export default function Button({ href, name }: ButtonTypes.Props) {
    return (
        <Link
            href={href}
            className={ButtonStyles.Button}
        >
            {name}
        </Link>
    );
}
