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
                user_id?: string;
                session_id?: string;
            };
        }
    }
}

export {};
