import { PageTypes } from '@_types/components/layout';
import { workSans } from '@fonts/dynamic';
import { PageStyles } from '@styles/layout';

export default function Page({ children }: PageTypes.Props) {
    return (
        <body className={[PageStyles.Page, workSans.className].join(' ')}>
            {children}
        </body>
    );
}
