import { Page } from '@components/layout';
import '@/styles/global.css';

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
