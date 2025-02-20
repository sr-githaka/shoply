import { BrandStyles } from '@styles/shared';
import { Logo } from '@components/shared';

export default function Brand({ name }: Shared.Brand.Props) {
    return (
        <div className={BrandStyles.Brand}>
            <Logo />
            <p>{name}</p>
        </div>
    );
}
