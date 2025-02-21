import { BreadcrumbStyles } from '@styles/layout';

export default function Breadcrumb() {
    return (
        <div
            className={[BreadcrumbStyles.Breadcrumb, 'layout'].join(' ')}
        ></div>
    );
}
