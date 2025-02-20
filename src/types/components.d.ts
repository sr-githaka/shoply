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
    }
    namespace Layout {}
    namespace Views {}
}

export {};
