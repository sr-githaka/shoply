import { ReactElement } from 'react';

export namespace Authentication {
    export interface Props {
        type: 'Login' | 'Register' | 'Reset';
    }

    export type Return = ReactElement;
}
