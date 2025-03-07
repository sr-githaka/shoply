import { MainTypes } from '@_types/components/layout';
import { MainStyles } from '@styles/layout';
import { Container, Footer } from '@components/layout';

/**
 * **Main Component**
 *
 * Renders the main section of the layout which serves as the primary container for the page content.
 * It integrates the Container and Footer components to structure the page layout.
 *
 * @param {MainTypes.Props} props - Component properties (currently empty).
 * @returns {MainTypes.Return} The rendered Main component.
 *
 * @example
 * <Main />
 *
 * @see {@link @_types/components/layout}
 */
export default function Main({}: MainTypes.Props): MainTypes.Return {
    return (
        <main className={MainStyles.Main}>
            <Container />
            <Footer />
        </main>
    );
}
