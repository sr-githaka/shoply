import useAuthentication from '@/core/hooks/useAuthentication';

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

            export interface ResetCredentials {
                email: string;
                password: string;
                confirmPassword: string;
            }
        }

        export namespace Handlers {}

        export namespace Hooks {
            namespace useAuthentication {
                interface Props {
                    type: 'Login' | 'Register' | 'Reset';
                }
            }
        }

        export namespace Utils {}
    }
}

export {};
