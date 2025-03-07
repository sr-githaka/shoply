import { ReactElement } from 'react';

export namespace NavItem {
    export interface Props {
        href: string;
        name: string;
        active?: boolean;
    }

    export type Return = ReactElement;
}
