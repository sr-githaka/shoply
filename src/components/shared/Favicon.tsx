import { FaviconTypes } from '@_types/components/shared';

export default function Favicon({}: FaviconTypes.Props): FaviconTypes.Return {
    return (
        <link
            rel='shortcut icon'
            href='/icons/dark/favicon.ico'
            type='image/x-icon'
        />
    );
}
