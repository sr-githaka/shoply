import { ReactElement, ReactNode } from 'react';

export namespace View {
    export interface Props {
        children: ReactNode;
        id: string;
        styles: string;
    }

    export type Return = ReactElement;
}
