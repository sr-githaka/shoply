import { BrandTypes } from '@_types/components/shared';
import { BrandStyles } from '@styles/shared';
import { Logo } from '@components/shared';

export default function Brand({}: BrandTypes.Props) {
    return (
        <div className={BrandStyles.Brand}>
            <Logo />
            <p>Volty</p>
        </div>
    );
}
