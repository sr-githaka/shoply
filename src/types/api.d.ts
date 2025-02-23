declare global {
    export namespace API {
        export interface Response<T = undefined> {
            ok: boolean;
            info: string;
            error?: {
                origin: {
                    type: 'middleware' | 'handlers' | 'api';
                    method: string;
                };
                info: string;
            };
            data?: {
                hash?: string;
            };
        }
    }
}

export {};
