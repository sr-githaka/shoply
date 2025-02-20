import { IconStyles } from '@styles/shared';
import Image from 'next/image';

export default function Icon({
    name,
    description,
    width,
    height,
    style,
}: Shared.Icon.Props) {
    return (
        <Image
            src={name}
            alt={description}
            width={width}
            height={height}
            className={[IconStyles, style].join(' ')}
        />
    );
}
