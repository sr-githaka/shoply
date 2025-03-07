import { ReactElement, ReactNode } from 'react';

export namespace Container {
    export interface Props {
        children: ReactNode;
    }

    export type Return = ReactElement;
}
