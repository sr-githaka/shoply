import { Icon } from '@components/shared';
import { BreadcrumbStyles } from '@styles/layout';

export default function Breadcrumb({ children }: Layout.Breadcrumb.Props) {
    return (
        <div className={[BreadcrumbStyles.Breadcrumb, 'layout'].join(' ')}>
            <div className={BreadcrumbStyles.Button}>
                <Icon
                    name='menu.svg'
                    description='Navigation icon'
                    width={18}
                    height={9}
                />
            </div>
            <p>Dashboard / </p>
            <div className={BreadcrumbStyles.Body}>{children}</div>
        </div>
    );
}
