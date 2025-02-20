import { MainStyles } from '@styles/layout';
import { Container, Footer } from '@components/layout';

export default function Main({ children }: Layout.Main.Props) {
    return (
        <main className={[MainStyles.Main, 'layout'].join(' ')}>
            <Container>{children}</Container>
            <Footer />
        </main>
    );
}
