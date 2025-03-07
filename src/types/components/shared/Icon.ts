import { ReactElement } from 'react';

export namespace Icon {
    export interface Props {
        name: string;
        alt: string;
        width: number;
        height: number;
        style?: string;
    }

    export type Return = ReactElement;
}
