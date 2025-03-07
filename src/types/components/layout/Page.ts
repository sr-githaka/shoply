import { ReactElement, ReactNode } from 'react';

export namespace Page {
    export interface Props {
        children: ReactNode;
    }

    export type Return = ReactElement;
}
