'use client';
import { MenuTypes } from '@_types/components/shared';
import { MenuStyles } from '@styles/shared';
import { Icon, Logo } from '@components/shared';
import { useTrigger } from '@lib/hooks';
import { ocrA } from '@fonts/static';

export default function Menu({}: MenuTypes.Props): MenuTypes.Return {
    const { trigger, pullTrigger } = useTrigger();
    return (
        <div className={MenuStyles.Menu}>
            <div
                className={MenuStyles.Head}
                onClick={pullTrigger}
            >
                <Icon
                    name={trigger ? 'open.svg' : 'close.svg'}
                    alt='Menu icon'
                    width={12}
                    height={12}
                />
            </div>
            {trigger && (
                <div className={MenuStyles.Body}>
                    <div className={MenuStyles.Container}></div>
                    <div
                        className={MenuStyles.Filler}
                        onClick={pullTrigger}
                    ></div>
                </div>
            )}
        </div>
    );
}
