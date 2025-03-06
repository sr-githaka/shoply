import Image from 'next/image';
import { IconTypes } from '@_types/components/shared';

export default function Icon({ name, alt, width, height }: IconTypes.Props) {
    return (
        <Image
            src={`/icons/dark/${name}`}
            alt={alt}
            width={width}
            height={height}
        />
    );
}
