import { ButtonStyles } from '@styles/shared';
import Link from 'next/link';

export default function Button({ href, name }: Shared.Button.Props) {
    return (
        <Link href={href} className={ButtonStyles.Button}>
            {name}
        </Link>
    );
}
