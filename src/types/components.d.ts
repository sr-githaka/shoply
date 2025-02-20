import { ReactNode } from 'react';

declare global {
    namespace Shared {
        namespace Icon {
            interface Props {
                name: string;
                description: string;
                width: number;
                height: number;
                style?: string;
            }
        }

        namespace Brand {
            interface Props {
                name: string;
            }
        }

        namespace NavItem {
            interface Props {
                href: string;
                name: string;
                active?: boolean;
            }
        }

        namespace Button {
            interface Props {
                href: string;
                name: string;
            }
        }

        namespace Form {
            interface Props {
                children: ReactNode;
            }
        }

        namespace Input {
            interface Props {
                label?: string;
                id?: string;
                type: 'text' | 'email' | 'password' | 'submit';
                placeholder?: string;
                value?: string;
            }
        }
    }

    namespace Layout {
        namespace Nav {
            interface Props {
                children: ReactNode;
            }
        }

        namespace Header {
            interface Props {
                children: ReactNode;
            }
        }

        namespace View {
            interface Props {
                id: string;
                children: ReactNode;
            }
        }

        namespace Main {
            interface Props {
                children: ReactNode;
            }
        }

        namespace Container {
            interface Props {
                children: ReactNode;
            }
        }
    }

    namespace Views {}
}

export {};
