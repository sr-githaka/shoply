import { ReactElement } from 'react';

export namespace Button {
    export interface Props {
        href: string;
        name: string;
    }

    export type Return = ReactElement;
}
