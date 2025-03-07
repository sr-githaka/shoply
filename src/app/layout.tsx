import { Page } from '@components/layout';
import '@/styles/global.css';
import { Favicon, Manifest } from '@components/shared';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <Favicon />
                <Manifest />
            </head>
            <Page>{children}</Page>
        </html>
    );
}
