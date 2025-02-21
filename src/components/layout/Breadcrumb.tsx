'use client';

import { useTrigger } from '@core/hooks';
import { Icon } from '@components/shared';
import { BreadcrumbStyles } from '@styles/layout';

export default function Breadcrumb({ children }: Layout.Breadcrumb.Props) {
    const { trigger, toggleTrigger } = useTrigger();
    return (
        <div className={[BreadcrumbStyles.Breadcrumb, 'layout'].join(' ')}>
            <div className={BreadcrumbStyles.Button} onClick={toggleTrigger}>
                <Icon
                    name={trigger ? 'cancel.svg' : 'menu.svg'}
                    description='Navigation icon'
                    width={18}
                    height={9}
                />
            </div>
            <p>Dashboard / </p>
            {trigger ? (
                <div className={BreadcrumbStyles.Body}>{children}</div>
            ) : (
                <></>
            )}
        </div>
    );
}
