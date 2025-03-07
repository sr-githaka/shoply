import { MenuTypes } from '@_types/components/shared';
import { MenuStyles } from '@styles/shared';
import { Icon } from '@components/shared';

export default function Menu({}: MenuTypes.Props): MenuTypes.Return {
    return (
        <div className={MenuStyles.Menu}>
            <div className={MenuStyles.Head}>
                <Icon
                    name='close.svg'
                    alt='Menu icon'
                    width={12}
                    height={12}
                />
            </div>
        </div>
    );
}
