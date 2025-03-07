import { Page } from '@components/layout';
import '@/styles/global.css';
import { Favicon } from '@components/shared';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <Favicon />
            </head>
            <Page>{children}</Page>
        </html>
    );
}
