import Image from 'next/image';
import { IconTypes } from '@_types/components/shared';
import { IconStyles } from '@styles/shared';

export default function Icon({
    name,
    alt,
    width,
    height,
    style,
}: IconTypes.Props) {
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
