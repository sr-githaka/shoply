import { PageTypes } from '@_types/components/layout';
import { PageStyles } from '@styles/layout';

export default function Page({ children }: PageTypes.Props) {
    return <body className={PageStyles.Page}>{children}</body>;
}
