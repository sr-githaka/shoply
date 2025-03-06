import { MainTypes } from '@_types/components/layout';
import { MainStyles } from '@styles/layout';
import { Container, Footer } from '@components/layout';

export default function Main({}: MainTypes.Props) {
    return (
        <main className={MainStyles.Main}>
            <Container />
            <Footer />
        </main>
    );
}
