import { Page } from '@components/layout';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <Page>{children}</Page>
        </html>
    );
}
