import { Icon } from '@components/shared';
import { LogoStyles } from '@styles/shared';

export default function Logo() {
    return (
        <Icon
            name='logo.svg'
            description='POS logo'
            width={24}
            height={24}
            style={LogoStyles.Logo}
        />
    );
}
