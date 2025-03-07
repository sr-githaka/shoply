import { MainTypes } from '@_types/components/layout';
import { MainStyles } from '@styles/layout';
import { Container, Footer } from '@components/layout';

/**
 * **Main Component**
 *
 * Renders the main section of the layout, serving as the primary container for page content.
 * This component integrates the Container and Footer components to provide a structured layout,
 * with the Container wrapping any child elements provided.
 *
 * @param {MainTypes.Props} props - Component properties.
 * @property {ReactNode} props.children - The content to be rendered within the main container.
 * @returns {MainTypes.Return} The rendered Main component.
 *
 * @example
 * <Main>
 *   <h1>Welcome to the Site</h1>
 * </Main>
 *
 * @see {@link @_types/components/layout}
 */
export default function Main({ children }: MainTypes.Props): MainTypes.Return {
    return (
        <main className={MainStyles.Main}>
            <Container>{children}</Container>
            <Footer />
        </main>
    );
}
