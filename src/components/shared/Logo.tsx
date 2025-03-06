import { LogoTypes } from '@_types/components/shared';
import { Icon } from '@components/shared';
import { LogoStyles } from '@styles/shared';

export default function Logo({}: LogoTypes.Props) {
    return (
        <Icon
            name='logo.svg'
            alt='The Volty logo'
            width={32}
            height={32}
            style={LogoStyles.Logo}
        />
    );
}
