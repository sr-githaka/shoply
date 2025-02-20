import { ReactNode } from 'react';

declare global {
    namespace Shared {
        namespace Icon {
            interface Props {
                name: string;
                description: string;
                width: number;
                height: number;
                style: string;
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
    }

    namespace Views {}
}

export {};
