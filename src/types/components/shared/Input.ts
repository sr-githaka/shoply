import { ReactElement } from 'react';

export namespace Input {
    export interface Props {
        id?: string;
        label?: string;
        type: string;
        placeholder?: string;
        value?: string;
    }

    export type Return = ReactElement;
}
