declare global {
    export namespace Core {
        export namespace Middleware {
            export interface LoginCredentials {
                email: string;
                password: string;
            }

            export interface RegisterCredentials {
                email: string;
                password: string;
                confirmPassword: string;
            }
        }

        export namespace Handlers {}

        export namespace Hooks {}

        export namespace Utils {}
    }
}

export {};
