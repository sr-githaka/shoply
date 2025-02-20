import { MainStyles } from '@styles/layout';
import { Container, Footer } from '@components/layout';

export default function Main() {
    return (
        <main className={[MainStyles.Main, 'layout'].join(' ')}>
            <Container />
            <Footer />
        </main>
    );
}
